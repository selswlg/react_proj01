import { useState, useEffect, useRef, useMemo } from "react";
import { createGlobalStyle } from "styled-components";
import TodoHead from "./components/TodoHead";
import TodoTemplate from "./components/TodoTemplate";
// global 적용 css
const GlobalStyle = createGlobalStyle`
  body {
      background: #e9ecef;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />

      <TodoTemplate>안녕하세요!</TodoTemplate>
    </>
  );
}
