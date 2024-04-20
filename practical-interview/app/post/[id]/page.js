'use client'
import { getPost } from '@/app/utils/PostsApi'
import React, { useEffect, useMemo, useState } from 'react'

const page = ({ params }) => {
    const [post, setPost] = useState({})

    const id = useMemo(() => {
        return params.id
    }, [params])

    useEffect(() => {
        const resp = getPost(id)
        resp.then(data => setPost(data))
    }, [id])

    return (
        <div className='bg-white text-black flex flex-col p-2 my-2 w-[30%]'>
            <h1>{post.title}</h1>
            <h2>{post.text}</h2>
            <h3>{post.category}</h3>
            <div className='flex'>
                <button className='bg-blue-400 text-white w-full p-2'>Edit</button>
                <button className='bg-red-400 text-white w-full p-2'>Delete</button>
            </div>
        </div>
    )
}

export default page