import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

    const [ newIngredient, setNewIngredient ] = useState('');

    const params = useParams();
    const navigate = useNavigate();

    function handleBack() {
        navigate('/');
    }

    async function handleAddIngredient() {

        const response = await api.post('/ingredients', { name: newIngredient, dishe_id: params.id });

        setIngredients(prevState => [...prevState, response.data]);
        setNewIngredient('');
    }

    useEffect(() => {

        async function searchDished() {
            try {
                const dished = await api.get(`dishes/${params.id}`);
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
                    <p onClick={handleBack} ><IoIosArrowBack/> Voltar</p>

                    <h2>Editar Prato</h2>

                    <form>

                        <label htmlFor="image">Imagem do prato</label>
                        <Input icon={MdFileUpload} id='image' type='file'/>

                        <label htmlFor="name">Nome</label>
                        <Input type='text' placeholder='Ex: Lasanha' value={name} />

                        <label htmlFor="category">Categoria</label>
                        <Select id='category'>
                            { categories && categories.map( category => 
                                    category.id === dishedCategory ?  
                                    (<option selected key={category.id} value={category.id}>{category.name}</option>) : (<option key={category.id} value={category.id}>{category.name}</option>)
                                )
                            }
                        </Select>

                        <label htmlFor="ingredient">Ingredientes</label>
                        <Ingredients>
                            {
                               ingredients && ingredients.map( ingredient => 
                                    <InputIngredient key={ingredient.id} value={ingredient.name}/>)
                            }
                            <InputIngredient 
                                isNew 
                                placeholder='Adicionar'
                                value={newIngredient}
                                onChange={e => setNewIngredient(e.target.value)}
                                onClick={handleAddIngredient}
                            />
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