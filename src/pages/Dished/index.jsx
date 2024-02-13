import { Container, Content, Buttons } from "./styles";

import { Header } from '../../components/Header'
import { Button } from "../../components/Button";

import { IoIosRemove, IoIosAdd, IoIosArrowBack } from "react-icons/io";

import mask from '../../assets/mask.png'

export function Dished() {
    return (
        <Container>
            <Header/>

            <Content>

                <div>

                    <p><IoIosArrowBack/> Voltar</p>

                    <img src={mask} alt="Foto do prato" />

                    <h2>Salada Ravanello</h2>

                    <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                    <Buttons>
                        <IoIosRemove/>
                        <span>01</span>
                        <IoIosAdd/>
                        <Button title='pedir'/>
                    </Buttons>

                </div>

            </Content>
        </Container>
    )
}