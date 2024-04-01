import styled from 'styled-components'

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
`