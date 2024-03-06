import { Container, Logo, Order } from "./styles";

import { useAuth } from "../../hooks/auth";

import { CgNotes } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

import logo from '../../assets/logo.svg'

export function Header() {

    const { logout } = useAuth();

    return (
        <Container>
            <FiMenu/>

            <Logo>
                <img src={logo} alt="logo do food" />
                <h1>food explorer</h1>
            </Logo>

            <Order onClick={logout}>
                <CgNotes/>
                <div>0</div>
            </Order>
        </Container>
    )
}