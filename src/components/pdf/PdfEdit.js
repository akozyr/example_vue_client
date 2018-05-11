import HttpManager from '@/helpers/HttpManager'
import Alerter from '@/helpers/Alerter'

export default {
  data () {
    return {
      pdfId: this.$route.params.id,
      pdfData: {
        text: ''
      }
    }
  },
  created () {
    if (!this.pdfId) {
      this.$route.push({ name: 'pdf-main' })
    }

    HttpManager.get(`pdfs/${this.pdfId}`).then(response => {
      this.pdfData.text = response.data.data.custom_text
    }).catch(error => {
      Alerter.alert(error.data.message)

      this.$router.push({ name: 'pdf-main' })
    })
  },
  methods: {
    onSubmit () {
      HttpManager.put(`pdfs/${this.pdfId}`, this.pdfData).then(response => {
        Alerter.alert(response.data.message)

        this.$router.push({ name: 'pdf-main' })
      })
    },
    onReset () {
      this.pdfData.text = ''
    }
  }
}
