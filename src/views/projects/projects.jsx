import { ProjectList } from '../../components/modules/project/project-list/component'
import { projects } from '../../components/modules/project/projects'
import { FiltersList } from '../../components/modules/filter/filters-list/component'
import { filters } from '../../components/modules/filter/filters'
import { FiltersProvider } from '../../components/modules/filter/filters-context'
import { Collapsible } from '../../components/shared/collapsible/component'

export const Projects = () => {
  return (
    <main className="main-default">
      <div className="main-default__title default-item">
        _projects
      </div>
      <div className="flex-center">
        <FiltersProvider>
          <div className="container-grid cols-2">
            <aside className="aside">
              <Collapsible title="filters">
                <FiltersList filters={filters}/>
              </Collapsible>
            </aside>
            <div className="content">
              <ProjectList items={projects}/>
            </div>
          </div>
        </FiltersProvider>
      </div>
    </main>
  )
}
