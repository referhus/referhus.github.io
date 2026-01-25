import {
    Route,
    Routes
} from 'react-router-dom';

import { Home } from '../views/home/home'
import { About } from '../views/about/about'
import { Projects } from '../views/projects/projects';

const routes = [
    {
        path: "/",
        component: <Home/>
    },
    {
        path: "/about",
        component: <About/>
    },      
    {
        path: "/projects",
        component: <Projects/>
    },      
]

const routerLink = routes.map((item, key) => {
    return (
        <Route path={item.path} element={item.component} key={key}>
        </Route>
    )
})

export const RouterView = () => {    
    return (
        <Routes>
            {routerLink}
        </Routes>
    )
}