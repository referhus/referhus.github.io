import { createVisitsContext } from './use-visits-context'

const getVisits = async () => {
  const result = await fetch('https://visits-api.vercel.app/visits')
  const data = await result.json()

  return data.total
}

const createVisit = async () => {
  const result = await fetch('https://visits-api.vercel.app/visits/visited')
  const data = await result.json()

  return data.total
}

export const VisitsContext = createVisitsContext(getVisits, createVisit);