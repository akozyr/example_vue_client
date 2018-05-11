import axios from 'axios'
import AuthService from '@/services/auth/AuthService'
import { HTTP_UNAUTHORIZED } from '@/constants/main'

export default {
  setUsing (router) {
    axios.interceptors.request.use(
      config => {
        const token = AuthService.getUserToken()

        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }

        return config
      },
      error => {
        return Promise.reject(error)
      }
    )

    axios.interceptors.response.use(
      response => {
        return response
      },
      error => {
        if (error.response.status === HTTP_UNAUTHORIZED && AuthService.isAuthenticated()) {
          AuthService.processUnauthorizedUser()
          router.push({ name: 'login' })
        }

        return Promise.reject(error.response)
      }
    )
  }
}
