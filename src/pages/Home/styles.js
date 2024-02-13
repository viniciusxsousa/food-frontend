import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vw;

    grid-template-rows: 114px auto 75px;
    grid-template-areas: 
    'header'
    'content'
    'footer';
`

export const Content = styled.div`
    grid-area: content;

    height: 100%;
`

export const Flavors = styled.div`
    margin: 44px 16px 0 20px;

    background: linear-gradient(180deg, rgba(9,30,38,1) 15%, rgba(0,19,28,1) 76%);

    width: 280px;
    height: 120px;

    > h2 {
        padding: 36px 10px 0;
        font-size: 18px;
        letter-spacing: 1.5px;
    }

    p {
        font-size: 12px;
        padding: 5px 10px 0;
    }
`