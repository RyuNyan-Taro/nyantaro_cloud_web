import React from 'react';
import {CodeBlock} from "./CodeBlock";
import { MainTitle } from "./Titles";

export const Container = () => {
  return (
    <>
      <MainTitle>Container</MainTitle>
      <CodeBlock code={`
        <div class="container">
          <div class="item">A</div>
          <div class="item">B</div>
          <div class="item">C</div>
        </div>
      `} language="html"/>
      <div className="container">
        <div className="item">A</div>
        <div className="item">B</div>
        <div className="item">C</div>
      </div>
    </>
  );
};

export default Container;