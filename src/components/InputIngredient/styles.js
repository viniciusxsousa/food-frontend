import styled from 'styled-components'

export const Container = styled.div`
    width: 118px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.LIGHT_600};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    border-radius: 8px;
    border: ${({theme, isNew}) => isNew ? '1px dashed #7C7C8A' : 'none' };

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

`