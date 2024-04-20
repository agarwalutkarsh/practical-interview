'use client'
import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../utils/PostsApi'

const Feed = () => {
    const [feeds, setFeeds] = useState([])
    useEffect(() => {
        const resp = getAllPosts()
        resp.then(data => {
            setFeeds(data)
            console.log(data)
        }).catch(err => {console.error(err)})
    }, [])
    return (
        <div className='flex flex-col w-[50%]'>
            {
                (feeds ?? [])?.map((item, index) => {
                    return (
                        <div key={index} className='bg-white text-black flex flex-col p-2 my-2'>
                            <h1>{item.title}</h1>
                            <h2>{item.text}</h2>
                            <h3>{item.category}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Feed