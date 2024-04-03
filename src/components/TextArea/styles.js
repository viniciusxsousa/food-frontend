import styled from 'styled-components';

import { BREAKPOINTS } from '../../styles/breakpoints';

export const Container = styled.textarea`
    width: 100%;
    height: 170px;
    resize: none;

    border-radius: 8px;
    background-color: ${({theme}) => theme.COLORS.DARK_800};
    border: none;
    outline: none;
    padding: 14px;

    color: ${({theme}) => theme.COLORS.LIGHT_500};
    font-weight: 400;

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
        font-size: 16px;
    }
`