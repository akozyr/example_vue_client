import Alerter from '@/helpers/Alerter'
import StorageManager from '@/helpers/StorageManager'
import HttpManager from '@/helpers/HttpManager'

export default {
  processUnauthorizedUser () {
    const tokenExpiredMessage = 'Token is expired. Please log in again.'
    Alerter.alert(tokenExpiredMessage)

    StorageManager.remove('token')
  },
  isAuthenticated () {
    const token = StorageManager.get('token')

    return !!token
  },
  attempt (credentials) {
    const promise = HttpManager.post('auth/login', credentials).then(response => {
      StorageManager.save('token', response.data.data.access_token)
    })

    return promise
  },
  getUserToken () {
    return StorageManager.get('token')
  }
}
