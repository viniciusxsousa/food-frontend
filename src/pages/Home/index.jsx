import '@splidejs/react-splide/css';

import { useState, useEffect } from "react"
import { useAuth } from '../../hooks/auth';

import { api } from "../../services/api"

import { Splide, SplideSlide } from '@splidejs/react-splide';

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { CardDished } from "../../components/CardDished"
import { SideMenu } from "../../components/SideMenu"

import { Container, Content, Flavors } from "./styles"

import spices from '../../assets/temperos.png';

export function Home() {
    const [categories, setCategories] = useState();
    const [dishes, setDishes] = useState();
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const { logout } = useAuth();

    function handleOpenMenu() {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {

        async function searchCategories() {

            try {
                const response = await api.get('categories');

                setCategories(response.data);

            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message);

                    if(error.response.status == 401) {
                        logout();
                    }
                } else {
                    alert('Serviço indisponível.');
                }
            }
        }

        async function searchDished() {

            try {

                const response = await api.get(`/dishes?name=${searchTerm}&ingredients`)

                setDishes(response.data);

            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message);


                    if(error.response.status == 401) {
                        logout();
                    }

                } else {
                    alert('Serviço indisponível.');
                }
            }

        }

        searchCategories();
        searchDished();

    }, [searchTerm])

    return (
        <Container>
            <Header openMenu={handleOpenMenu} searchTerm={setSearchTerm}/>

            <SideMenu isOpen={menuOpen} closeMenu={handleOpenMenu} searchTerm={setSearchTerm} />

            <Content>

                <div>

                    <Flavors>
                        <img src={spices} alt="Fotos ilustrativas de temperos" />
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </Flavors>

                    {
                        categories && categories.map(category =>
                        (<Section key={category.id} title={category.name}>
                            <Splide options={{
                            type: 'loop',
                            autoWidth: true,
                            gap: '2rem',   
                            }}>
                                {
                                    dishes && dishes.map(dished =>
                                        dished.category === category.id && (
                                            <SplideSlide key={dished.id} >
                                                <CardDished dished={dished} />
                                            </SplideSlide>
                                        )
                                    )
                                }
                            </Splide>
                        </Section>))
                    }


                </div>

                <Footer />
            </Content>
        </Container>
    )
}