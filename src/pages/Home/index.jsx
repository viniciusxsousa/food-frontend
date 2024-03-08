import { useState, useEffect } from "react"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { CardDished } from "../../components/CardDished"

import { Container, Content, Flavors } from "./styles"

export function Home() {
    const [categories, setCategories] = useState();
    const [dishes, setDishes] = useState();


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

                    <Flavors>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </Flavors>

                    {
                        categories && categories.map( category => 
                        (<Section key={category.id} title={category.name}>
                            {
                                dishes.map( dished => 
                                    dished.category === category.id && <CardDished/> 
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