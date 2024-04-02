import styled from "styled-components"

import { BREAKPOINTS } from "../../styles/breakpoints"

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding: 0 47px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:nth-child(1) {
        display: flex;
        gap: 14px;

        margin-bottom: 40px;

        h1 {
            font-size: 28px;
        }
    }

    > div:nth-child(2) {

        a {
            display: block;
            text-align: center;
        }
    }

    form {
        width: 100%;

        label {
            color: ${({theme}) => theme.COLORS.LIGHT_400};

            font-family: "Roboto", sans-serif;
            font-size: 14px;
            font-weight: 500;

            display: inline-block;
            margin-bottom: 8px;
        }

        div {
            margin-bottom: 18px;
        }

        button {
            margin-bottom: 18px;
        }
    }

    @media screen and (min-width: ${ BREAKPOINTS.TABLET } ) {

        > div:nth-child(1) {
            margin-bottom: 20px;
        }
        
        > div:nth-child(2) {
            background-color: ${({theme}) => theme.COLORS.DARK_700};
            padding: 45px;
            border-radius: 16px;
        }

    }
`