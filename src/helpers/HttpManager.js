import axios from 'axios'
import { API_PATH } from '@/constants/main'

export default {
  get (path) {
    return axios.get(this.formUrl(path))
  },
  post (path, data) {
    return axios.post(this.formUrl(path), data)
  },
  put (path, data) {
    return axios.put(this.formUrl(path), data)
  },
  delete (path) {
    return axios.delete(this.formUrl(path))
  },
  formUrl (path) {
    const apiPath = API_PATH
    if (apiPath.charAt(apiPath.length - 1) === '/' && path.charAt(0) === '/') {
      path = path.substr(1)
    }
    return apiPath + path
  },
  setAuthHeader (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}
