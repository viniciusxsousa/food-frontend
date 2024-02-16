import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 48px;
    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_900};

    overflow: hidden;

    > svg {
        font-size: 22px;
        margin-top: 12px;
        margin-left: 5px;
        color: ${({theme}) => theme.COLORS.LIGHT_500};
    }

    > input {
        height: 100%;
        padding-left: 14px;
        
        border: none;
        background-color: transparent;
        outline: none;

        color: ${({theme}) => theme.COLORS.LIGHT_100};

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500}
        }
    }
`