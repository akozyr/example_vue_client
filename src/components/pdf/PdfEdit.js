import HttpManager from '@/helpers/HttpManager'
import ErrorHandler from '@/helpers/error-handlers/ErrorHandler'
import Alerter from '@/helpers/Alerter'
import endpoints from '@/endpoints'

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

    HttpManager.get(endpoints.pdfs.show(this.pdfId)).then(response => {
      this.pdfData.text = response.data.data.custom_text
    }).catch(error => {
      Alerter.alert(error.data.message)

      this.$router.push({ name: 'pdf-main' })
    })
  },
  methods: {
    onSubmit () {
      HttpManager.put(
        endpoints.pdfs.update(this.pdfId),
        this.pdfData
      ).then(response => {
        Alerter.alert(response.data.message)

        this.$router.push({ name: 'pdf-main' })
      }).catch(error => {
        ErrorHandler.catch(error)
      })
    },
    onReset () {
      this.pdfData.text = ''
    }
  }
}
