import axios from 'axios'

export const getMatch = async (matchId) => {
  const matchUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.REACT_APP_RIOT_KEY}`

  try {
    const response = await axios(matchUrl)

    const { gameId, gameDuration, gameType, gameCreation, gameEndTimestamp } =
      response.data.info

    const players = response.data.info.participants
    let participants = []

    players.forEach((item) => {
      let {
        puuid,
        summonerId,
        participantId,
        teamId,
        summonerName,
        summonerLevel,
        champLevel,
        championId,
        championName,
        deaths,
        goldEarned,
        item0,
        item1,
        item2,
        item3,
        item4,
        item5,
        item6,
        killingSprees,
        kills,
        lane,
        totalDamageDealt,
        totalDamageTaken,
        turretKills,
        wardsPlaced,
        win,
        assists,
        challenges: {
          kda,
          killParticipation,
          controlWardsPlaced,
        },
        neutralMinionsKilled,
        totalMinionsKilled,
        summoner1Id,
        summoner2Id,
        perks
      } = item

      participants.push({
        puuid,
        summonerId,
        participantId,
        teamId,
        summonerName,
        summonerLevel,
        champLevel,
        championId,
        championName,
        deaths,
        goldEarned,
        item0,
        item1,
        item2,
        item3,
        item4,
        item5,
        item6,
        killingSprees,
        kills,
        lane,
        totalDamageDealt,
        totalDamageTaken,
        turretKills,
        wardsPlaced,
        win,
        kda,
        killParticipation,
        totalMinionsKilled,
        controlWardsPlaced,
        assists,
        neutralMinionsKilled,
        summoner1Id,
        summoner2Id,
        perks
      })
    })

    const [{ teamId, win: teamWin }] = response.data.info.teams

    return {
      gameId,
      gameDuration,
      gameType,
      gameCreation,
      gameEndTimestamp,
      participants,
      teamId,
      teamWin,
    }
  } catch (error) {
    console.log(error.Response)
  }
}
