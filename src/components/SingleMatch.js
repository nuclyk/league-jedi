import React, { useState } from 'react'
import Moment from 'react-moment'
import moment from 'moment'
import { useGlobalContext } from '../context'
import {
  getChampionImg,
  getItemImg,
  getProfileIcon,
  getRunesImages,
  getSummoner,
  getSummonerImg,
} from '../riotapi/ddragon'
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
  const [summonerImg1, setSummonerImg1] = useState('')
  const [summonerImg2, setSummonerImg2] = useState('')
  const [runeImg1, setRuneImg1] = useState('')
  const [runeImg2, setRuneImg2] = useState('')
  const team1 = participants.filter((player) => player.teamId === 100)
  const team2 = participants.filter((player) => player.teamId === 200)

  const primaryStyleId = player.perks.styles[0].style
  const secondaryStyleId = player.perks.styles[1].style
  const perkId1 = player.perks.styles[0].selections[0].perk

  getRunesImages(primaryStyleId, perkId1)
    .then((result) => setRuneImg1(result))
    .catch((error) => console.log(error))

  getRunesImages(secondaryStyleId)
    .then((result) => setRuneImg2(result))
    .catch((error) => console.log(error))

  getSummoner(`${player.summoner1Id}`)
    .then(function (result) {
      setSummonerImg1(result)
    })
    .catch((error) => console.log(error))

  getSummoner(`${player.summoner2Id}`)
    .then(function (result) {
      setSummonerImg2(result)
    })
    .catch((error) => console.log(error))

  const gameDate = new Date(gameCreation).toDateString()

  const minutes = Math.floor(gameDuration / 60)
  const seconds = gameDuration % 60

  return (
    <article className={`${player.win ? 'match victory' : 'match loss'}`}>
      <div className='match-result'>
        <h4>Ranked Solo</h4>
        <p>
          <Moment format='DD/MM/YY'>{gameDate}</Moment>
        </p>
        <div className='underline'></div>
        <p className='success'>{player.win ? 'Victory' : 'Defeat'}</p>
        <p>{`${minutes}:${seconds}`}</p>
      </div>
      <div className='player'>
        <div className='player-icon'>
          <img
            src={getChampionImg(player.championName)}
            className='player-champ'
            alt=''
          />
        </div>
        <div className='player-spells'>
          <img src={summonerImg1} alt='' />
          <img src={summonerImg2} alt='' />
          <img src={runeImg1} alt='' />
          <img src={runeImg2} alt='' />
        </div>
        <div className='player-items'>
          <img src={getItemImg(player.item0)} alt='' />
          <img src={getItemImg(player.item1)} alt='' />
          <img src={getItemImg(player.item2)} alt='' />
          <img src={getItemImg(player.item3)} alt='' />
          <img src={getItemImg(player.item5)} alt='' />
          <img src={getItemImg(player.item6)} alt='' />
        </div>
      </div>
      <div className='match-info'>
        <p>Level {player.champLevel}</p>
        <p>
          <span className='danger'>
            P/Kill {Math.floor(player.killParticipation * 100)}%{' '}
          </span>
        </p>
        <p>{player.kda.toFixed(2)}:1 KDA</p>
        <p>Control Wards {player.controlWardsPlaced}</p>
        <p>
          <span className='success'>{player.kills}</span> /{' '}
          <span className='danger'>{player.deaths}</span> / {player.assists}
        </p>
        <p>CS {player.totalMinionsKilled + player.neutralMinionsKilled}</p>
      </div>
      <div className='match-players'>
        <div className='team-1'>
          {team1.map((player) => {
            return (
              <p key={player.participantId}>
                <img src={getChampionImg(player.championName)} alt='' />
                {player.summonerName.slice(0, 10)}...
              </p>
            )
          })}
        </div>
        <div className='team-2'>
          {team2.map((player) => {
            return (
              <p key={player.participantId}>
                <img src={getChampionImg(player.championName)} alt='' />
                {player.summonerName.slice(0, 10)}...
              </p>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default SingleMatch
