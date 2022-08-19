import axios from "axios";

const url = `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/`

export const getLeague = async (summonerId) => {
    const leagueURL = `${url}${summonerId}?api_key=${process.env.REACT_APP_RIOT_KEY}`
    const response = await axios(leagueURL)

    const { leagueId, leaguePoints, wins, losses, rank, tier, summonerEncrypedId, hotStreak, freshBlood } = response.data[0]
    return {
        leagueId, leaguePoints, wins, losses, rank, tier, summonerEncrypedId, hotStreak, freshBlood
    }
}