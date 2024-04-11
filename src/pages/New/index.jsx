import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Content, Ingredients } from "./styles"; 

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Select } from "../../components/Select";
import { Button } from '../../components/Button'
import { TextArea } from "../../components/TextArea";
import { SideMenu } from "../../components/SideMenu";
import { Footer } from '../../components/Footer'
import { InputIngredient } from "../../components/InputIngredient";

import { IoIosArrowBack } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";

export function New() {
    const [categories, setCategories] = useState();

    const [name, setName] = useState();
    const [category, setCategory] = useState(1);
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [photo, setPhoto] = useState();

    const [ingredient, setIngredient] = useState();

    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    function handleAddIngredients(ingredient) {
        setIngredients(prevState => [...prevState, ingredient]);
        setIngredient('');
    }

    function handleRemoveIngredietns(ingredient) {
        setIngredients(prevState => prevState.filter( item => item !== ingredient ));
    }

    async function handleCreateDished(e) {
        e.preventDefault();
        
        try{
            
            const response = await api.post('dishes', {
                name,
                description,
                category,
                price,
                ingredients
            })
        
            const dished_id = response.data.id;
            
            if(photo) {
                const fileUploadForm = new FormData();
                fileUploadForm.append('photo', photo);

                try {
                    await api.patch(`dishes/photo/${dished_id}`, fileUploadForm);
                } catch(error) {
                    alert('Falha ao adicionar a imagem do prato.');
                }
            }
            
            alert('Prato cadastrado com sucesso.');
            navigate('/');

        }catch(error) {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert('Serviço indisponível. Por favor tente mais tarde.')
            }
        }
    }

    function handleChangePhoto(e) {
        const file = e.target.files[0];
        setPhoto(file);
    }

    function handleOpenMenu() {
        setMenuOpen(!menuOpen);
    }

    function handleBack(){
        navigate('/')
    }

    useEffect(() => {

        async function searchCategory() {

            try{
                const response = await api.get('categories');

                setCategories(response.data);
            } catch(error) {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Serviço indisponível, por favor tente mais tarde.");
                }
            }

        }

        searchCategory();

    }, [])

    return (
        <Container>
            <Header openMenu={handleOpenMenu} />

            <SideMenu isOpen={menuOpen} closeMenu={handleOpenMenu}/>

            <Content>
                <div>
                    <p onClick={handleBack} ><IoIosArrowBack/> Voltar</p>

                    <h2>Novo Prato</h2>

                    <form>

                        <div>
                            <label>Imagem do prato
                                <Input icon={MdFileUpload} id='image' type='file' onChange={handleChangePhoto}/>
                            </label>
                        </div>

                        <div>
                            <label htmlFor="name">Nome</label>
                            <Input 
                                value={name}
                                type='text' 
                                placeholder='Ex: Lasanha'  
                                onChange={ e => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label htmlFor="category">Categoria</label>
                            <Select id='category' onChange={e => setCategory(e.target.value)}>
                                {
                                    categories && categories.map( category => 
                                        <option key={category.id} value={category.id}> 
                                            {category.name} 
                                        </option>
                                    )
                                }
                            </Select>
                        </div>

                        <div>

                            <label htmlFor="ingredient">Ingredientes</label>
                            <Ingredients>
                                { ingredients && ingredients.map( item => 
                                    <InputIngredient
                                        value={item}
                                        onClick={() => handleRemoveIngredietns(item)}
                                    />    
                                )}
                                <InputIngredient 
                                    isnew
                                    value={ingredient}
                                    placeholder='Adicionar'
                                    onChange={ e => setIngredient(e.target.value) } 
                                    onClick={() => {handleAddIngredients(ingredient)}}
                                />
                            </Ingredients>

                        </div>

                        <div>
                            <label htmlFor="price">Preço</label>
                            <Input 
                                type='number' 
                                placeholder="R$ 00,00" 
                                value={price}
                                onChange={ e => setPrice(e.target.value) }
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="description">Descrição</label>
                            
                            <TextArea
                                value='Fale brevemente sobre o prato, seus ingredientes e composição'
                                onChange={ e => setDescription(e.target.value) }
                            >   
                            </TextArea>
                        </div>
                                    
                        <Button 
                            title="Salvar alteração"
                            onClick={handleCreateDished}
                        />

                    </form>
                </div>

                <Footer/>
            </Content>

        </Container>
    )
}