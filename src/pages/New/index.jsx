import { Container, Content } from "./styles"; 

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button'

import { IoIosArrowBack } from "react-icons/io";

export function New() {
    return (
        <Container>
            <Header/>

            <Content>
                <a href="#"><IoIosArrowBack/> Voltar</a>

                <h2>Novo Prato</h2>

                <form>

                    <label htmlFor="image">Imagem do prato</label>
                    <Input id='image' type='file'/>

                    <label htmlFor="name">Nome</label>
                    <Input type='text' placeholder='Ex: Lasanha' />

                    <label htmlFor="category">Categoria</label>
                    <select id="category">
                        <option>Refeição</option>
                    </select>

                    <label htmlFor="price">Preço</label>
                    <Input type='number' placeholder="R$ 00,00" />

                    <label htmlFor="description">Descrição</label>
                    <textarea>

                    </textarea>

                    <Button title="Salvar alteração"/>

                </form>

            </Content>


        </Container>
    )
}