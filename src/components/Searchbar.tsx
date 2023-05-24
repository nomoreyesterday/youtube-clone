import React, { useEffect, useState } from 'react'
import { BsFillMicFill } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { IoIosSearch } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { MdOutlineArrowBack } from 'react-icons/md'

function Searchbar() {

    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [width])

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true)
    }
    const handleBlur = () => {
        setIsFocused(false)
    }

    return (
        <>
        {
        // width > 656 ?
            <div className={`searchsection min-w-0 h-[40px] bg-transparent flex items-center flex-[0_1_728px] bg-blue-200  ${width > 656 ? '' : 'justify-end'}`}>
                <div className={`ml-[40px] px-[4px] flex items-center flex-1 ${width > 656 ? '' : 'hidden'}`}>
                    <div className='leftsearchsection relative flex items-center flex-1'>
                        <form action="" className='flex items-center flex-1'>
                            <div className={`leftsearch relative w-full max-w-[100%] h-[40px] pr-[4px]  border-[1px]  border-[#ccc] 
                                            rounded-[40px_0_0_40px] flex items-center flex-1  
                                            ${isFocused ? 'absolute border-[rgb(28,98,185)] ml-[0] pl-[48px] py-[2px]' : 'ml-[32px] pl-[16px] py-[2px]'}`}>
                                <div className={` left-0 px-[10px] w-[48px] h-[20px] flex items-center justify-center 
                                                ${isFocused ? 'absolute' : 'hidden' }
                                                `}>
                                    <BsSearch size={14} className=''/>
                                </div>
                                <input type="text" placeholder='ค้นหา'
                                        onFocus={handleFocus}
                                        onBlur={handleBlur} 
                                        className='relative w-full h-[26px] py-[1px] bg-transparent focus:border-none outline-none '/>
                            </div>
                        </form>  
                            <div className='buttonsearch relative w-[64px] h-[40px] px-[4px] py-[1px] border-[1px] border-l-0 border-[#ccc]  
                                            cursor-pointer hover:bg-[#f0f0f0] active:bg-[#e9e9e9]
                                            rounded-[0_40px_40px_0] flex items-center justify-center'>
                                <BsSearch size={16} className=''/>
                            </div>   
                    </div>
                </div>

                
                <div className={` ${width > 656 ? 'hidden' : `buttonsearch relative
                                    w-[40px] h-[40px] flex items-center justify-center 
                                    rounded-[50%] cursor-pointer
                                    hover:bg-[#e5e5e5]
                                    active:bg-[#cecece]`} `}>
                    <div className='w-[24px] h-[24px] flex items-center justify-center '>
                        <BsSearch size={16} />
                    </div>
                </div> 
                <div className={` ${width < 428 ? 'hidden' : `buttonsearch relative
                                    w-[40px] h-[40px] flex items-center justify-center 
                                    rounded-[50%] cursor-pointer
                                    hover:bg-[#e5e5e5]
                                    active:bg-[#cecece]`} `}>
                        <BsFillMicFill size={16}  />
                </div>
            </div>
        // :
        // <BsSearch size={16} className=''/>
        }
        </>
       

    
  )
}

export default Searchbar



export const SearchbarPopup = (isFocused?, handleFocus?, handleBlur?, width?) => {
  return (

    <div>
        <div className='Containerback w-[48px] h-[40px]'>
            <div className='container w-[40px] h-[40px] flex items-center justify-center p-[8px] mr-[8px] rounded-[50%] cursor-pointer
                            hover:bg-[#e5e5e5]
                            active:bg-[#cecece]'>
                <MdOutlineArrowBack size={20}/>
            </div>
        </div>
        <div className={`searchsection xs:w-auto  max-w-[728px] h-[40px] bg-transparent flex items-center flex-[0_1_728px]`}>
            <div className={`ml-[40px] px-[4px] flex items-center flex-1`}>
                <div className='leftsearchsection relative flex items-center flex-1'>
                    <form action="" className='flex items-center flex-1'>
                        <div className={`leftsearch relative w-full max-w-[100%] h-[40px] pr-[4px]  border-[1px]  border-[#ccc] 
                                        rounded-[40px_0_0_40px] flex items-center flex-1  
                                        ${isFocused ? 'absolute border-[rgb(28,98,185)] ml-[0] pl-[48px] py-[2px]' : 'ml-[32px] pl-[16px] py-[2px]'}`}>
                            <div className={` left-0 px-[10px] w-[48px] h-[20px] flex items-center justify-center 
                                            ${isFocused ? 'absolute' : 'hidden' }
                                            `}>
                                <IoSearchOutline size={18} className=''/>
                            </div>
                            <input type="text" placeholder='ค้นหา'
                                    onFocus={handleFocus}
                                    onBlur={handleBlur} 
                                    className='relative w-full h-[26px] py-[1px] bg-transparent focus:border-none outline-none '/>
                        </div>
                    </form>  
                        <div className='buttonsearch relative w-[64px] h-[40px] px-[4px] py-[1px] border-[1px] border-l-0 border-[#ccc]  
                                        cursor-pointer hover:bg-[#f0f0f0]
                                        rounded-[0_40px_40px_0] flex items-center justify-center'>
                            <IoSearchOutline size={22} className=''/>
                        </div>   
                </div>
            </div>
            <div className='buttonsearch relative
                                w-[40px] h-[40px] flex items-center justify-center 
                                rounded-[50%] cursor-pointer
                                hover:bg-[#e5e5e5]
                                active:bg-[#cecece] '>
                    <BsFillMicFill size={16}  />
            </div>
        </div>
    </div>
    
  )
}



