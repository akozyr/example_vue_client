import Alerter from '@/helpers/Alerter'
import StorageManager from '@/helpers/StorageManager'
import HttpManager from '@/helpers/HttpManager'
import endpoints from '@/endpoints'

export default {
  processUnauthorizedUser () {
    const tokenExpiredMessage = 'Session is expired. Please log in again.'
    Alerter.alert(tokenExpiredMessage)

    StorageManager.remove('token')
  },
  isAuthenticated () {
    const token = StorageManager.get('token')

    return !!token
  },
  attempt (credentials) {
    const promise = HttpManager.post(
      endpoints.auth.login(),
      credentials
    ).then(response => {
      StorageManager.save('token', response.data.data.access_token)
    })

    return promise
  },
  getUserToken () {
    return StorageManager.get('token')
  },
  user () {
    return HttpManager.get(endpoints.auth.userInfo())
  },
  logout () {
    return HttpManager.post(endpoints.auth.logout()).then(response => {
      Alerter.alert(response.data.message)

      StorageManager.remove('token')
    })
  }
}
