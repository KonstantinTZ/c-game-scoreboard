import Login from '../pages/Login/Login';
import Characters from '../pages/Characters/Characters';
import AboutCharacter from '../pages/AboutCharacter/AboutCharacter';

export const privateRoutes = [
    {path:'/about/:id', component: <AboutCharacter/>},
    {path:'/list', component: <Characters/>}
]

export const publicRoutes = [
    {path:'/login', component: <Login/>},
]
