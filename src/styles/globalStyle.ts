import { css } from '@emotion/react';

import { colorPalatte, colors } from './colors';
import { typographyMap } from './fonts';

export default css`
  ${colorPalatte}
  ${typographyMap}

  body,
  span,
  applet,
  object,
  iframe,
  div,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    font: inherit;
  }

  body {
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    padding: 0 100px;
    box-sizing: border-box;
    line-height: 1;
    margin: 0;
    padding: 0;
    background-color: ${colors.background};
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    box-shadow: 0 0 0px 1000px transparent inset;
    -webkit-text-fill-color: ${colors.black20};
    transition: background-color 5000s ease-in-out 0s;
  }

  input:-moz-autofill {
    box-shadow: 0 0 0px 1000px transparent inset;
    -moz-text-fill-color: ${colors.black20};
    transition: background-color 5000s ease-in-out 0s;
  }

  input:-ms-autofill {
    box-shadow: 0 0 0px 1000px transparent inset;
    -ms-text-fill-color: ${colors.black20};
    transition: background-color 5000s ease-in-out 0s;
  }

  input:autofill {
    box-shadow: 0 0 0px 1000px transparent inset;
    text-fill-color: ${colors.black20};
    transition: background-color 5000s ease-in-out 0s;
  }
`;
