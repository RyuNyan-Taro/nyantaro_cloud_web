import React from 'react';
import {CodeBlock} from "./CodeBlock";
import { MainTitle, SubTitle } from "./Titles";
import "./Flexbox.css"

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

export const Flexbox = () => {
  return (
    <>
      <MainTitle>Flexbox</MainTitle>
      <SubTitle>vertical</SubTitle>
      <CodeBlock code={FlexDirection} language="html"/>
      <CodeBlock code={VerticalCSS} language="css"/>
      <div className="vertical">
        Text without span
        <span>Text inside span</span>
        <a href="https://example.com">Link</a>
      </div>
      <SubTitle>horizontal (default)</SubTitle>
      <CodeBlock code={HorizontalCSS} language="css"/>
      <div className="horizontal">
        Text without span
        <span>Text inside span</span>
        <a href="https://example.com">Link</a>
      </div>
      <SubTitle>row-reverse</SubTitle>
      <CodeBlock code={`
          .row-reverse {
          display: flex;
          flex-direction: row-reverse;
        }
      `} language="css"/>
      <div className="row-reverse">
        Text without span
        <span>Text inside span</span>
      </div>
    </>
  );
};

export default Flexbox;
