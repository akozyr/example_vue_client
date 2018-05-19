export default {
  get auth () {
    const prefix = 'auth'
    return {
      login: () => `${prefix}/login`,
      logout: () => `${prefix}/logout`,
      userInfo: () => `${prefix}/user-info`
    }
  },
  get pdfs () {
    const prefix = 'pdfs'
    return {
      all: () => `${prefix}`,
      store: () => `${prefix}/all`,
      show: (id) => `${prefix}/${id}`,
      update: (id) => `${prefix}/${id}`,
      delete: (id) => `${prefix}/${id}`
    }
  }
}
