/* eslint-disable no-useless-concat */

import { ProjectCard } from '../project-card/component'
import './style.sass'
import { useFiltersContext } from '../../filter/filters-context'

export const ProjectList = (props) => {
  const { list } = useFiltersContext()

  const hasFilteredElements = (arr1, arr2) => arr1.some(item => arr2.includes(item))

  return (
    <div className="project-list">
      {props.items.map(function (project) {
        if (hasFilteredElements(project.stack, list) || !list.length) {
          return <ProjectCard {...project} key={project.link}/>
        }
      }
      )}
    </div>
  )
}
