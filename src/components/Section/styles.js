import styled from 'styled-components';

import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
    padding: 24px 0px 0px 24px;
    margin-bottom: 24px;

    > h2 {
        font-size: 1.8rem;
        font-weight: 500;
        margin-bottom: 18px;
    }

    > div {
        display: flex;
        gap: 16px;
        
        overflow: hidden;
    }

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
        padding: 0;
        padding-top: 24px;


        > h2 {
            font-size: 2.8rem;
        }

    }
`