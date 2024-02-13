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