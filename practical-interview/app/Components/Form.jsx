'use client'
import React, { useContext, useState } from 'react'
import { loginUser, signupUser } from '../utils/UserApi'
import { MainContext } from './ContextApi/MainContext'

const Form = ({ mode, setShow }) => {
    const [formData, setFormData] = useState({})
    const mainContext = useContext(MainContext)
    const submitHandler = (e) => {
        e.preventDefault()
        if (mode !== 'login') {
            const resp = signupUser(formData)
            resp.then(data => {
                mainContext.setIsLogin(true)
                localStorage.setItem('token', data.token)
                localStorage.setItem('userName', data.userName)
                localStorage.setItem('email', data.email)
            })
            setShow(false)
        } else {
            console.log({
                email: formData.email,
                password: formData.password,
            })
            const resp = loginUser({
                email: formData.email,
                password: formData.password,
            })
            resp.then(data => {
                localStorage.setItem('token', data.token)
                localStorage.setItem('userName', data.userName)
                localStorage.setItem('email', data.email)
                mainContext.setIsLogin(true)
            })
            setShow(false)
        }
    }

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    return (
        <div className='z-50 bg-white p-4 w-[30%] m-auto my-10'>
            <p className='text-gray-600 mx-auto text-xl'>Login</p>
            <form>
                {
                    mode !== 'login'
                    && <input type='text' name='name' placeholder='Name' className='w-full my-1 p-1 text-black' onChange={(e) => onChangeHandler(e)} required value={formData?.name}></input>
                }
                <input type='text' name='email' placeholder='Email' className='w-full my-1 p-1 text-black' onChange={(e) => onChangeHandler(e)} required value={formData?.email}></input>
                <input type='password' name='password' placeholder='Password' className='w-full my-1 p-1 text-black' onChange={(e) => onChangeHandler(e)} required value={formData?.password}></input>
                <div className='flex'>
                    <button className='bg-blue-500 text-white w-full mx-2 p-2' onClick={submitHandler} >{mode === 'login' ? 'Login' : 'Signup'}</button>
                    <button className='bg-red-500 text-white w-full mx-2 p-2' onClick={() => setShow(false)} >Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Form