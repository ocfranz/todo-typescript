import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
    body, html{
        border : 0;
        margin :0;
        padding: 0;
    }
    body{
        height: 100%;
        background: #FFFFFF;
        color: #000000;
        -webkit-transition: background-color 0.5s linear;
        -moz-transition:  background-color 0.5s linear;
        -o-transition: background-color 0.5s linear;
        transition:  background-color 0.5s linear;
    }    
    *{
        font-family: 'Poppins', sans-serif;
    }
`;
export default GlobalStyles;
