import axios from 'axios'

const countryRequest = axios.create({
    baseURL: 'https://restcountries.com/v2/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export { countryRequest }
