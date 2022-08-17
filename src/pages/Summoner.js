import React from 'react'
import SearchForm from '../components/SearchForm'
import SummonerInfo from '../components/SummonerInfo'
import MatchHistory from '../components/MatchHistory'

const Summoner = () => {
  return (
    <main className='container'>
      <SearchForm />
      <SummonerInfo />
      <MatchHistory />
    </main>
  )
}

export default Summoner
