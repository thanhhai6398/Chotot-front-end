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
    // const submitData = JSON.stringify(payload)
    // console.log(submitData)
    // const data = {
    //   title: 'aa',
    //   category: '633709d59f0e8a76b3b2eb71',
    //   price: '25000',
    //   description: 'aa',
    //   address: 'aa',
    //   images: [
    //     'https://firebasestorage.googleapis.com/v0/b/chotot-3fb17.appspot.com/o/633709d59f0e8a76b3b2eb71%2Ff0jx57r?alt=media&token=24c72bf5-c51b-4c9e-99b4-c9f65c101836',
    //   ],
    //   branchName: 'aa',
    //   year: '2022',
    //   warranty: 'aa',
    //   version: 'aa',
    //   postedBy: '633a9bd7169e0f178bfb859a',
    // }
    // console.log(payload);
    // console.log(typeof payload.images)
    // console.log(JSON.stringify(payload))
    const res = request.post('/posts/upload', test)
    return res
  } catch (error) {
    console.log(error.message)
  }
}
