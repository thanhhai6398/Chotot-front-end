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
    const submitData = JSON.stringify(payload)
    const res = request.post('/posts/upload', JSON.parse(submitData))
    return res
  } catch (error) {
    console.log(error.message)
  }
}
