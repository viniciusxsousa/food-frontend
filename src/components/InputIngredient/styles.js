import styled from 'styled-components'

import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
    width: 118px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({theme, isnew}) => isnew === 'true' ? 'transparent' : theme.COLORS.LIGHT_600};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    border-radius: 8px;
    border: ${({theme, isnew}) => isnew === 'true' ? '1px dashed #7C7C8A' : 'none' };

    > input {
        width: 100%;
        padding: 10px 16px;

        border: none;
        outline: none;
        background-color: transparent;
    }

    > svg {
        margin-right: 10px;
        font-size: 18px;
    }

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {

        width: 150px;
        
        > input {
            font-size: 16px;
        }

    }

`