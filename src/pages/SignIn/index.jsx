import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

import { Container } from './styles'

import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'



export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();
    signIn({email, password});
  }

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
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="password">Senha</label>
                <Input 
                    id='password' 
                    type='password' 
                    placeholder='Digite sua senha' 
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title='Entrar' onClick={handleSignIn}/>
            </form>

            <Link to='/signup'>Criar uma conta</Link>

        </Container>
    )
}