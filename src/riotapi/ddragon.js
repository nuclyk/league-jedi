import axios from 'axios'

const url = `http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json`
const summonerURL = `http://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/summoner.json`
const summonerImgURL = `http://ddragon.leagueoflegends.com/cdn/12.15.1/img/spell/`
const championImgURL = `http://ddragon.leagueoflegends.com/cdn/12.15.1/img/champion/`
const itemImgURL = `https://ddragon.leagueoflegends.com/cdn/12.15.1/img/item/`
const profileIcon = `https://ddragon.leagueoflegends.com/cdn/12.15.1/img/profileicon/`

export const getChampion = async (name) => {
  try {
    const response = await axios(url)
    console.log(response.data.data[name])
    return response.data
  } catch (error) {
    console.log(error.Response)
  }
}

export const getChampionImg = (name) => {
  const img = `${championImgURL}${name}.png`
  return img
}

export const getItemImg = (id) => {
  const img = `${itemImgURL}${id}.png`
  return img
}

export const getProfileIcon = (id) => {
  const img = `${profileIcon}${id}.png`
  return img
}

export const getSummoner = async (id) => {
  const response = await axios(summonerURL)
  const summoners = response.data.data

  for (const property in summoners) {
    if (summoners[property].key === id) {
      return `${summonerImgURL}${summoners[property].image.full}`
    }
  }
}
