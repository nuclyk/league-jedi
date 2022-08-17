import React, { useContext, useReducer, useEffect } from 'react'
import axios from 'axios'
import reducer from './utils/reducer'
import riotFetch from './axios/custom'

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

  const fetchSummoner = async (name) => {
    try {
      const url = `/summoner/v4/summoners/by-name/zyb?api_key=${process.env.REACT_APP_RIOT_KEY}`
      const response = await riotFetch(url)
      const { data } = response
      console.log(data)
    } catch (error) {
      console.log(error.Rsponse)
    }
  }

  useEffect(() => {
    fetchSummoner()
  }, [])

  const fetchMatches = () => {}

  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
