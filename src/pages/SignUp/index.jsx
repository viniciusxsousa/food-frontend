import { Container } from "./styles";

import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
    return(
        <Container>

            <div>
                <img src={logo} alt="logo do food" />
                <h1>food explorer</h1>
            </div>

            <form>
                <label htmlFor="name">Nome</label>
                <Input 
                    id='name'
                    type='text'
                    placeholder='Digite seu nome'
                />

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
                    placeholder='Defina a sua senha'
                />

                <Button title='Criar conta'/>
            </form>

            <Link to='/'>Já tenho uma conta</Link>

        </Container>
    )
}