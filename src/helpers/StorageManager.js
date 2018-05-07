export default {
  get (key) {
    return sessionStorage.getItem(key)
  },
  save (key, value) {
    sessionStorage.setItem(key, value)
  },
  remove (key) {
    sessionStorage.removeItem(key)
  }
}
