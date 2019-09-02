import axios from 'axios'

const Api = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs`
})

export default Api