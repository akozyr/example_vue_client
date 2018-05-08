import { PDF_TABLE_FIELDS, PDF_FORM_NEW_ITEMS } from '@/constants/pdf'
import HttpManager from '@/helpers/HttpManager'
import Alerter from '@/helpers/Alerter'

export default {
  data () {
    return {
      pdfFormNewItems: PDF_FORM_NEW_ITEMS,
      tableHeaderItems: PDF_TABLE_FIELDS,
      pdfData: {
        'text_short': '',
        'text_full': '',
        'text_advanced': ''
      },
      items: []
    }
  },
  created () {
    HttpManager.get('pdfs').then(response => {
      console.log(response.data.data)
    })
  },
  methods: {
    onDelete (id) {
      alert(confirm(`Remove ${id}?`))
    },
    onSubmit () {
      HttpManager.post('pdfs/all', this.pdfData).then(response => {
        //
      }).catch(error => {
        Alerter.alert(error.response.message)
      })
    },
    onReset () {
      this.pdfData.text_short = ''
      this.pdfData.text_full = ''
      this.pdfData.text_advanced = ''
    },
    getPdfDataItemPlaceholder (type) {
      return `Please enter a custom part of '${type}' pdf`
    }
  }
}
