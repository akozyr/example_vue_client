import AuthService from '@/services/auth/AuthService'

export default {
  data () {
    return {
      message: '',
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  created () {
    if (AuthService.isAuthenticated()) {
      this.$router.push({ name: 'pdf-root' })
    }
  },
  mounted () {
    this.$refs.email.focus();
  },
  computed: {
    showDismissibleAlert () {
      return this.message.length
    }
  },
  methods: {
    onSubmit () {
      AuthService.attempt(this.credentials).then(response => {
        this.$router.push({ name: 'pdf-root' })
      }).catch(error => {
        this.message = error.data.message
      })
    },
    onDismissAlert () {
      this.message = ''
    }
  }
}
