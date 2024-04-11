import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Content, Buttons, Ingredients } from "./styles";

import { Ingredient} from '../../components/Ingredient'
import { Header } from '../../components/Header'
import { Button } from "../../components/Button";
import { SideMenu } from "../../components/SideMenu";
import { Footer } from "../../components/Footer";

import { IoIosRemove, IoIosAdd, IoIosArrowBack } from "react-icons/io";

import noPhoto from '../../assets/Sem-foto.jpg'
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";


export function Dished() {
    const [dished, setDished] = useState();
    const [ingredients, setIngredients] = useState();

    const [menuOpen, setMenuOpen] = useState(false);

    const params = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    const pictureUrl = dished.picture ? `http://localhost:3333/files/${dished.picture}` : noPhoto;

    function handleUpdate() {
        navigate(`/update/${params.id}`)
    }

    function handleBack() {
        navigate('/')
    }

    function handleOpenMenu() {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {

        async function searchDished() {

            try {
                const response = await api.get(`dishes/${params.id}`);

                setDished(response.data.dished);
                console.log(response.data.dished);
                setIngredients(response.data.ingredients);

            } catch (error) {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Serviço indisponível');
                }
            }

        }

        searchDished();
        /* console.log(dished); */

    }, [])


    return (
        <Container>
            <Header openMenu={handleOpenMenu}/>

            <SideMenu isOpen={menuOpen} closeMenu={handleOpenMenu}/>

            <Content>

                <div>

                    <div>
                        <p onClick={handleBack} ><IoIosArrowBack/> Voltar</p>

                        <img src={pictureUrl} alt="Foto do prato" />
                    </div>

                    <div>

                        <h2>{dished ? dished.name : 'Sem nome'}</h2>

                        <p>{dished ? dished.description: 'Sem descrição'}</p>

                        <Ingredients>
                            { ingredients && ingredients.map( ingredient => 
                                <Ingredient 
                                    key={ingredient.id} 
                                    title={ingredient.name} 
                                /> 
                            )}
                        </Ingredients>

                        {  user.rule === 'user' &&
                            <Buttons>
                                <IoIosRemove/>
                                <span>01</span>
                                <IoIosAdd/>
                                <Button title='pedir'/>
                            </Buttons>
                        }

                        {
                            user.rule === 'admin' && <Button  title='Editar prato' onClick={handleUpdate}/>
                        }

                    </div>

                </div>

            </Content>

            <Footer/>
        </Container>
    )
}