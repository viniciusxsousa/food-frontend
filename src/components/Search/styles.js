import { styled } from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";

export const Container = styled.div`
    width: 100%;
    height: 4.8rem;

    border-radius: 5px;
    padding: 0px 14px;

    background-color: ${ ({theme}) => theme.COLORS.DARK_900};
    color: ${ ({theme}) => theme.COLORS.LIGHT_500};

    margin-bottom: 36px;

    display: flex;
    align-items: center;
    gap: 1.4rem;

    > svg {
        font-size: 2.4rem;
    }

    > input {
        max-width: 100%;
        height: 100%;
        padding: 12px 0;

        background-color: transparent;
        border: none;

        font-size: 1.6rem;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${ ({theme}) => theme.COLORS.LIGHT_500};
        }
    }

    @media screen and (min-width: ${BREAKPOINTS.DESKTOP}) {
        width: 581px;
        margin-bottom: 0px;
    }
`