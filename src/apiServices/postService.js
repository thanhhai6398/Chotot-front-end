import * as request from '~/utils/request'

export const httpAddPost = async (payload) => {
  try {
    const res = request.post('/posts', payload)
    return res.data
  } catch (error) {
    console.log(error.message)
  }
}
