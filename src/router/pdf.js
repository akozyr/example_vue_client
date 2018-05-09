import PdfMain from '@/components/pdf/PdfMain.vue'
import PdfEdit from '@/components/pdf/PdfEdit.vue'

export default [
  {
    path: 'main',
    name: 'pdf-main',
    component: PdfMain
  },
  {
    path: 'edit/:id',
    name: 'pdf-edit',
    component: PdfEdit
  }
]
