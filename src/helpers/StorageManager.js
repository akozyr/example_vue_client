export default {
  get (key) {
    return localStorage.getItem(key)
  },
  save (key, value) {
    localStorage.setItem(key, value)
  },
  remove (key) {
    localStorage.removeItem(key)
  }
}
