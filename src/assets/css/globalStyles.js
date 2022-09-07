import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Saira Stencil One', cursive;
        font-family: 'Raleway', sans-serif;
        --font-title: 'Saira Stencil One', cursive;
        --font-body: 'Raleway', sans-serif;
        --color-button: #a328d6;
    }

    body{
        background-color: #8C11BE;
        font-family: 'Raleway', sans-serif;
    }
`

export default GlobalStyle;