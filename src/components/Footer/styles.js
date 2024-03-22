import styled from 'styled-components';

export const Container = styled.footer`
    background-color: ${({theme}) => theme.COLORS.DARK_600};
    padding: 29px 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    > div {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    > div h2 {
        font-size: 1rem;
        font-weight: 500;
        color: ${({theme}) => theme.COLORS.LIGHT_700};
    }

    p {
        font-size: .9rem;
    }
`