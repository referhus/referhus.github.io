import './style.sass'
import { useIsMobile } from '../../../composables/use-media'
import { nav } from './menu'
import { NavItem } from './nav-item/component'
import { BurgerMenu } from './burger-menu/component'
  
const name = 'referhus'

const navItems = nav.map(function(item, key) {
    return (<NavItem item={item} key={key} />)
}); 

export const Header = () => {
  const isMobile = useIsMobile()

  return (
    <header className="header flex-center">
      <div className="default-item header-name">
        {name}
      </div>
      {
        isMobile
          ? <BurgerMenu />
          : <nav className='header-nav'>
            {navItems}
          </nav>
      }
    </header>
  )
}