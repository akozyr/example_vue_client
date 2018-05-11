import Login from '@/components/login/Login.vue'
import PdfRoot from '@/components/pdf/PdfRoot.vue'
import PdfMain from '@/components/pdf/PdfMain.vue'
import PdfEdit from '@/components/pdf/PdfEdit.vue'
import PageNotFound from '@/components/errors/PageNotFound'
import { STANDARD_ROUTE_META } from '@/constants/main'

export default [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/pdf',
    name: 'pdf-root',
    component: PdfRoot,
    meta: STANDARD_ROUTE_META,
    children: [
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
  },
  {
    path: '*',
    component: PageNotFound
  }
]
