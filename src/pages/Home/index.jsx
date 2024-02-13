import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"

import { Container, Content, Flavors } from "./styles"

export function Home() {
    return (
        <Container>
            <Header/>

            <Content>
                
                <div>

                    <Flavors>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </Flavors>

                    <Section title="Refeição">
                        
                    </Section>

                </div>

            </Content>

            <Footer/>
        </Container>
    )
}