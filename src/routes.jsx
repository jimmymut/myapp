import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';


export default function AppRoutes(){
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/register' element={<Register/>}/>
        </Routes>
    );
}