
import './style.sass'
import { GithubIcon, TgIcon } from '../../shared/icons/component'
import { Visits } from './visits/component'
import { VisitsContext } from '../../../composables/data-controls/use-visits'
import { useEffect } from 'react'

const social = [
    {
        icon: TgIcon,
        link: "https://t.me/referhus"
    },
    {
        icon: GithubIcon,
        link: "https://github.com/referhus",
    }
]

const socialItems = social.map(function(item, key) {
  const IconComponent = item.icon

    return (
      <a href={item.link} className="default-item nav-item" key={key}>
        <IconComponent />
      </a>
    )
})

export const Footer = () => {
  const { updateData } = VisitsContext.useVisitsContext()

  useEffect(() => {
    updateData();
  }, [])
  return (
    <footer className="footer">
      <div className="default-item first-item">
        find me in:
      </div>
      {socialItems}
      <Visits />
    </footer>
  )
}