import { Container, Content, Ingredients, Buttons } from "./styles"; 

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Select } from "../../components/Select";
import { Button } from '../../components/Button'
import { TextArea } from "../../components/TextArea";
import { Footer } from '../../components/Footer'
import { InputIngredient } from "../../components/InputIngredient";

import { IoIosArrowBack } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";

export function Update() {
    return (
        <Container>
            <Header/>

            <Content>
                <div>
                    <a href="#"><IoIosArrowBack/> Voltar</a>

                    <h2>Editar Prato</h2>

                    <form>

                        <label htmlFor="image">Imagem do prato</label>
                        <Input icon={MdFileUpload} id='image' type='file'/>

                        <label htmlFor="name">Nome</label>
                        <Input type='text' placeholder='Ex: Lasanha' />

                        <label htmlFor="category">Categoria</label>
                        <Select id='category'>
                            <option>Refeição</option>
                        </Select>

                        <label htmlFor="ingredient">Ingredientes</label>
                        <Ingredients>
                            <InputIngredient value='batata'/>
                            <InputIngredient isNew placeholder='Adicionar'/>
                        </Ingredients>

                        <label htmlFor="price">Preço</label>
                        <Input type='number' placeholder="R$ 00,00" />

                        <label htmlFor="description">Descrição</label>
                        
                        <TextArea>
                            Fale brevemente sobre o prato, seus ingredientes e composição
                        </TextArea>

                        <Buttons>
                            <Button title="Excluir prato"/>
                            <Button title='Salvar'/>
                        </Buttons>

                    </form>
                </div>

                <Footer/>
            </Content>

        </Container>
    )
}