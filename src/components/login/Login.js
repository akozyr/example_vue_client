export default {
  data () {
    return {
      message: ''
    }
  },
  computed: {
    showDismissibleAlert () {
      return this.message.length
    }
  }
}
