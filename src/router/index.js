import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login.vue'
import PdfRoot from '@/components/pdf/PdfRoot.vue'
import PdfRoutes from './pdf'
import PageNotFound from '@/components/errors/PageNotFound'
import StorageManager from '@/helpers/StorageManager'
import HttpManager from '@/helpers/HttpManager'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/pdf',
      name: 'pdf-root',
      component: PdfRoot,
      children: PdfRoutes,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  const routeRequiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (!routeRequiresAuth) {
    next()
  }

  const token = StorageManager.get('token')
  if (!token) {
    next({ name: 'login' })
  }

  HttpManager.setAuthHeader(token)
  next()
})

export default router
