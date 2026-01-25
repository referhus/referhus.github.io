import { useState } from 'react'

export function useFilters() {
  const [list, setList] = useState([])

  const handleSelect = (filter) => {
    if (!list.includes(filter)) {
      setList([...list, filter])
    } else {
      const filteredList = list.filter((item) => item !== filter)
      setList(filteredList)
    }
  }

  return {handleSelect, list}
}