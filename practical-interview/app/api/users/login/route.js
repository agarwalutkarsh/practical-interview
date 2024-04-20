import User from "@/Models/User"
import { connectToDb } from "@/app/utils/database"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

export const POST = async (request) => {
    try {
        await connectToDb()
        const body = await request.json()
        const email = body['email']
        const user = await User.findOne({ email: email })
        if (!user) {
            return new Response('Not Found', {status: 404})
        }
        const verifyPassword = await new Promise((resolve, reject) => {
            compare(body['password'], user.password, (err, res) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(res)
                }
            })
        })
        if (!verifyPassword) {
            return new Response('Wrong password', {status: 401})
        }
        const token = sign({ email: user.email, userName: user.userName }, 'secret')
        user.token = token
        await user.save()
        return new Response(JSON.stringify({email: user.email, token: user.token, userName: user.userName}), {status: 200})
    } catch (err) {
        return new Response(JSON.stringify(err), {status: 500})
    }
}