import * as PdfConstants from '@/constants/pdf'
import HttpManager from '@/helpers/HttpManager'
import ErrorHandler from '@/helpers/error-handlers/ErrorHandler'
import Alerter from '@/helpers/Alerter'
import endpoints from '@/endpoints'

export default {
  data () {
    return {
      pdfFormNewItems: PdfConstants.PDF_FORM_NEW_ITEMS,
      tableHeaderItems: PdfConstants.PDF_TABLE_FIELDS,
      pdfData: {
        'text_short': '',
        'text_full': '',
        'text_advanced': ''
      },
      items: []
    }
  },
  created () {
    HttpManager.get(endpoints.pdfs.all()).then(response => {
      this.items = response.data.data
    }).catch(error => {
      ErrorHandler.catch(error)
    })
  },
  methods: {
    onDelete (id) {
      const confirmationMessage = 'Are you sure you delete the pdf?'
      if (Alerter.isConfirmed(confirmationMessage)) {
        HttpManager.delete(endpoints.pdfs.delete(id)).then(response => {
          Alerter.alert(response.data.message)

          HttpManager.get(endpoints.pdfs.all()).then(response => {
            this.items = response.data.data
          }).catch(error => {
            ErrorHandler.catch(error)
          })
        }).catch(error => {
          ErrorHandler.catch(error)
        })
      }
    },
    onSubmit () {
      HttpManager.post(endpoints.pdfs.store(), this.pdfData).then(response => {
        this.clearPdfData()
        Alerter.alert(response.data.message)

        HttpManager.get(endpoints.pdfs.all()).then(response => {
          this.items = response.data.data
        }).catch(error => {
          ErrorHandler.catch(error)
        })
      }).catch(error => {
        Alerter.alert(error.data.message)
      })
    },
    onReset () {
      this.clearPdfData()
    },
    clearPdfData () {
      this.pdfData.text_short = ''
      this.pdfData.text_full = ''
      this.pdfData.text_advanced = ''
    },
    getPdfDataItemPlaceholder (type) {
      return `Please enter a custom part of '${type}' pdf`
    },
    getTypeTitle (type) {
      if (!PdfConstants.PDF_TYPE_TITLES.hasOwnProperty(type)) {
        return ''
      }

      return PdfConstants.PDF_TYPE_TITLES[type]
    }
  }
}
