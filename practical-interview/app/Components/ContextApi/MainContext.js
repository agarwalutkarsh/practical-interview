'use client'
import React, { createContext, useState } from 'react'

export const MainContext = createContext()

const MainContextWrapper = ({children}) => {
    const [isLogin, setIsLogin] = useState(true)
    const state = {
        isLogin,
        setIsLogin
    }
  return (
    <MainContext.Provider value={{...state}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextWrapper