import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 62.5%; 
  }
        
  *, *::before, *::after {
    box-sizing: inherit;
  }
        
  ul, li, h1, h2, h3, p, button {
    margin: 0;
    list-style: none;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    height: 100vh;
    width: 100%; 
    max-width: 500px;
    margin: 0 auto;
    overscroll-behavior: none;
      @media(min-width: 450px) {
        max-width: 80%;
        display: flex;
        justify-content: center; 
        align-items: center;
      }
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-x: hidden;
    background-color: #052A59;
      @media(min-width: 450px) {
        width: 100%;
        max-width: 2000px;
        min-height: 80%;
        max-height: 80%;
        border-radius: 50px;
        flex-flow: row wrap;
        align-items: center;
        .app-container {
          margin-left: 50px;
          width: 100%;
          /* height: 100vh; */
          display: flex;
          flex-direction: column;
          /* align-items: center; */
          /* justify-content: center; */

          border: 1px solid red;
        }
        /* flex-flow: row wrap; */
      }
  }
`

