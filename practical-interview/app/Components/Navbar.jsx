'use client'
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from './ContextApi/MainContext'
import Form from './Form'

const Navbar = () => {
    const mainContext = useContext(MainContext)
    const [mode, setMode] = useState('login')
    const [show, setShow] = useState(false)

    const logoutHandler = () => {
        localStorage.clear()
        mainContext.setIsLogin(false)
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            mainContext.setIsLogin(true)
        }
    }, [])

    return (
        <>
            <nav className='bg-gray-500 text-white flex w-full p-2'>
                Blog Posts
                {
                    !mainContext?.isLogin
                        ? <div className='flex ml-auto mr-2'>
                            <button className='bg-white text-black rounded-lg p-2 mx-2' onClick={() => {
                                setShow(true)
                                setMode('login')
                            }} >Login</button>
                            <button className='bg-white text-black rounded-lg p-2 mx-2' onClick={() => {
                                setShow(true)
                                setMode('signup')
                            }} >Sign up</button>
                        </div>
                        : <div className='flex ml-auto mr-2'>
                            <button className='bg-white text-black rounded-lg p-2 mx-2' onClick={logoutHandler}  >Logout</button>
                            <button className='bg-white text-black rounded-lg p-2 mx-2' >My Posts</button>
                        </div>
                }


            </nav>
            {show && <Form mode={mode} setShow={setShow} />}
        </>
    )
}

export default Navbar