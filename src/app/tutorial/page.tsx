'use client'

import { Container } from "./components/Container";
import { Flexbox } from "./components/Flexbox";

export default function TutorialPage() {
    return (
      <div style={{backgroundColor: "#0a0a0a", color: "#eaeaea", minHeight: "100vh", padding: "2rem"}}>
        <a href="https://2ality.com/2025/10/css-layout.html">ref</a>
        <Container />
        <Flexbox />
      </div>
    );
}