import { Container } from './styles'

import logo from '../../assets/logo.svg'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'


export function SignIn() {
    return (
        <Container>

            <div>
                <img src={logo} alt="logo do fodd" />
                <h1>food explorer</h1>
            </div>

            <form>
                <label htmlFor="email">E-mail</label>
                <Input id='email' type='text' placeholder='Exemplo: exemplo@exemplo.com.br' />

                <label htmlFor="email">E-mail</label>
                <input id='email' type="text" />

                <Button/>
            </form>

            <a href="#">Criar uma conta</a>

        </Container>
    )
}