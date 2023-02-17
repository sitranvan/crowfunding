import config from '../config/index.js'
import { uploadRequest } from '../utils/httpRequest.js'

const uploadApi = {
    upload: (payload) => {
        const url = `upload?key=${config.apiKeyUpload}`
        return uploadRequest.post(url, payload)
    },
}
export default uploadApi
