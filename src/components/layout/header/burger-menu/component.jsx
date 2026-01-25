import './style.sass'
import { MenuIcon } from '../../../shared/icons/component'
import { CloseIcon } from '../../../shared/icons/component'
import { useState } from 'react'
import { nav } from '../menu'
import { NavItem } from '../nav-item/component'
import { freezeScroll } from '../../../../utils/scroll'


export const BurgerMenu = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisible = () => {
    setIsVisible(!isVisible)

    freezeScroll(!isVisible)
  }

  const navItems = nav.map(function(item, key) {
    return (<NavItem item={item} key={key} onClick={toggleVisible} />)
  })

  return (
    <div className="burger-menu">
      <div className="burger-menu__trigger">
        <div
          className="default-item"
          onClick={toggleVisible}
        >
          {isVisible ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {isVisible &&
        <div className="burger-menu__content">
          {navItems}
        </div>
      }
    </div>
  )
}