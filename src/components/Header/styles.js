import { styled } from "styled-components";

import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.header`
    width: 100%;
    padding: 60px 26px 24px;
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: header;

    > svg {
        font-size: 28px;
    }

    > div:nth-child(3) {
        display: none;
    }

    > div:nth-child(4) {
        display: flex;
        gap: 1.5rem;

        button:nth-child(1) {
            display: none;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}){
        padding: 24px 123px 24px;
        gap: 32px;

        > div:nth-child(3) {
            display: flex;
            justify-content: center;
        }

        >div:nth-child(4) {
            button:nth-child(1) {
                display: block;
            }
        }
    }
`

export const Logo = styled.div`
    ${ ({ rule }) => {
        if(rule === "admin") {
            return 'margin-left: auto; margin-right: auto;'
        }
    } }

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

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}){
        width: 180px;
    }
`

export const Order = styled.div`
    position: relative;

    > svg {
        font-size: 2.8rem;
    }

    > p {
        display: none;
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

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
        position: static;
        width: 180px;
        height: 46px;
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;

        padding: 12px 32px;

        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        cursor: pointer;

        > p {
            display: block;
        }

        > div {
           position: static;

           background-color: transparent;

           &::before {
            content: '(';
           }

           &::after {
            content: ')';
           }
        }

    }
`

export const NewDished = styled.button`
    width: 180px;
    height: 46px;
   
    border: none;
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};

    font-size: 1.6rem;
    font-weight: 500;
`

export const Menu = styled.button`
    border: none;
    background-color: transparent;

    > svg {
        font-size: 2.4rem;
    }

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
        display: none;
    }
`

export const Logout = styled.button`
    border: none;
    background-color: transparent;
    display: none;

    @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
        display: block;
        font-size: 2.4rem;
    }
`