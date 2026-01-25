
import './style.sass'
import { GithubIcon, TgIcon } from '../../shared/icons/component'

const social = [
    {
        icon: TgIcon,
        link: "https://t.me/referhus"
    },
    {
        icon: GithubIcon,
        link: "https://github.com/referhus",
        text: "@referhus"
    }
]

const socialItems = social.map(function(item, key) {
  const IconComponent = item.icon

  if (item.text) {
      return (
        <a href={item.link} className="default-item nav-item with-icon" key={key}>
          <span>{item.text}</span>
          <IconComponent />
        </a>
      )
    } else {
      return (
        <a href={item.link} className="default-item nav-item no-text" key={key}>
            <IconComponent />
        </a>
      )
    }
})

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="default-item first-item">
                find me in:
            </div>
            {socialItems}
        </footer>
    )
}