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
    background-color: #fefefe;
    height: 100vh;
    margin: 0 auto;
    width: 300px;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
    @media(min-width: 600px) {
      max-width: 70%;  
      display: flex;
      align-items: center;
      justify-content: center;
      }
  }

  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
    overflow-x: hidden;
    min-height: 100vh;
    border: 1px solid black;
    background-color: #052A59;
      @media(min-width: 600px) {
        max-width: 2000px;
        width: 100%;
        min-height: 70%;
        border-radius: 50px;
        flex-flow: row wrap;
      }
  }
`

