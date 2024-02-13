import { Container } from './styles'

import logoGray from '../../assets/logo_gray.svg'

export function Footer() {
    return (
     <Container>
        <div>
            <img src={logoGray} alt="logo em tom cinza" />
            <h2>food explorer</h2>
        </div>

        <p>© 2023 - Todos os direitos reservados.</p>
     </Container> 
    )
}