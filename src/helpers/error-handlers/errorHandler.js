export default {
  catch (error) {
    if (process.env.NODE_ENV === 'development') {
      const message = `[${error.status}] - "${error.data.message}".`
      console.error(message)
    }
  }
}
