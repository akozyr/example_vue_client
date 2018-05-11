import CheckIfAuthenticated from './middlewares/CheckIfAuthenticated'

export default function middleware (router) {
  CheckIfAuthenticated(router)
}
