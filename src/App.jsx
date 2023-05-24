import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Chatbox from './components/Chatbox'
import Sidebar from './components/Sidebar'
import Vdostream from './components/Vdostream'
import DetailSection from './components/DetailSection'
import Description from './components/Description'
import Commentsection from './components/Commentsection'
import Content from './components/Content'
// import {Navbar, Chatbox, Sidebar, Vdostream} './components'

import { useStore, useMessagesStore } from './datas/store'

// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import { Box } from '@mui/material'

function App() {
    const { isActive, setActive } = useStore()
    // const [height, setHeight] = useState(window.innerHeight)
    // const [width, setWidth] = useState(window.innerWidth)
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWidth(window.innerWidth)
    //         setHeight(window.innerHeight)
    //     }
    //     // console.log(width)
    //     window.addEventListener('resize', handleResize)
    //     return () => {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // }, [width])


    return (
        <div >
        {/* <div ref={ref} onClick={changeColorOnBodyClick}> */}
            {/* <img src="https://images.unsplash.com/photo-1563863251222-11d3e3bd3b62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" 
            className='absolute opacity-50 w-screen h-screen object-cover object-top'/>
         */}
            <Navbar/>
            <Sidebar />

            <div className='screencontainer relative
                            4xl:w-[1754px] 
                            grid 
                            xl:grid-cols-[auto_426px]
                            lg:grid-cols-[calc(664px+24px)_auto]
                            sm:grid-cols-[calc(100%+3px)]
                            xs:grid-cols-[475px]
                            z-50 mx-[auto]'>
                <div className='vdoconsection relative
                                HD:w-[calc(1280px+24px)] 
                                xs:w-[calc(100%-24px)]
                                min-h-[0] h-auto
                                flex flex-col
                                xs:ml-[24px] xs:pt-[24px] xs:pr-[24px]
                                '> 
                    <Vdostream />
                    <DetailSection />
                    {/* <Description /> */}
                    {/* <div className={`relative my-[24px] ${width > 1016 ? "hidden" : ""}`}> */}
                    <div className={`relative my-[24px] sm:block min1016:hidden`}>
                        <Chatbox />
                    </div>
                    <Commentsection />
                    <Content />

                </div>     

                <div className={`rightsidechatboxsection 
                                relative
                                xl:w-[426px] 
                                sm:w-[100%] 
                                xs:w-[100%]
                                lg:pl-[0]
                                pl-[24px]
                                pr-[24px]
                                pt-[24px]
                                max1016:hidden
                                min1016:block
                                `}>                            
                                {/* ${width < 1016 ? "hidden" : ""} */}
                        <Chatbox />
                        
                </div>
            </div>
        </div>
    )
}

export default App


