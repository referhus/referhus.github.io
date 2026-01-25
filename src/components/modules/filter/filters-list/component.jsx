import { CheckboxButton } from '../../../shared/checkbox/component'
import './style.sass'
import { useFiltersContext } from '../filters-context'

export const FiltersList = (props) => {
  const { list, handleSelect } = useFiltersContext()
  return (
    <div className="filters-list default-item">
      {
        props.filters.map(filter => (
          <CheckboxButton
            key={filter}
            text={filter}
            name="filters"
            isChecked={list.includes(filter)}
            value={filter}
            onChange={() => handleSelect(filter)}
          />
        ))
      }
    </div>
  )
}