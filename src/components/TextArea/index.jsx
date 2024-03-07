import { Container } from "./styles";

export function TextArea({children, ...rest}) {
    return (
        <Container {...rest}>
            {children}
        </Container>
    )
}