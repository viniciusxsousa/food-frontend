import styled from 'styled-components';

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

            font-size: 16px;
            color: ${({theme}) => theme.COLORS.LIGHT_300};

            svg {
                font-size: 24px;
            }
        }

        > form {
            width: 100%;

            label {
                font-size: 16px;
                color: ${({theme}) => theme.COLORS.LIGHT_400};
            }

            div {
                margin: 10px 0 16px;
            }

            > div:nth-child(2){
                position: relative;

                &::after {
                    content: 'selecione imagem';
                    position: absolute;
                    top: 10px;

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