import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dished } from '../pages/Dished';

export function UserRoutes() {
    return (
        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/dished/:id' element={<Dished/>} />
        </Routes>
    )
}