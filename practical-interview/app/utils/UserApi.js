import axios from "axios"

export const signupUser = async (body) => {
    try {
        const resp = await axios.post('http://localhost:3000/api/users', body)
        return resp.data
    } catch (err) {
        return err.response
    }
}

export const loginUser = async (body) => {
    try {
        const resp = await axios.post('http://localhost:3000/api/users/login', body)
        return resp.data
    } catch (err) {
        return err.response
    }
}