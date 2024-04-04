import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dished } from '../pages/Dished';
import { NotFound } from '../pages/NotFound';


export function UserRoutes() {
    return (
        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/dished/:id' element={<Dished/>} />

            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}