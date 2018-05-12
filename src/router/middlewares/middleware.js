import CheckIfAuthenticated from './CheckIfAuthenticated'

export default function middleware (router) {
  CheckIfAuthenticated(router)
}
