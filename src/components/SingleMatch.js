import React, { useState } from 'react'
import { useGlobalContext } from '../context'
import * as img from '../utils/images'

const SingleMatch = ({
  gameId,
  gameDuration,
  gameType,
  gameCreation,
  gameEndTimestamp,
  participants,
  teamId,
  teamWin,
  player,
}) => {
  const team1 = participants.filter((player) => player.teamId === 100)
  const team2 = participants.filter((player) => player.teamId === 200)

  return (
    <article className={`${player.win ? 'match victory' : 'match loss'}`}>
      <div className='match-result'>
        <h4>Ranked Solo</h4>
        <p>2 days ago</p>
        <div className='underline'></div>
        <p className='success'>{player.win ? 'Victory' : 'Defeat'}</p>
        <p>22 min 57 sec</p>
      </div>
      <div className='player'>
        <div className='player-icon'>
          <img src={img.playerIcon} className='player-champ' alt='' />
        </div>
        <div className='player-spells'>
          <img src={img.sumSpel1} alt='' />
          <img src={img.sumSpel2} alt='' />
          <img src={img.rune1} alt='' />
          <img src={img.rune2} alt='' />
        </div>
        <div className='player-items'>
          <img src={img.item1} alt='' />
          <img src={img.item2} alt='' />
          <img src={img.item3} alt='' />
          <img src={img.item4} alt='' />
          <img src={img.item5} alt='' />
          <img src={img.item6} alt='' />
          <img src={img.item7} alt='' />
        </div>
      </div>
      <div className='match-info'>
        <p className='danger'>P/Kill 80%</p>
        <p>Control Ward 2</p>
        <div className='underline'></div>
        <p>CS 190 (6.5)</p>
        <p>Grandmaster</p>
      </div>
      <div className='match-players'>
        <div className='team-1'>
          {team1.map((player) => {
            return (
              <p>
                <img src={img.champIconSmall1} alt='' />
                {player.summonerName}
              </p>
            )
          })}
        </div>
        <div className='team-2'>
          {team2.map((player) => {
            return (
              <p>
                <img src={img.champIconSmall1} alt='' />
                {player.summonerName}
              </p>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default SingleMatch
