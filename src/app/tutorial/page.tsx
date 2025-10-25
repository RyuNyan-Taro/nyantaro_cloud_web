'use client';

import React, { useEffect, useState } from "react";
import Prism from 'prismjs';
import "./Tutorial.css"

import "prismjs/themes/prism-tomorrow.css";

// Then import the core languages that TSX depends on
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
// Now we can safely import TSX
import "prismjs/components/prism-tsx";

// Other language imports
import "prismjs/components/prism-json";
import "prismjs/components/prism-css";



type CodeBlockProps = {
    code: string;
    language?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "typescript" }) => {
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

const LayoutContainer  = `
<div class="container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
</div>
`;

const FlexDirection = `
<div class="vertical">
  Text without span
  <span>Text inside span</span>
  <a href="https://example.com">Link</a>
</div>
`

const VerticalCSS = `
.vertical {
  display: flex;
  flex-direction: column;
}
`

const HorizontalCSS = `
.horizontal {
  display: flex;
  flex-direction: row;
}
`

export default function TutorialPage() {
    return (
      <div style={{backgroundColor: "#0a0a0a", color: "#eaeaea", minHeight: "100vh", padding: "2rem"}}>
          <a href="https://2ality.com/2025/10/css-layout.html">ref</a>
        <h1 className="text-3xl font-bold mb-8">Container</h1>
        <CodeBlock code={LayoutContainer} language="html"/>
        <div className="container">
          <div className="item">A</div>
          <div className="item">B</div>
          <div className="item">C</div>
        </div>
        <h1 className="text-3xl font-bold mb-8">flexbox</h1>
        <h2 className="text-2xl font-bold mb-8">vertical</h2>
        <CodeBlock code={FlexDirection} language="html"/>
        <CodeBlock code={VerticalCSS} language="css"/>
        <div className="vertical">
            Text without span
            <span>Text inside span</span>
            <a href="https://example.com">Link</a>
        </div>
        <h2 className="text-2xl font-bold mb-8">horizontal (default)</h2>
        <CodeBlock code={HorizontalCSS} language="css"/>
        <div className="horizontal">
          Text without span
          <span>Text inside span</span>
          <a href="https://example.com">Link</a>
        </div>
      </div>
    );
}