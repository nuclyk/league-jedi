import React from 'react'
import MatchDetails from './MatchDetails'
import SingleMatch from './SingleMatch'
import { useGlobalContext } from '../context'

const MatchHistory = () => {
  const { match, summoner } = useGlobalContext()

  return (
    <section className='matches section'>
      {match.map((item) => {
        const player = item.participants.find(
          (player) => player.puuid === summoner.puuid
        )
        return <SingleMatch key={item.gameId} player={player} {...item} />
      })}
    </section>
  )
}

export default MatchHistory
