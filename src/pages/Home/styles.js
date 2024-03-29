import styled from 'styled-components'

import { BREAKPOINTS } from '../../styles/breakpoints'

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
    grid-area: content;

    padding-top: 44px;

    overflow-y: scroll;
    

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}){

        > div {
            width: 1050px;
            margin-left: auto;
            margin-right: auto;
        }
    }
`

export const Flavors = styled.div`
    margin: 0px 16px 0px 20px;
    padding-bottom: 22px;
    position: relative;

    background: linear-gradient(180deg, rgba(9,30,38,1) 15%, rgba(0,19,28,1) 76%);

    width: 88%;

    > h2 {
        padding: 36px 10px 0;
        font-size: 1.8rem;
        letter-spacing: 1.5px;
    }

    p {
        font-size: 1.2rem;
        padding: 5px 10px 0px;
    }

    > img {
        display: none;
        height: 155px;
        width: 180px;
    }

    @media screen and (min-width: ${BREAKPOINTS.MOBILEL}){
        > img {
                display: block;
                position: absolute;
                top: -25px;
                left: -32px;
            } 

        > h2, p {
            margin-left: 130px;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
        margin: auto;
        height: 14.9rem;

        > img {
            height: 178.8px;
            width: 229.2px;
            top: -30px
        }

        > h2, p {
            padding-left: 70px;
        }

        > h2 {
            font-size: 2rem;
        }

        > p {
            font-size: 1.6rem;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
        margin: 80px 0px 0px;
        width: 100%;

        height: 200px;

        > img {
            width: 490px;
            height: 300px;

            top: -92px;
        }

        > h2, p {
            padding-left: 350px;
        }

        >h2 {
            font-size: 43px;
            font-weight: 500;
        }
    }

`