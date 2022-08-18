import axios from 'axios'

export const getSummonerByName = async (name) => {
  const URL = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.REACT_APP_RIOT_KEY}`

  try {
    const response = await axios(URL)
    return response.data
  } catch (error) {
    console.log(error.Response)
  }
}
