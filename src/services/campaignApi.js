import { crowRequest } from '../utils/httpRequest.js'

const campaignApi = {
    addCampaign: (payload) => {
        const url = 'campaigns'
        return crowRequest.post(url, payload)
    },
}

export default campaignApi
