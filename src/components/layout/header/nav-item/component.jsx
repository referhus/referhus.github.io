import { NavLink } from 'react-router-dom'

export const NavItem = ({item, onClick}) => {
  return (
    <NavLink
      to={item.link}
      className="default-item nav-item"
      onClick={onClick}
    >
      {item.name}
    </NavLink>
  )
}