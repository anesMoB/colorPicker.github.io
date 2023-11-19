'use client';
import React, { useContext, useState } from 'react'
import { ThemeContext } from '@/context/context_provider'
import { ImageColorPicker } from 'react-image-color-picker';
import rgbHex from 'rgb-hex';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import MySwitchButton from './toogle_button';
import '@/app/globals.css'

const HomePage = () => {
    const {isInDarkMode} = useContext(ThemeContext)

    const [color, setColor] = useState("#76a5af");
    const [image, setImage] = useState(null);
  
    const imagePickerOnChangeHandler= (e) =>{
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const handleColorPick = (color) => {
        setColor(`#${rgbHex(color)}`);
        console.log('Selected color:', color); // Selected color: rgb(101, 42, 65)
      };
    const handleCopyColor = async () => {
        await navigator.clipboard.writeText(color);
        alert(`Copied ${color} to clipboard!`);
      };
  return (
    <div className={`${isInDarkMode ? "darkStyle" : "lightStyle"} flex flex-col lg:flex-row `}>
    
   <div className='relative flex flex-col  justify-between items-start  h-[70vh] w-[100%] lg:h-[100vh] lg:w-[30%]'>
   <div className={`relative flex  justify-start items-start  flex-col h-full w-full lg:items-start gap-4 md:gap-8 lg:gap-8 ${isInDarkMode ? "bg-gray-800" : "bg-gray-200"}  p-6 lg:p-12`}>
   <div className='flex flex-col justify-around items-start  gap-6'>
   <h1 className='text-2xl font-bold'>Pick color from image</h1>
   <h2 className='text-md font-bold'>1. Select an image</h2>
   <input onChange={imagePickerOnChangeHandler} type='file' />
   </div> 
    <div className='flex flex-col justify-around items-start  gap-6'>
    <h2 className='text-md font-bold'>3. View selected <br></br><span className={`text-sm  ${isInDarkMode ? "text-gray-300" : "text-gray-600"}`}>(Tap on the botton below to copy the hex color code)</span></h2>
    <button
    onClick={handleCopyColor}
    style={{backgroundColor:color}} className={`w-[250px] h-[160px] cursor-pointer rounded-xl`}><span className='text-lg font-bold'>{color}</span>
    </button>
    </div>
    
    </div>
    <div className={`${isInDarkMode ? "bg-gray-900" : "bg-gray-300"} w-[100%] h-[100px] flex justify-around items-center text-5xl`}> 
    <MdDarkMode />
    <MySwitchButton />
    <CiLight />

    </div>
   </div>
    <div className={`flex justify-center items-center  h-[65vh] w-[100%]  lg:h-[100vh] lg:w-[70%] ${isInDarkMode ? "bg-gray-500" : "bg-gray-100"}`} 

        >
        {image ? (
        <div className='relative w-[100%]  h-[100%] flex flex-col justify-center  items-center'>
            <div className='h-[80%] w-[70%]' >
            
            <ImageColorPicker
                onColorPick={handleColorPick}
                imgSrc={image}
                zoom={2}
            />
            </div>
             <div className='absolute z-0 top-0 bottom-0 left-0 right-0 h-[100%] w-[100%] blur-lg	 object-cover overflow-hidden	'><img  src={image} alt={'image'}/> 
             </div>
        </div>
      ) : (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="4em"
          width="4em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707v5.586l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zm-1.498 4a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"></path>
          <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"></path>
        </svg>
      )}
    </div>
    </div>
  )
}

export default HomePage