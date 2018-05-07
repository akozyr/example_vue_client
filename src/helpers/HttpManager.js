import axios from 'axios'

export default {
  setAuthHeader (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
}
