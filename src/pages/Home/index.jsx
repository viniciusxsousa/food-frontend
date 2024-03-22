import { useState, useEffect } from "react"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { CardDished } from "../../components/CardDished"

import { Container, Content, Flavors, New } from "./styles"

import { useAuth } from '../../hooks/auth'

import spices from '../../assets/temperos.png';

export function Home() {
    const [categories, setCategories] = useState();
    const [dishes, setDishes] = useState();

    const { user } = useAuth();

    useEffect(() => {

        async function searchCategories() {

            try {
                const response = await api.get('categories');

                setCategories(response.data);

            } catch(error) {
                if(error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Serviço indisponível.');
                }
            }
        }

        async function searchDished() {

            try {

                const response = await api.get("/dishes?name&ingredients")

                setDishes(response.data);

            } catch(error) {
                if(error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Serviço indisponível.');
                }
            }

        }

        searchCategories();
        searchDished();

    }, [])


    return (
        <Container>
            <Header/>

            <Content>
                
                <div>

                    { user.rule === 'admin' &&  <New to='/new'>Novo Prato</New>}

                    <Flavors>
                        <img src={spices} alt="Fotos ilustrativas de temperos" />
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </Flavors>

                    {
                        categories && categories.map( category => 
                        (<Section key={category.id} title={category.name}>
                            {
                                dishes.map( dished => 
                                    dished.category === category.id && <CardDished dished={dished}/> 
                                )
                            }
                        </Section> ))
                    }

                    <Footer/>

                </div>

            </Content>
        </Container>
    )
}