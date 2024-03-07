import { useState, useEffect } from "react";

import { api } from '../../services/api'

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

    const [name, setName] = useState();
    const [dishedCategory, setDishedCategory] = useState();
    const [ingredients, setIngredients] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const [categories, setCategories] = useState();

    useEffect(() => {

        async function searchDished() {
            try {
                const dished = await api.get('dishes/8');
                const categorys = await api.get('categories');

                setName(dished.data.dished.name);
                setDishedCategory(dished.data.dished.category);
                setIngredients(dished.data.ingredients);
                setPrice(dished.data.dished.price);
                setDescription(dished.data.dished.description);

                setCategories(categorys.data);

            }catch(error) {
                
            }
        }

        searchDished();

    }, [])

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
                        <Input type='text' placeholder='Ex: Lasanha' value={name} />

                        <label htmlFor="category">Categoria</label>
                        <Select id='category'>
                            { categories && categories.map( category => 
                                <option key={category.id} value={category.id}>{category.name}</option>     
                            )}
                        </Select>

                        <label htmlFor="ingredient">Ingredientes</label>
                        <Ingredients>
                            {
                               ingredients && ingredients.map( ingredient => 
                                    <InputIngredient key={ingredient.id} value={ingredient.name}/>)
                            }
                            <InputIngredient value='batata'/>
                            <InputIngredient isNew placeholder='Adicionar'/>
                        </Ingredients>

                        <label htmlFor="price">Preço</label>
                        <Input type='number' placeholder="R$ 00,00"  value={price}/>

                        <label htmlFor="description">Descrição</label>
                        
                        <TextArea value={description}>
                        </TextArea>

                        <Buttons>
                            <Button dark title="Excluir prato"/>
                            <Button title='Salvar'/>
                        </Buttons>

                    </form>
                </div>

                <Footer/>
            </Content>

        </Container>
    )
}