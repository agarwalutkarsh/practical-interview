import Post from "@/Models/Post"
import { connectToDb } from "@/app/utils/database"

export const DELETE = async (request, {params}) => {
    try {
    await connectToDb()
    const id = params.id
    const result = await Post.findByIdAndDelete(id)
    return new Response(JSON.stringify(result), { status: 200})
    } catch (err) {
        return new Response(JSON.stringify(err), { status: 500})
    }
}

export const GET = async (request, {params}) => {
    try {
    await connectToDb()
    const result = await Post.findById(params.id)
    return new Response(JSON.stringify(result), { status: 200})
    } catch (err) {
        return new Response(JSON.stringify(err), { status: 500})
    }
}

export const PATCH = async (request, {params}) => {
    try {
    await connectToDb()
    const id = params.id
    const body = await request.json()
    const result = await Post.findByIdAndUpdate(id, body, {new: true})
    return new Response(JSON.stringify(result), { status: 200})
    } catch (err) {
        return new Response(JSON.stringify(err), { status: 500})
    }
}
