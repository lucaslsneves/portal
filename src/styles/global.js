import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  body, html, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background-color: #121214;
    color: #e1e1e6;

    h1 {
      margin-bottom: 10px;
    }

    @media(max-width: 750px) {
      h1 {
        text-align: center;
      }
    }
  }
  body, input, button {
    font: 14px 'Inter', sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  `;