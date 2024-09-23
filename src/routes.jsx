import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import SignUpHookForm from './pages/SighupHookForm';


export default function AppRoutes(){
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/signup' element={<SignUpHookForm/>}/>
        </Routes>
    );
}