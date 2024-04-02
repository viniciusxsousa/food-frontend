import styled from 'styled-components';

import { Link } from 'react-router-dom';

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
`

export const Ingredients = styled.div`
   display: flex;
   justify-content: center;
   gap: 10px;
   flex-wrap: wrap;
   

   margin-bottom: 48px;
`