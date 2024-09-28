import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import SignUpHookForm from './pages/SighupHookForm';
import Dashboard from './pages/dashboard/Dashboard';
import Users from './pages/dashboard/Users';
import Posts from './pages/dashboard/Posts';
import Ulbums from './pages/dashboard/Ulbums';
import About from './pages/About';
import { NotFound } from './pages/NotFound';
import { FullPost } from './pages/FullPost';
import Login from './pages/Login';

export default function AppRoutes() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/register' element={<Register />} />
            <Route exact path='/signup' element={<SignUpHookForm />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/posts/:postId' element={<FullPost />} />
            <Route exact path='/dashboard' element={<Dashboard />}>
                <Route path='users' element={<Users />} />
                <Route path='posts' element={<Posts />} />
                <Route path='ulbums' element={<Ulbums />} />
            </Route>
            <Route exact path='*' element={<NotFound />} />
        </Routes>
    );
}