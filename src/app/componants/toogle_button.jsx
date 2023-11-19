'use client';

import React, { useContext, useState } from 'react'
import { ThemeContext } from '@/context/context_provider'
import '@/app/globals.css'

const MySwitchButton = () => {

 const {isInDarkMode,setIsInDarkMode} = useContext(ThemeContext)
    const onClickHandler =(e)=>{
        setIsInDarkMode()
    }
  return (
    <div 
        onClick={onClickHandler} 
        className='relative w-[50px] h-[15px] cursor-pointer'>
        <div className={`w-[80px] h-[25px] rounded-xl ${isInDarkMode? "darkSwitch" : "lightSwitch"}`}></div>
        <div className={`absolute  -top-[8px] bottom-0 w-[40px] h-[40px] ${isInDarkMode? "darkSwitchRound" : "lightSwitchRound"}`}></div>
    </div>
  )
}

export default MySwitchButton
