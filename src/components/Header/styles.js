import { styled } from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding: 60px 26px 24px;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    display: flex;
    justify-content: space-between;
    grid-area: header;

    > svg {
        font-size: 28px;
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;

    > img {
        width: 24px;
    }

    > h1 {
        font-size: 2rem;
    }

    > span {
       color: ${ ({theme}) => theme.COLORS.CAKE_200 };
       font-size: 1rem;
       transform: translateY(10px);
    }
`

export const Order = styled.div`
    position: relative;

    > svg {
        font-size: 2.8rem;
    }

    > div {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-color: ${({theme}) => theme.COLORS.TOMATO_200};
        top: -5px;
        right: -5px;
    }
`