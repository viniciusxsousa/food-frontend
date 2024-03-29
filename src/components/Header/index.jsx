import { Container, Logo, Order, Menu, Logout } from "./styles";

import { useAuth } from "../../hooks/auth";

import { CgNotes } from "react-icons/cg";
import { FiMenu, FiLogOut } from "react-icons/fi";

import { Search } from '../Search'

import logo from '../../assets/logo.svg'

export function Header({ openMenu }) {

    const { user, logout } = useAuth();

    return (
        <Container>
            <Menu onClick={ () => { openMenu() } }>
                <FiMenu/>
            </Menu>

            <Logo rule={user.rule}>
                <img src={logo} alt="logo do food" />
                <h1>food explorer</h1>
                { user.rule === 'admin' && <span>admin</span> }
            </Logo>

            <Search type='text' placeholder='Pesquise por pratos' />
            
            <div>
                {
                    user.rule === 'user' &&
                    <Order>
                        <CgNotes/>
                        <p>Pedidos</p>
                        <div>0</div>
                    </Order>
                }

                <Logout onClick={() => {logout()}}>
                    <FiLogOut/>
                </Logout>
            </div>

        </Container>
    )
}