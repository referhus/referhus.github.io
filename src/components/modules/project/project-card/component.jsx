/* eslint-disable no-useless-concat */
import './style.sass'
import { Badge } from '../../../shared/badge/component'
import { GithubIcon } from '../../../shared/icons/component'

export const ProjectCard = (props) => {
  const handleClick = () => {
    window.open(props.link, '_blank')
  }

  return (
    <div
      className="project-card"
      onClick={handleClick}
    >
      <div className="project-card__img">
        <img src={props.img} alt="" />
      </div>
      <div className="project-card__content">
        <div className="project-card__badges">
          {props.stack.map((item) => (
            <Badge text={item} key={item}/>
          ))}
        </div>
        <div className="project-card__text text-default">{props.title}</div>
        {props.repo &&
          <a
            href={props.repo}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <GithubIcon className="project-card__repo" />
          </a>
        }
        <div className="project-card__date text-small">{props.date} г.</div>
      </div>
    </div>
  )
}
