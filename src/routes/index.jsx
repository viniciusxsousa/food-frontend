import { BrowserRouter } from 'react-router-dom'

import { AdminRoutes } from './admin.routes'
import { UserRoutes } from './user.routes'
import { AuthRoutes } from './auth.routes'

import { useAuth } from '../hooks/auth'

export function Routes() {

    const { user } = useAuth();

    function RoutesByPermission() {
        switch(user.rule) {
            case 'admin':
                return <AdminRoutes/>
            case 'user':
                return <UserRoutes/>
        }
    }

    return (
        <BrowserRouter>
            { user ? <RoutesByPermission/> : <AuthRoutes/> }
        </BrowserRouter>
    )
}