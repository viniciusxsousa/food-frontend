import { Container } from './styles'

import logo from '../../assets/logo.svg'

import { Button } from '../../components/Button'

export function SignIn() {
    return (
        <Container>

            <div>
                <img src={logo} alt="logo do fodd" />
                <h1>food explorer</h1>
            </div>

            <form>
                <label htmlFor="email">E-mail</label>
                <input id='email' type="text" />

                <label htmlFor="email">E-mail</label>
                <input id='email' type="text" />

                <Button/>
            </form>

            <a href="#">Criar uma conta</a>

        </Container>
    )
}