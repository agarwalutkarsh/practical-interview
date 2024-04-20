import axios from "axios"

export const getAllPosts = async () => {
    try {
        const resp = await axios.get('http://localhost:3000/api/posts')
        return resp.data
    } catch (err) {
        return err.response
    }
}

export const getPost = async (id) => {
    try {
        const resp = await axios.get(`http://localhost:3000/api/posts/${id}`)
        return resp.data
    } catch (err) {
        return err.response
    }
}
export const deletePost = async (id) => {
    try {
        const resp = await axios.delete(`http://localhost:3000/api/posts/${id}`)
        return resp.data
    } catch (err) {
        return err.response
    }
}

export const editPost = async (body, id) => {
    try {
        const resp = await axios.patch(`http://localhost:3000/api/posts/${id}`, body)
        return resp.data
    } catch (err) {
        return err.response
    }
}

export const createPost = async (body) => {
    try {
        const resp = await axios.post(`http://localhost:3000/api/posts`, body)
        return resp.data
    } catch (err) {
        return err.response
    }
}