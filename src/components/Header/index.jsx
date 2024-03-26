import { Container, Logo, Order, Menu } from "./styles";

import { useAuth } from "../../hooks/auth";

import { CgNotes } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

import logo from '../../assets/logo.svg'

export function Header() {

    const { logout, user } = useAuth();

    return (
        <Container>
            <Menu>
                <FiMenu/>
            </Menu>

            <Logo>
                <img src={logo} alt="logo do food" />
                <h1>food explorer</h1>
                { user.rule === 'admin' && <span>admin</span> }
            </Logo>

            {
                user.rule === 'user' &&
                <Order onClick={logout}>
                    <CgNotes/>
                    <div>0</div>
                </Order>
            }

        </Container>
    )
}