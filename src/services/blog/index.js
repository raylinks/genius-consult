import http from '@/utils/http'

const submitPost = async (post) => {
    const data = http.post('/submit/posts', { title: post.title, body: post.body })
    return data
}

const getAllPostsAdmin = async () => {
    const data = http.get('/admin/all/posts')
    return data
}

const getPost = async (id) => {
    const data = http.get(`post/${id}`)
    return data
}

const likePost = async (id) => {
    const data = http.post(`like/${id}/post`)
    return data
}

const unLikePost = async (id, user_id) => {
    const data = http.post(`unlike/${id}/post`, { user_id })
    return data
}

const submitComment = async (comment, id) => {
    const data = http.post('/submit/comment', { comment: comment, post_id: id })
    return data
}

export { submitPost, getAllPostsAdmin, getPost, likePost, unLikePost, submitComment }
