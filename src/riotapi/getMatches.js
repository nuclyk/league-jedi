import axios from 'axios'

export const getMatches = async (puuid) => {
  const URL = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?type=ranked&start=0&count=10&api_key=${process.env.REACT_APP_RIOT_KEY}`

  try {
    const response = await axios(URL)
    const matchIds = response.data
    return matchIds
  } catch (error) {
    console.log(error.Response)
  }
}
