import HttpManager from '@/helpers/HttpManager'
import StorageManager from '@/helpers/StorageManager'

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
    const token = StorageManager.get('token')
    if (token) {
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
      HttpManager.post('auth/login', this.credentials).then(response => {
          StorageManager.save('token', response.data.data.access_token)
          this.$router.push({ name: 'pdf-root' })
      }).catch(error => {
        this.message = error.response.data.message
      })
    },
    onDismissAlert () {
      this.message = ''
    }
  }
}
