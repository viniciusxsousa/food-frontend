import { Container } from './styles'

import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { useAuth } from '../../hooks/auth'


export function SignIn() {

  const data = useAuth();

    return (
        <Container>

            <div>
                <img src={logo} alt="logo do fodd" />
                <h1>food explorer</h1>
            </div>

            <form>
                <label htmlFor="email">E-mail</label>
                <Input 
                    id='email' 
                    type='text' 
                    placeholder='Digite seu e-mail' 
                />

                <label htmlFor="password">Senha</label>
                <Input 
                    id='password' 
                    type='password' 
                    placeholder='Digite sua senha' 
                />

                <Button title='Entrar'/>
            </form>

            <Link to='/signup'>Criar uma conta</Link>

        </Container>
    )
}