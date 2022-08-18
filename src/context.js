import React, { useContext, useReducer, useEffect, useState } from 'react'
import reducer from './utils/reducer'
import { getSummonerByName } from './riotapi/getSummonerByName'
import { getMatches } from './riotapi/getMatches'
import { getMatch } from './riotapi/getMatch'

import {
  HANDLE_SEARCH,
  SET_LOADING,
  SET_MATCH,
  SET_MATCHES,
  SET_SUMMONER,
} from './utils/actions'

const AppContext = React.createContext()

const initialState = {
  isLoading: true,
  query: '',
  region: 'euw',
  summoner: {},
  matches: [],
  match: [],
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setSummoner = async (name) => {
    dispatch({ type: SET_LOADING })

    const newSummoner = await getSummonerByName(name)
    dispatch({ type: SET_SUMMONER, payload: newSummoner })
  }

  const setMatches = async (puuid) => {
    const newMatches = await getMatches(puuid)
    dispatch({ type: SET_MATCHES, payload: newMatches })
  }

  const setMatch = async (matchId) => {
    const newMatch = await getMatch(matchId)
    dispatch({ type: SET_MATCH, payload: newMatch })
  }

  const handleSearch = (query) => {
    dispatch({ type: HANDLE_SEARCH, payload: query })
  }

  useEffect(() => {
    if (state.query.length > 2) {
      setSummoner(state.query)
      console.log('setSummoner')
    }
  }, [state.query])

  useEffect(() => {
    if (state.summoner.hasOwnProperty('puuid')) {
      setMatches(state.summoner.puuid)
    }
    console.log('setMatches')
  }, [state.summoner])

  useEffect(() => {
    state.matches.map((matchId) => {
      console.log('setMatch')
      setMatch(matchId)
    })
  }, [state.matches])

  return (
    <AppContext.Provider value={{ ...state, handleSearch, setMatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
