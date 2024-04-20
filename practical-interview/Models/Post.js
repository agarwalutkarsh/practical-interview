import { Schema, model } from "mongoose"

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    }
})

const Post = model('Post', postSchema)

export default Post;