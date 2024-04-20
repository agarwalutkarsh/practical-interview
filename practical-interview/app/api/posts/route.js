import Post from "@/Models/Post"
import { connectToDb } from "@/app/utils/database"

export const GET = async (request) => {
    await connectToDb()
    const allPosts = await Post.find()
    return new Response(JSON.stringify(allPosts), { status: 200})
}

export const POST = async (request) => {
    try {
    await connectToDb()
    const body = await request.json()
    const post = new Post(body)
    await post.save()
    return new Response(JSON.stringify(post), { status: 201})
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 400})
    }
}