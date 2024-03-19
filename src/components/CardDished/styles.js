import styled from 'styled-components';

import { Link } from 'react-router-dom';  

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
    }

    > p {
        font-size: 12px;
        font-weight: 500;
    }
`

export const Dished = styled(Link)`
        font-size: 12px;
        font-weight: 500;
`

export const Price = styled.p`
    color: ${({theme}) => theme.COLORS.CAKE_200};
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    > svg {
        font-size: 30px;
    }
`