import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import middleware from './middleware'

Vue.use(Router)

const router = new Router({ routes })

middleware(router)

export default router
