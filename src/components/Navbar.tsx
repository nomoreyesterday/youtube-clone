import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import Searchbar from './Searchbar';
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { BsFacebook } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'

import { useStore, useMessagesStore } from '../datas/store'
// import { useStore, useMessagesStore, useWindowSize } from '../datas/store'

const Navbar = () => {

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
    // const { width } = useWindowSize((state) => state)
    
    const { isActive, setActive } = useStore()
    const [isDarkMode, setIsdarkMode] = useState(false)
    const handleDarkMode = () => {
        setIsdarkMode(!isDarkMode)
    }


  return (
        <nav title="navbar" className={`w-screen min-h-[56px] min-w-[251px] max-w-full sticky flex items-center justify-between px-[16px]
                        ${isDarkMode ? 'bg-gray-900 text-white' 
                                     : 'bg-[#fff]'}`}>
            
            <div  className='left flex items-center'>
                <span onClick={setActive}
                    className='w-[44px] h-[44px] rounded-[50%] hover:bg-[#F2F2F2] flex items-center justify-center cursor-pointer'>
                    {/* <i className="fa-solid fa-bars text-xl"></i> */}
                    <HiOutlineBars3 size={24}/>
                </span>    
                <div className='ml-5 cursor-pointer'>test.Gif</div>
            </div>                                
            
            
            <Searchbar/>


            <div className={`right flex items-center justify-end xs:w-[140px] 656:w-[225px] h-[40px]`}>
                <button className={`${width < 428 ? 'hidden' : `w-[40px] h-[40px] flex items-center justify-center  border-spacing-0 opacity-80 z-10
                                    rounded-[50%] cursor-pointer
                                    hover:bg-[#e5e5e5]
                                    active:bg-[#cecece]`}
                                    `}>
                    <IoIosNotificationsOutline size={24} />
                </button>
                <button onClick={handleDarkMode} 
                        className="w-[40px] h-[40px] flex items-center justify-center border-spacing-0 opacity-80 z-10
                                    rounded-[50%] cursor-pointer
                                    hover:bg-[#e5e5e5]
                                    active:bg-[#cecece]
                                    ">
                 
                    <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
                </button>
                <div className='w-[60px] h-[34px] py-[1px] px-[6px] flex items-center justify-center cursor-pointer'>
                    <img src="https://images.unsplash.com/photo-1614583225154-5fcdda07019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1790&q=80" alt=""  
                    className='profile w-[32px] h-[32px] rounded-[50%] z-10 object-cover' />
                </div>
            </div>
            
            
        </nav>
        
  )
}

export default Navbar
