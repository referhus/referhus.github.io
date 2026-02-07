import './style.sass'
import { useEffect } from 'react'
import { VisitsContext } from '../../../../composables/data-controls/use-visits'
import { useCounter } from '../../../../composables/use-counter'
import { useState } from 'react'

export const Visits = () => {
  const { data: total, getData } = VisitsContext.useVisitsContext()
  const [dataLoaded, setDataLoaded] = useState(false)

  const { count, countTo } = useCounter()

  useEffect(() => {
    const loadData = async () => {
      await getData()
      setDataLoaded(true)
    }
    loadData()
  }, [])

  useEffect(() => {
    if (dataLoaded && total !== undefined && total !== null) {
      countTo(total)
    }
  }, [dataLoaded, total, countTo])

  return (
    <div className="visits default-item">
      <i className="ri-eye-fill"></i>
      <span>views: </span>
      <span className="visits-count">{count}</span>
    </div>
  )
}
