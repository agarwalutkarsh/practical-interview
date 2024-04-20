import User from "@/Models/User"
import { connectToDb } from "@/app/utils/database"
import { hash } from "bcrypt"
import { sign } from "jsonwebtoken"

export const POST = async (request) => {
    try {
        await connectToDb()
        const {email, userName, password} = await request.json()
        const body = {
            email,
            userName,
            password: await new Promise((resolve, reject) => {
                hash(password, 10, (err, hash) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(hash)
                })
            }),
            token: sign({email, userName}, 'secret')
        }
        const user = new User(body)
        await user.save()
        return new Response(user, { status: 200 })
    } catch (err) {
        return new Response(err.message, { status: 400 })
    }
}