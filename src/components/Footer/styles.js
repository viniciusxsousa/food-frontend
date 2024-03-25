import styled from 'styled-components';

import { BREAKPOINTS } from '../../styles/breakpoints';

export const Container = styled.footer`
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    padding: 29px 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    @media screen and (min-width: ${BREAKPOINTS.MOBILEL}) {
        gap: 2rem;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    > div h2 {
        font-size: 1rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_700};

        @media screen and (min-width: ${BREAKPOINTS.MOBILEL}){
            font-size: 1.5rem;
            font-weight: 700;
        }
    }

    p {
        font-size: .9rem;

        @media screen and (min-width: ${BREAKPOINTS.MOBILEL}){
            font-size: 1.2rem;
        }
    }
`