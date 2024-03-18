import { BrowserRouter } from 'react-router-dom'

import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'

import { useAuth } from '../hooks/auth'

export function Routes() {

    const { user } = useAuth();

    return (
        <BrowserRouter>
            { user ? <AdminRoutes/> : <AuthRoutes/> }
        </BrowserRouter>
    )
}