import { Container } from './styles'

export function Button({title, dark}) {
    return (
        <Container dark={dark}>
            {title}
        </Container>
    )
}