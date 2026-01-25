import './style.sass'
import { useState } from 'react'
import cn from 'classnames'

export const Collapsible = ({title, children }) => {
  const [isVisible, setValue] = useState(true)

  const className = cn('collapsible', {
    'active': isVisible
  })

  const handlerClick = () => {
    setValue(!isVisible)
  }

  return (
    <div className={className}>
      <div
        className="collapsible-header default-item"
        onClick={handlerClick}
      >
        <i className="ri-arrow-down-s-fill"></i>
        {title}
      </div>
      <div className="collapsible-content">
        {children}
      </div>
    </div>
  )
}