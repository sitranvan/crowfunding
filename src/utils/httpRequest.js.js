import axios from 'axios'

const countryRequest = axios.create({
    baseURL: 'https://restcountries.com/v2/',
    headers: {
        'Content-Type': 'application/json',
    },
})

const crowRequest = axios.create({
    baseURL: 'http://localhost:3009/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})

const uploadRequest = axios.create({
    baseURL: 'https://api.imgbb.com/1/',
    headers: {
        'Content-Type': 'multipart/form-data',
    },
})

export { countryRequest, crowRequest, uploadRequest }
