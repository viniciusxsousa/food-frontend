import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 48px;
    padding: 5px 24px;
    
    border: none;
    border-radius: 5px;

    background: ${({theme, dark}) => dark === 'true' ? theme.COLORS.DARK_800 : theme.COLORS.TOMATO_100};
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 14px;
`