import { Container, Logo, Order, Menu, Logout, NewDished } from "./styles";

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { CgNotes } from "react-icons/cg";
import { FiMenu, FiLogOut } from "react-icons/fi";

import { Search } from '../Search'

import logo from '../../assets/logo.svg'

export function Header({ openMenu, searchTerm }) {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

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

            <Search type='text' placeholder='Pesquise por pratos' searchTerm={searchTerm}/>
            
            <div>
                {
                    user.rule === 'user' &&
                    <Order>
                        <CgNotes/>
                        <p>Pedidos</p>
                        <div>0</div>
                    </Order>
                }

                {
                    user.rule === 'admin' && 
                    <NewDished onClick={() => {navigate('/new')}} >Novo Prato</NewDished>
                }

                <Logout onClick={() => {logout()}}>
                    <FiLogOut/>
                </Logout>
            </div>

        </Container>
    )
}