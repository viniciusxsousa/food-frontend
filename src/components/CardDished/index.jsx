import { Container, Price, Buttons, Dished } from "./styles";

import { FaRegHeart, FaPen } from "react-icons/fa";
import { IoIosRemove, IoIosAdd } from "react-icons/io";

import { Button } from "../Button";

import { useAuth } from "../../hooks/auth"; 
import { useNavigate } from "react-router-dom";

import noPhoto from '../../assets/Sem-foto.jpg'

export function CardDished({ dished }) {
    const { user } = useAuth();

    const image = dished.picture ? `http://localhost:3333/files/${dished.picture}` : noPhoto

    const navigate = useNavigate();

    function handleUpdate() {
        navigate(`/update/${dished.id}`);
    }


    return(
        <Container>
            <button>
                {user.rule === 'user' ? <FaRegHeart/> : <FaPen onClick={handleUpdate}/>}
            </button>

            <img src={image} alt="Imagem do prato" />

            <Dished to={`dished/${dished.id}`}>{dished.name} {'>'}</Dished>

            <Price>R$ {dished.price}</Price>

            {  user.rule === 'user' && 
              <div>
                    <Buttons>
                        <IoIosRemove/>
                        <span>01</span>
                        <IoIosAdd/>
                    </Buttons>
        
                    <Button title="Incluir"/>
                </div>
            }

        </Container>
    )
}