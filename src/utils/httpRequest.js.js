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

export { countryRequest, crowRequest }
