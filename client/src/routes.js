import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav'
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';

import Admin from './pages/Admin';

function RoutesApp(){
    return(
        <BrowserRouter>
        <Nav/>
            <Routes>
                <Route path='/' element={<Sobre/>}/>
                <Route path="/projetos" element={<Projetos/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;