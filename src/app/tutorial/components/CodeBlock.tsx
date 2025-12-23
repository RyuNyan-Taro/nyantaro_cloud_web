import React, { useEffect, useState } from "react";
import Prism from 'prismjs';

import "prismjs/themes/prism-tomorrow.css";

import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";

export type CodeBlockProps = {
  code: string;
  language?: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "typescript" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const highlight = async () => {

      // 少し遅延を入れてDOMの準備が完了してから実行
      setTimeout(() => {
        Prism.highlightAll();
      }, 1000);
    };

    highlight();
  }, [code, language]);

  if (!isClient) {
    return (
      <pre className={`language-${language}`} style={{ borderRadius: "10px", padding: "1rem" }}>
                <code className={`language-${language}`}>{code}</code>
            </pre>
    );
  }

  return (
    <pre className={`language-${language}`} style={{ borderRadius: "10px", padding: "1rem" }}>
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
  );
};