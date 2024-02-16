import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    height: 48px;
    background-color: ${({theme}) => theme.COLORS.DARK_900};
    
    border-radius: 8px;

    > select {
        display: block;
        width: 100%;
        height: 100%;

        background-color: transparent;
        padding-left: 10px;
        border: none;
        outline: none;

        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 16px;
        appearance: none;
    }

    > svg {
        margin-right: 15px;
        font-size: 20px;
    }
    
`