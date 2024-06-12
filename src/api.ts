import axios from 'axios';

function instanceApi () {
  const api = axios.create(
    {
      baseURL: process.env.BASE_URL
    }
  )
  return api
}

export const api = instanceApi()