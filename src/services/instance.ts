import axios from 'axios'

const prefixUrl = 'API_URL'

const instance = axios.create({
    baseURL: prefixUrl,
    timeout: 60000 // 60 seconds
})

instance.interceptors.request.use(config => {
    return config
})

export default instance
