import styled from 'styled-components';

import { Link } from 'react-router-dom';  

import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.article`
    width: 210px;
    max-height: 292px;
    border-radius: 8px;
    padding: 24px;

    background-color: ${({theme}) => theme.COLORS.DARK_200};

    border: 1px solid ${({theme}) => theme.COLORS.DARK_300};

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    flex-shrink: 0;

    > button:first-child {
        align-self: flex-end;
        border: none;
        background-color: transparent;

        svg {
            font-size: 24px;
        }
    }

    > img {
        width: 88px;
        height: 88px;

        margin-top: -30px;

        border-radius: 50%;
    }

    > div {
        display: flex;
        gap: 18px;
    }

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}){
        width: 304px;
        max-height: 462px;

        > img {
            width: 176px;
            height: 176px;
        }
    }
`

export const Dished = styled(Link)`
    font-size: 1.4rem;
    font-weight: 500;

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
        font-size: 2.4rem;
    }
`

export const Price = styled.p`
    color: ${({theme}) => theme.COLORS.CAKE_200};
    font-size: 1.6rem;

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
        font-size: 3.2rem;
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    > svg {
        font-size: 30px;
    }

    > span {
        font-size: 1.6rem;
    }

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
        
        > span {
            font-size: 2rem;
        }
    }
`