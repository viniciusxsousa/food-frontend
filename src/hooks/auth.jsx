import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

import { api } from '../services/api'

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({email, password}) {

        try {
            const response = await api.post('/sessions', {email, password});
            const { user, token } = response.data;

            localStorage.setItem('@food:user', JSON.stringify(user));
            localStorage.setItem('@food:token', token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({user, token});

        }catch(error){
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível realizar o login no momento. Por favor tente mais tarde.');
            }
        }

    }

    function logout() {
        localStorage.removeItem('@food:user');
        localStorage.removeItem('@food:token');

        setData({});
    }

    useEffect(() => {
        const user = localStorage.getItem('@food:user');
        const token = localStorage.getItem('@food:token');

        if(token && user) {

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            })
        }        

    },[]);

    return (
        <AuthContext.Provider value={{ signIn, logout, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const data = useContext(AuthContext);

    return data
}


export {
    AuthProvider, 
    useAuth
}