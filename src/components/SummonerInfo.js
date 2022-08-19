import React from 'react'
import { useGlobalContext } from '../context'
import profileIcon from '../img/profile-icon.png'
import rankIcon from '../img/rank-icon.png'

const SummonerInfo = () => {
  const { summoner } = useGlobalContext()
  const totalMatches = summoner.wins + summoner.losses
  const winRate = Math.floor((100 * summoner.wins) / totalMatches)

  return (
    <section className='section summoner-info'>
      <article className='primary-info'>
        <img src={profileIcon} className='profile-image' alt='' />
        <div className='summoner'>
          <h1>{summoner && summoner.name}</h1>
          <p>Ladder Rank 2</p>
        </div>
      </article>
      <article className='secondary-info'>
        <div className='rank-image'>
          <img src={rankIcon} alt='' />
        </div>
        <div className='rank-info'>
          <h2 className='rank-name'>{summoner.tier}</h2>
          <p>{summoner.leaguePoints} LP</p>
          <p>{summoner.wins}W {summoner.losses}L</p>
          <p>Win Rate {winRate}%</p>
        </div>
      </article>
    </section>
  )
}

export default SummonerInfo
