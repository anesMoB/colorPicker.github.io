'use client';

import React, { createContext,useState } from "react";


export const ThemeContext=React.createContext()

export function ThemeProvider ({children}){
   

    const [isInDarkMode,setIsInDarkMode]=useState(true)
    const toggleTheme =()=>{
        setIsInDarkMode(prev=> !prev)
    }
    return (
     <ThemeContext.Provider value={{isInDarkMode:isInDarkMode,setIsInDarkMode:toggleTheme}}>
            {children}
      </ThemeContext.Provider>
  )
}

