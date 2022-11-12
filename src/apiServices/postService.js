import * as request from '~/utils/request'

export const httpGetPostById = async (id) => {
  try {
    const res = request.get(`/posts/${id}`)
    return res
  } catch (error) {
    console.log(error.message)
  }
}
export const httpAddPost = async (payload) => {
  try {
    const res = request.post('/posts/upload', payload)
    return res
  } catch (error) {
    console.log(error.message)
    return { ok: false }
  }
}
