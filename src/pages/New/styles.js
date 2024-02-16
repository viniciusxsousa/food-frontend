import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const Content = styled.div`
    padding: 10px 32px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    > a {
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

        div:nth-child(2){
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
    }
`