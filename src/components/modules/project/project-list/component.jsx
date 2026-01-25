/* eslint-disable no-useless-concat */

import { ProjectCard } from '../project-card/component'
import './style.sass'
import { useFiltersContext } from '../../filter/filters-context'
import { quickSort } from '../../../../utils/quick-sort'
import { useState } from 'react'
import { Sort } from '../../../shared/sort/component'

export const ProjectList = (props) => {
  const { list } = useFiltersContext()

  const hasFilteredElements = (arr1, arr2) => arr1.some(item => arr2.includes(item))
  const [isSorted, setIsSorted] = useState(false)

  const sortedList = isSorted ? quickSort(props.items, 'date') : props.items

  const filteredProjectList = sortedList.map((project) => {
    if (hasFilteredElements(project.stack, list) || !list.length) {
      return <ProjectCard {...project} key={project.link}/>
    }

    return []
  })

  const sortList = () => {
    setIsSorted(!isSorted)
  }

    return (
      <div className="project-list">
        <Sort sortList={sortList} isSorted={isSorted} />
        {filteredProjectList}
      </div>
    )
}
