import { Global, css } from '@emotion/react';
import React from 'react';
import reset from 'styled-reset';

const style = css`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif !important;
    margin: 0;
    padding: 0;
  }

  button:hover {
    cursor: pointer;
  }

  input:focus {
    outline: none;
  }
`;

export default function GlobalStyle() {
  return <Global styles={style} />;
}
