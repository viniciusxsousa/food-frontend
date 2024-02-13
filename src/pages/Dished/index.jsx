import { Container, Content, Buttons, Ingredients } from "./styles";

import { Ingredient} from '../../components/Ingredient'
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

                    <Ingredients>
                        <Ingredient title='alface'/>
                        <Ingredient title='cebola'/>
                        <Ingredient title='pão naan'/>
                        <Ingredient title='pepino'/>
                        <Ingredient title='rabanete'/>
                        <Ingredient title='tomate'/>
                    </Ingredients>

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