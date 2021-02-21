import { createGlobalStyle } from 'styled-components'
import '@fontsource/lato'
import '@fontsource/lato/100.css'
import '@fontsource/lato/300.css'
import '@fontsource/lato/700.css'
import '@fontsource/lato/900.css'
import '@fontsource/piedra'
import '@fontsource/cabin-sketch'
import '@fontsource/cabin-sketch/700.css'

export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, font, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }
  /* remember to define focus styles! */
  :focus {
    outline: 0;
  }

  :root {
    --primary-background-color: #e5e5e5;
    --secondary-background-color: #f1f2f3;
    --primary-text-color: #111;
    --primary-green-color: #264F12;
    --secondary-green-color: #567d46;
    --strong-green-color: #4e7942;
    --paragraph-green-color: #577447;
    --whatsapp-green-color: #008000;
    --span-red-color: #C40233;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    line-height: 1rem;
    background-color: var(--primary-background-color);
    color: #111;
    font-family: 'Lato', sans-serif;
    font-size: 0.875rem;

    @media screen and (min-width: 20rem) {
      font-size: calc(0.875rem + 0.5 * ((100vw - 20rem) / 60));
    }

    @media screen and (min-width: 80rem) {
      font-size: 1.375rem;
    }
  }

  button {
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
  }

  ol, ul {
    list-style: none;
  }
  /* tables still need 'cellspacing="0"' in the markup */
  table {
    border-collapse: separate;
    border-spacing: 0;
  }
  caption, th, td {
    text-align: left;
    font-weight: normal;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: "";
  }
  blockquote, q {
    quotes: "" "";
  }
`
