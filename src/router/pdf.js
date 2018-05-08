import PdfShowAll from '@/components/pdf/PdfShowAll.vue'
import PdfShow from '@/components/pdf/PdfShow.vue'

export default [
  {
    path: 'all',
    name: 'pdf-all',
    component: PdfShowAll
  },
  {
    path: 'show/:id',
    name: 'pdf-show',
    component: PdfShow
  }
]
