import AuthService from '@/services/auth/AuthService'

export default function CheckIfAuthenticated (router) {
  router.beforeEach((to, from, next) => {
    const routeRequiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (!routeRequiresAuth) {
      next()
      return
    }

    if (!AuthService.isAuthenticated) {
      next({ name: 'login' })
      return
    }

    next()
  })
}
