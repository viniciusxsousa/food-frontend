import styled from 'styled-components'

export const Container = styled.span`
    background-color: ${({theme}) => theme.COLORS.DARK_1000};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    padding: 8px 4px;
    border-radius: 5px;
`