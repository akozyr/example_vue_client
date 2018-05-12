import AuthService from '@/services/auth/AuthService'
import ErrorHandler from '@/helpers/error-handlers/ErrorHandler'

export default {
  data () {
    return {
      userInfo: {}
    }
  },
  computed: {
    fullname () {
      const firstname = this.userInfo.firstname || ''
      const lastname = this.userInfo.lastname || ''

      return `${firstname} ${lastname}`
    }
  },
  created () {
    AuthService.user().then(response => {
      this.userInfo = response.data.data
    }).catch(error => {
      ErrorHandler.catch(error)
    })
  },
  mounted () {
    this.$router.push({ name: 'pdf-main' })
  },
  methods: {
    onLogout () {
      AuthService.logout().then(response => {
        this.$router.push({ name: 'login' })
      }).catch(error => {
        ErrorHandler.catch(error)
      })
    }
  }
}
