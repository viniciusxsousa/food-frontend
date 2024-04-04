import { styled } from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 114px auto 77px;


    position: absolute;
    transform: translateX(-100%);
    
    height: 100vh;

    transition: all .5s ease-in;


    background-color: ${({theme}) => theme.COLORS.DARK_400};
    z-index: 1;

    &[data-is-open='true']{
        transform: translateX(0%);
    }
`

export const Header = styled.div`
    width: 100%;
    height: 114px;

    background-color: ${({theme }) => theme.COLORS.DARK_700};

    > button {
        border: none;
        background-color: transparent;

        font-size: 2.2rem;

        display: flex;
        align-items: center;
        gap: 1rem;

       padding: 56px 28px 24px;
    }
`

export const Content = styled.div`
    min-width: 100%;
    padding: 36px 28px;

    > ul {
        list-style-type: none;
    }

    li {
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.LIGHT_300};

        padding: 1rem;

        border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
    }
`