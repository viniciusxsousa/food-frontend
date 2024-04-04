import { useNavigate } from "react-router-dom"

import { Container } from "./styles"

import { Button } from  '../../components/Button'

import error from '../../assets/404.png'

export function NotFound() {

    const navigate = useNavigate();

    return(
        <Container>
            <h2>Ops! Página não encontrada.</h2>

            <img src={error} alt='Imagem ilustrando o erro 404'/>

            <div>
                <Button title='Voltar ao início' onClick={() => navigate('/')} />
            </div>
        </Container>
    )
}