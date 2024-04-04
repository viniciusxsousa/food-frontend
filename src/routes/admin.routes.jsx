import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Dished } from '../pages/Dished';
import { Update } from '../pages/Update';
import { New } from '../pages/New';
import { NotFound } from '../pages/NotFound';

export function AdminRoutes() {
    return (
        <Routes>
            <Route path='/'  element={<Home/>} />
            <Route path='/dished/:id' element={<Dished/>} />
            <Route path='/update/:id' element={<Update/>} />
            <Route path='/new' element={<New/>} />

            <Route path='*' element={<NotFound/>}/>
        </Routes>
    )
}