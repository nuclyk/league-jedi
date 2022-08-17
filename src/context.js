import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './utils/reducer'

const API_ENDPOINT = ''

const AppContext = React.createContext()

const initialState = {
  isLoading: true,
  hits: [],
  query: 'zyb',
  region: 'euw',
  summoner: {},
  matches: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchSummoner = (name) => {}

  const fetchMatches = () => {}

  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
