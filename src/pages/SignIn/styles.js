import styled from 'styled-components'

import { BREAKPOINTS } from '../../styles/breakpoints';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding: 0px 47px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div:nth-child(1) {
        display: flex;
        gap: 10px;

        margin-bottom: 55px;

        h1 {
            font-size: 27px;
        }
    }

    > div:nth-child(2) {
        p {
            display: none;
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
            margin-bottom: 28px;
        }

        button {
            margin-bottom: 28px;
        }
    }

    a {
        display: block;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 14px;
        margin: auto;
        text-align: center;
    }

    @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
        > div:nth-child(2) {
            max-width: 400px;
            padding: 45px 50px;
            border-radius: 16px;

            background-color: ${({theme}) => theme.COLORS.DARK_700};
        }            
    }

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
        flex-direction: row;
        gap: 300px;

        > div:nth-child(1) {

            img {
              width: 50px;
            }

            h1 {
                font-size: 4.2rem;
            }

        }

        >div:nth-child(2) {
            p{
                display: block;
                font-size: 3.2rem;
                font-weight: 500;
                text-align: center;
                margin-bottom: 32px;
            }
        }
    };
`