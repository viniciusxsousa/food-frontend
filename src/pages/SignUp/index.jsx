import { useState } from "react"; 

import { api } from '../../services/api'

import { Container } from "./styles";

import { Link, useNavigate } from 'react-router-dom'

import logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSignUp(e) {
       e.preventDefault();

        if(!name || !email || !password) {
            return alert('Todos os campos devem ser preenchidos!');
        } 

       api.post('/users', {name, email, password})
        .then(() => {
            alert('Usuário cadastrado com sucesso.');
            navigate('/');
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível realizar o cadastro. Por favor tente mais tarde.');
            }
        })
    } 

    return(
        <Container>

            <div>
                <img src={logo} alt="logo do food" />
                <h1>food explorer</h1>
            </div>

            <div>

                <p>Crie sua conta</p>

                <form>
                    <label htmlFor="name">Nome</label>
                    <Input 
                        id='name'
                        type='text'
                        placeholder='Digite seu nome'
                        onChange={ e => setName(e.target.value)}
                    />

                    <label htmlFor="email">E-mail</label>
                    <Input 
                        id='email'
                        type='text'
                        placeholder='Digite seu e-mail'
                        onChange={ e => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Senha</label>
                    <Input
                        id='password'
                        type='password'
                        placeholder='Defina a sua senha'
                        onChange={ e => setPassword(e.target.value)}  
                    />

                <Button title='Criar conta' onClick={handleSignUp}/>
                </form>

                
                <Link to='/'>Já tenho uma conta</Link>

            </div>


        </Container>
    )
}