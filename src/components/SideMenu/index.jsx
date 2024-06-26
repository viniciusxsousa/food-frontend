import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { IoMdClose } from "react-icons/io";

import { Container, Header, Content } from "./styles";

import { Search } from "../Search";
import { Footer } from "../Footer"; 

export function SideMenu({ isOpen, closeMenu, searchTerm }) {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <Container data-is-open={isOpen}>
            <Header>

                <button onClick={() => { closeMenu() }} >
                    <IoMdClose /> 
                    <span>Menu</span>
                </button>

            </Header>

            <Content>

                <Search  type='text' placeholder='Busque por pratos' searchTerm={searchTerm}/>

                <ul>
                    { user.rule === 'admin' && <li onClick={() => { navigate('/new') }} >Novo Prato</li>}
                    <li onClick={() => {logout()}} >Sair</li>
                </ul>
            </Content>

            <Footer />

        </Container>
    )
}