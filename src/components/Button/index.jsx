import { Container } from './styles'

export function Button({title, dark, ...rest}) {
    return (
        <Container dark={dark} {...rest}>
            {title}
        </Container>
    )
}