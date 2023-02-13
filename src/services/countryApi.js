import { countryRequest } from '../utils/httpRequest.js'

const countryApi = {
    searchName: (query) => {
        const url = `name/${query}`
        return countryRequest.get(url)
    },
}
export default countryApi
