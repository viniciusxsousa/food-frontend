import { useAuth } from "../../hooks/auth";

import { IoMdClose } from "react-icons/io";

import { Container, Header, Content } from "./styles" 

export function SideMenu({ isOpen, closeMenu }) {

    const { user, logout } = useAuth();

    return (
        <Container isOpen={isOpen}>
            <Header>

                <button onClick={() => { closeMenu() }} >
                    <IoMdClose /> 
                    <span>Menu</span>
                </button>

            </Header>

            <Content>
                <ul>
                    { user.rule === 'admin' && <li>Novo Prato</li>}
                    <li onClick={() => {logout()}} >Sair</li>
                </ul>
            </Content>

        </Container>
    )
}