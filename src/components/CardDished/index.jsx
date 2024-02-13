import { Container, Price, Buttons } from "./styles";

import { FaRegHeart } from "react-icons/fa";
import { IoIosRemove, IoIosAdd } from "react-icons/io";

import { Button } from "../Button";

import mask from '../../assets/mask.png'

export function CardDished() {
    return(
        <Container>
            <button>
                <FaRegHeart/>
            </button>

            <img src={mask} alt="Imagem do prato" />

            <p>Salada Ravanello {'>'}</p>

            <Price>R$ 49,97</Price>

            <Buttons>
                <IoIosRemove/>
                <span>01</span>
                <IoIosAdd/>
            </Buttons>

            <Button title="incluir"/>

        </Container>
    )
}