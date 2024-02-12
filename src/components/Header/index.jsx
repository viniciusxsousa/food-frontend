import { Container, Logo, Order } from "./styles";

import { CgNotes } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

import logo from '../../assets/logo.svg'

export function Header() {
    return (
        <Container>
            <FiMenu/>

            <Logo>
                <img src={logo} alt="logo do food" />
                <h1>food explorer</h1>
            </Logo>

            <Order>
                <CgNotes/>
                <div>0</div>
            </Order>
        </Container>
    )
}