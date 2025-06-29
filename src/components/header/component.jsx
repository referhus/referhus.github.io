
import './style.sass'
// import cn from 'classnames';
import { NavLink } from 'react-router-dom';
  
const name = 'referhus'
const nav = [
    {
        name: "_hello",
        link: "",
    },    
    {
        name: "_about-me",
        link: "/about"
    },    
    {
        name: "_projects",
        link: "/projects"
    },    
]

const navItems = nav.map(function(item, key) {
    return (
        <NavLink to={item.link} key={key} className="default-item nav-item">{item.name}</NavLink>
    )
}); 

export const Header = () => {
    return (
        <header className="header flex-center">
            <div className="default-item header-name">
              {name}
            </div>
            <nav className='header-nav'>
                {navItems}
            </nav>
        </header>
    )
}