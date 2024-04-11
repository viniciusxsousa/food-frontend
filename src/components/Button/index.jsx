import { Container } from './styles'

export function Button({title, dark, ...rest}) {
    let stringDark = dark ? 'true' : 'false'

    return (
        <Container dark={stringDark} {...rest}>
            {title}
        </Container>
    )
}