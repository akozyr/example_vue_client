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
  computed: {
    showDismissibleAlert () {
      return this.message.length
    }
  },
  methods: {
    onSubmit () {
      console.log(this.credentials.email, this.credentials.password)
    }
  }
}
