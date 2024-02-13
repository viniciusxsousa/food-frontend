import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 48px;
    padding: 5px 24px;
    
    border: none;
    border-radius: 5px;

    background: red;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 14px;
`