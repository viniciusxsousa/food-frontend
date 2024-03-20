import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Content, Buttons, Ingredients, Back } from "./styles";

import { Ingredient} from '../../components/Ingredient'
import { Header } from '../../components/Header'
import { Button } from "../../components/Button";

import { IoIosRemove, IoIosAdd, IoIosArrowBack } from "react-icons/io";

import mask from '../../assets/mask.png'
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";


export function Dished() {
    const [dished, setDished] = useState();
    const [ingredients, setIngredients] = useState();

    const params = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    function handleUpdate() {
        navigate(`/update/${params.id}`)
    }

    useEffect(() => {

        async function searchDished() {

            try {
                const response = await api.get(`dishes/${params.id}`);

                setDished(response.data.dished);
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
            <Header/>

            <Content>

                <div>

                    <Back to='/'><IoIosArrowBack/> Voltar</Back>

                    <img src={mask} alt="Foto do prato" />

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

            </Content>
        </Container>
    )
}