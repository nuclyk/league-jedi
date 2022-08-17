import axios from 'axios'

const riotFetch = axios.create({
  baseURL: 'https://euw1.api.riotgames.com/lol',
})

riotFetch.interceptors.request.use(
  (request) => {
    console.log('request sent')
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

riotFetch.interceptors.response.use(
  (response) => {
    console.log('got response')
    return response
  },
  (error) => {
    console.log(error.response)
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND')
    }
    return Promise.reject(error)
  }
)

export default riotFetch
