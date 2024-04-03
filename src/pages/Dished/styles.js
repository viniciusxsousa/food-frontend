import styled from 'styled-components';

import { Link } from 'react-router-dom';

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
   grid-area: content;
   padding: 16px 36px 33px;

   > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      a { 
         align-self: start;
         font-size: 2.4rem;
         margin-top: 20px;
      }
   }

   > div div {
      width: 100%;
   }

   > div div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   > div div img {
     width: 244px;
     height: 244px;
     margin: 16px 0;
   }

   > div div h2 {
        font-size: 27px;
        font-weight: 500;
        text-align: center;
        
        margin-bottom: 24px;
   }

   > div div p {
    text-align: center;
    font-size: 16px;
    font-weight: 400;

    margin-bottom: 48px;
   }

   @media screen and (min-width: ${BREAKPOINTS.TABLET}){
      padding: 16px 100px 33px;
   }

   @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
      
      > div {
         flex-direction: row;

         div:nth-child(1) {

            a {
               margin-left: 7rem;
            }

            img {
               width: 390px;
               height: 390px;
            }
         }

         div:nth-child(2) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            h2 {
               font-size: 40px;
            }

            p {
               font-size: 24px;
            }

            button {
               width: 130px;
            }

         }

      }

   }
`

export const Back = styled(Link)`
     display: flex;
     align-items: center;
     gap: 2px;

     svg {
        font-size: 30px;
     }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

   > svg {
    font-size: 60px;
   }

   @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
      
      span {
         font-size: 20px;
      }

   }
`

export const Ingredients = styled.div`
   display: flex;
   justify-content: center;
   gap: 10px;
   flex-wrap: wrap;
   

   margin-bottom: 48px;

   @media screen and (min-width: ${BREAKPOINTS.DESKTOP}){
      justify-content: flex-start;
   }
`