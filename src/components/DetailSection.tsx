import React, { useEffect, useRef, useState } from 'react'
import { TbShare3 } from 'react-icons/tb'
import { BiCut } from 'react-icons/bi'
import { TbPlaylistAdd } from 'react-icons/tb'
import { RiMoreFill } from 'react-icons/ri'
import { TbFlag } from 'react-icons/tb'
import { MdOutlineSubtitles } from 'react-icons/md'
import Description from './Description'


const DetailSection = () => {
    //width rightside = 490

    const containerRef = useRef<HTMLDivElement>(null)
    const rightsideRef = useRef<HTMLDivElement>(null)
    const [heightParent, setHeightParent] = useState(0)
    const [widthParent, setWidthParent] = useState(0)
    const [widthChildren, setWidthChildren] = useState(0)

    useEffect(() => {
        let animationFrameId: number
        const handleResize = () => {
          animationFrameId = window.requestAnimationFrame(() => {
            if (containerRef.current) {
              setHeightParent(containerRef.current.offsetHeight)
              setWidthParent(containerRef.current.offsetWidth)
            }
            if (rightsideRef.current) {
              setWidthChildren(rightsideRef.current.offsetWidth)
            }
          })
        }
        // console.log(heightParent)
        // console.log(widthParent)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [])
    
    const [isOpen, setIsOpen] = useState(false)
    const dropdownParentRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [])
    
    const handleOutsideClick = (event: MouseEvent) => {
        // if (isOpen) {
        //     window.scrollTo(0, 0)
        // }
        if (dropdownParentRef.current && dropdownRef.current) {
            if (!dropdownParentRef.current.contains(event.target as Node) && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
    }
    
    
    const toggleDropdown = () => {
        setIsOpen(prevIsOpen => !prevIsOpen)
    }

    return (
        <>
            <div className='Detailsectioncontainer mt-[12px] mb-[24px]'>
                {/* 1 */}
                <div className="Detailsection relative w-full h-auto  ">
                                
                    {/* 1 */}
                    <div className='Topsection Clipname relative w-full min-h-[28px] h-auto'>
                        <h1 className='relative text-[#0f0f0f] text-[18px] font-[600] leading-[28px]  break-words  text-ellipsis whitespace-normal overflow-hidden'>
                            【Gawr Gura｜1hr作業用BGM】天才小鯊魚日文歌曲合輯【Gura sings Playlist｜20 Japanese Songs】
                        </h1>
                    </div>
            
                    {/* 2 */}
                    <div ref={containerRef}
                        className={`MiddleSection Channelsection relative w-full min-h-[55px] h-auto mt-[-4px] overflow-hidden flex ${widthParent < 595 ? "break-words flex-wrap" : ""}`}>
                        {/* 1 */}
                        <div className='Leftside relative w-[calc(50%-6px)] mt-[12px] mr-[12px] flex flex-1  items-center'>
                            
                            {/* 1 */}
                            <div className='flex'>
                                {/* 1 */}
                                <div className='Channelname relative'>
                                    <div className='Pictureprofile relative w-[52px] h-[43px]'>
                                        <img src="" alt="" className='relative w-[40px] h-[40px] bg-gray-200 rounded-full'/>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="Uploadinfo relative flex flex-col items-start justify-center mr-[24px] max-w-full">
                                    <div className="Channelname relative leading-[22px] text-ellipsis truncate">鯊米挖歌ùwú</div>
                                    <div className="Channelname relative leading-[18px] mr-[4px] text-[#606060] text-[12px] text-ellipsis truncate">ผู้ติดตาม 5.52 พัน คน</div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="subscribe relative w-auto">
                                <button className='relative w-[full] h-[full] flex items-center justify-center 
                                                    px-[16px] bg-black rounded-full hover:bg-[#272727] active:bg-[#525252]
                                                    '>
                                    <div className='relative w-[42px] h-[36px] leading-[36px] 
                                                    text-ellipsis text-white text-[14px] 
                                                    flex items-center justify-center'>
                                        ติดตาม
                                    </div>
                                </button>
                            </div>  
                        </div>

                        <div className={`rightside min-h-[43px] h-auto flex flex-1 items-center mt-[12px]`}>
                            <div ref={rightsideRef}
                                className={`innerright w-full h-[36px] flex items-center ${heightParent > 55 && widthParent <= 596 ? "justify-start" : "justify-end" }`}>

                                <div className="toplevelbutton relative w-auto flex items-center justify-end ">
                                    <div className="like-dislike relative flex ">
                                        {/* <div className='h-[36px] '> */}
                                        <div className="like relaltive w-[98px] h-[36px] flex items-center justify-center cursor-pointer
                                                        px-[16px] hover:bg-[#e5e5e5] active:bg-[#cecece]
                                                        bg-[#f2f2f2] rounded-[36px_0_0_36px]">

                                            <div className='w-fit h-[24px] flex items-center justify-center'>
                                                
                                                <div className='relative flex items-center justify-center mt-[-18] mb-[-20] mx-[-19px]'>
                                                    <div className='relative w-[62px] h-[62px] flex items-center justify-center'>
                                                        <img src="/Icon/LikeIcon.png" alt="" className='w-[18px] h-[18px] ml-[-6px] mr-[6px]'/>
                                                    </div>
                                                </div>

                                                <div className='relative w-auto h-[36px] flex items-center justify-center'>
                                                    <span className='relative leading-[36px] text-[12px] font-[600] text-[#0f0f0f]'>8.1 พัน</span>
                                                </div>

                                                <div className='absolute right-[52px] w-[1px] h-[24px] bg-[#d9d9d9]'></div>
                                                
                                            </div>  
                                            
                                        </div>
                                        
                                        {/* </div> */}
                                        
                                        <div className="dislike w-[52px] h-[36px] flex items-center justify-center cursor-pointer
                                                        px-[16px] hover:bg-[#e5e5e5] active:bg-[#cecece]
                                                     bg-[#f2f2f2] rounded-[0_36px_36px_0]">
                                            <img src="/Icon/DisLikeIcon.png" alt="" className='w-[18px] h-[18px]'/>
                                        </div>
                                    </div>
                                    
                                    <ButtonChannel 
                                        width={"w-auto"}
                                        button = {<TbShare3 className='w-[18px] h-[18px] ml-[-6px] mr-[6px]'/>}
                                        text="แชร์"
                                    />
                                    {/* <div className={`${widthChildren > 400 ? "" : "hidden"}`}> */}
                                    <div className={`${widthChildren > 372 ? "" : "hidden" }`}>
                                        <ButtonChannel 
                                            width={"w-[83px]"}
                                            button = {<BiCut className='w-[18px] h-[18px] ml-[-6px] mr-[6px]'/>}    
                                            text="คลิป"
                                        />
                                    </div>
                                    {/* <div className={`${widthChildren > 490 ? "" : "hidden"}`}> */}
                                    <div className={`${widthParent > 475 && widthChildren > 472 ? "" : "hidden" }`}>
                                        <ButtonChannel 
                                            width={"w-auto"}
                                            button = {<TbPlaylistAdd className='w-[18px] h-[18px] ml-[-6px] mr-[6px]'/>}
                                            text="บันทึก"
                                        />
                                    </div>

                                    {/* <div className='flex flex-col items-start'> */}
                                    
                                    <div onClick={toggleDropdown} ref={dropdownParentRef}
                                        className={`share relaltive w-[36px] h-[36px] ml-[8px] flex items-center justify-center cursor-pointer
                                                    px-[16px] hover:bg-[#e5e5e5] active:bg-[#cecece]
                                                    bg-[#f2f2f2] rounded-[36px_36px_36px_36px]`}>
                                        <div className='w-full h-[24px] flex items-center justify-center'>
                                            <div className='relative flex items-center justify-center mt-[-18] mb-[-20] mx-[-19px]'>
                                                <div className={`relative flex items-center justify-center`}>
                                                    <RiMoreFill className='w-[18px] h-[18px] '/>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>

                                    
                                    {/* <div ref={dropdownRef}
                                        className={`${isOpen ? "dropdown fixed w-[227px] h-auto z-[2202] rounded-[10px] bg-[#fff] divide-y list-none shadow" : "hidden"}`}>
                                        <div className='w-full flex flex-col items-center'>
                                            <div className={`py-[8px] w-full flex flex-col`}>
                                                    <ListItems 
                                                        icon={TbPlaylistAdd}
                                                        text={"บันทึก"}
                                                    />
                                                    <ListItems 
                                                        icon={BiCut}
                                                        text={"คลิป"}
                                                    />
                                                    <ListItems 
                                                        icon={TbShare3}
                                                        text={"แชร์"}
                                                    />
                                            </div>
                                        </div>
                                    </div> */}

                                    
                                </div>

                            </div>
                        </div>

                    </div>
                <DropdownList newref={dropdownRef} isopen={isOpen} width={widthChildren} height={heightParent}/>
                <Description />
                </div> 
            </div>
        </>
    )
}

export default DetailSection





export const ButtonChannel = (props) => {
    return (
        <div className={`${props.width} share relaltive h-[36px] ml-[8px] flex items-center justify-center cursor-pointer
                            px-[16px] hover:bg-[#e5e5e5] active:bg-[#cecece]
                            bg-[#f2f2f2] rounded-[36px_36px_36px_36px]`}>
            <div className='w-full h-[24px] flex items-center justify-center'>
                <div className='relative flex items-center justify-center mt-[-18] mb-[-20] mx-[-19px]'>
                    <div className={`relative w-[62px] h-[62px] flex items-center justify-center`}>
                        {props.button}
                        {/* <TbShare3 className='w-[18px] h-[18px] ml-[-6px] mr-[6px]'/> */}
                    </div>
                </div>
                <div className='relative w-auto h-[36px] flex items-center justify-center'>
                    <span className='relative leading-[36px] text-[14px]  text-[#0f0f0f]'>
                        {props.text}
                    </span>
                </div>
            </div>  
        </div>
    )
}

export const DropdownList = (props) => {
  return (
    <div ref={props.newref}
        className={`dropdown ${props.isopen ? "absolute w-[227px] h-auto z-[2202] " + (props.height > 55 ? props.width < 476 ? "left-[145px]" : "left-[245px]" 
                                                                                                         : "right-0")                                     
                                            : "hidden"} rounded-[10px] bg-[#fff] divide-y list-none shadow`}>

        {/* className={`${props.isopen ? "dropdown absolute w-[227px] h-auto z-[2202] right-0 rounded-[10px] bg-[#fff] divide-y list-none shadow" : "hidden"}`}> */}
        {/* className={`${isOpen ? "dropdown fixed w-[227px] h-auto z-[2202] rounded-[10px] bg-[#fff] " : "hidden"}`}> */}
        <div className='w-full flex flex-col items-center'>
            <div className={`py-[8px] w-full flex flex-col`}>
                    {props.width < 372 ?
                    <ListItems 
                        icon={BiCut}
                        text={"คลิป"}
                    />: "" }
                    {props.width < 475 ?
                    <ListItems 
                        icon={TbPlaylistAdd}
                        text={"บันทึก"}
                    />: ""}
                    <ListItems 
                        icon={TbFlag}
                        text={"รายงาน"}
                    />
                    <ListItems 
                        icon={MdOutlineSubtitles}
                        text={"แสดงข้อความถอดเสียง"}
                    />
            </div>
        </div>
    </div>
  )
}




export const ListItems = (props) => {
  return (
    <div className='listitem w-full h-[36px] pl-[16px] pr-[12px] flex items-center cursor-pointer
                    bg-[#fff] hover:bg-[#e5e5e5] active:bg-[#cecece]'>
        <div className={`relative flex items-center justify-center mr-[16px] leading-[24px]`}>
            <props.icon className='w-[24px] h-[24px] '/>
            {/* <TbPlaylistAdd className='w-[24px] h-[24px] leading-[24px]'/> */}
        </div>
        <span className='relative leading-[20px] text-[14px] text-[#0f0f0f] mr-[24px] flex items-center justify-center'>
            {props.text}
        </span>
    </div>
  )
}


