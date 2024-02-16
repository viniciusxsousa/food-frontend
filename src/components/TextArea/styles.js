import styled from 'styled-components';

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
`