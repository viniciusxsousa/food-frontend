import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.DARK_400};
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 1.2rem;

    }

    body, button, input, textarea, a {
        font-family: "Poppins", sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 1.2rem;
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter .5s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

`