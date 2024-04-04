import { styled } from "styled-components";

import { BREAKPOINTS } from '../../styles/breakpoints' 

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
        max-width: 100%;
    }

    > div {
        margin-top: 3rem;

        button {
            font-size: 1.5rem;
            font-weight: 500;
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.TABLET}) {
        
        > img {
            width: 400px;
        }

    }

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
        
        h2 {
           font-size: 2.5rem ;
        }

        > img {
            width: 500px;
        }

        > div {
            
            button {
                font-size: 2rem;
            }

        }

    }
`