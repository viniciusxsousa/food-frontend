import styled from 'styled-components';

import { BREAKPOINTS } from '../../styles/breakpoints';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 114px auto;
    grid-template-areas: 
    'header'
    'content';
`

export const Content = styled.div`
    grid-area: 'content';
    overflow-y: auto;

    > div {
        padding: 10px 32px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;

        > p {
            display: flex;

            cursor: pointer;

            font-size: 16px;
            color: ${({theme}) => theme.COLORS.LIGHT_300};

            svg {
                font-size: 24px;
            }

            @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
                font-size: 2.4rem;

                svg {
                    font-size: 3.2rem;
                }
            }
        }

        > form {
            width: 100%;

            label {
                font-size: 16px;
                color: ${({theme}) => theme.COLORS.LIGHT_400};
            }

            div div {
                margin: 10px 0 16px;
            }

            > div:nth-child(1) div{
                position: relative;

                &::after {
                    content: 'selecione imagem';
                    position: absolute;
                    top: 15px;

                    margin-left: 10px;
                }

                & input[type='file'] {
                    display: none;
                }
            }

            > textarea {
                margin: 10px 0 16px;
            }

            > button {
                margin-bottom: 53px;
            }
        }


        @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
            padding: 40px 123px;

            h2 {
                font-size: 3.2rem;
            }

            form {
                display: grid;
                grid-template-columns: auto auto auto;
                grid-template-rows: auto auto auto auto;
                grid-template-areas: 
                'image        name           category'
                'ingredient   ingredient     price'
                'description  description    description'
                '.            .              button';
                grid-gap: 1.5rem 3rem;

                div:nth-child(1) {
                   grid-area: image;
                }

                div:nth-child(2) {
                    grid-area: name;
                }

                div:nth-child(3) {
                    grid-area: category;
                }

                div:nth-child(4) {
                    grid-area: ingredient;
                }

                div:nth-child(5) {
                    grid-area: price;
                }

                div:nth-child(6) {
                    grid-area: description;
                }

                button {
                    grid-area: button;
                }
            }
        }
    }
`

export const Ingredients = styled.div`
    width: 100%;
    min-height: 48px;

    padding: 4px 8px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    flex-wrap: wrap;

    background-color: ${({theme}) => theme.COLORS.DARK_800};

    border-radius: 8px;
`