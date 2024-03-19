import { Container, Price, Buttons, Dished } from "./styles";

import { FaRegHeart, FaPen } from "react-icons/fa";
import { IoIosRemove, IoIosAdd } from "react-icons/io";

import { Button } from "../Button";

import { useAuth } from "../../hooks/auth"; 
import { useNavigate } from "react-router-dom";

import mask from '../../assets/mask.png'

export function CardDished({ dished }) {
    const { user } = useAuth();

    const navigate = useNavigate();

    function handleUpdate() {
        navigate(`/update/${dished.id}`);
    }


    return(
        <Container>
            <button>
                {user.rule === 'user' ? <FaRegHeart/> : <FaPen onClick={handleUpdate}/>}
            </button>

            <img src={mask} alt="Imagem do prato" />

            <Dished to={`dished/${dished.id}`}>{dished.name} {'>'}</Dished>

            <Price>R$ {dished.price}</Price>

            {  user.rule === 'user' && 
              <>
                    <Buttons>
                        <IoIosRemove/>
                        <span>01</span>
                        <IoIosAdd/>
                    </Buttons>
        
                    <Button title="incluir"/>
                </>
            }

        </Container>
    )
}