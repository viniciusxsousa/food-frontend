import { useState } from "react";
import { createContext, useContext } from "react";

import { api } from '../services/api'

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({email, password}) {

        try {
            const response = await api.post('/sessions', {email, password});
            const { user, token } = response.data;

            api.defaults.headers.authorization = `Bearer ${token}`
            setData({user, token});

        }catch(error){
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível realizar o login no momento. Por favor tente mais tarde.');
            }
        }

    }

    return (
        <AuthContext.Provider value={{ signIn, user: data.user }}>
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