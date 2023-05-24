import React, { useState, useMemo, useEffect, useRef } from 'react'
import { FaRegSmile } from 'react-icons/fa';
import {BsTriangleHalf} from 'react-icons/bs'
import {MdLocalAtm, MdOutlineLocalAtm} from 'react-icons/md'
import { uuid } from 'uuidv4'
import {BsChevronDown} from 'react-icons/bs'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {RxDotsHorizontal} from 'react-icons/rx'
import {AiOutlineEllipsis} from 'react-icons/ai'
import {RiMoreFill} from 'react-icons/ri'
import {RiMoreLine} from 'react-icons/ri'
import {MdOutlineMoreHoriz} from 'react-icons/md'
import {CgMoreAlt} from 'react-icons/cg'
import  create  from 'zustand'
import { data, message } from '../datas/data'
import { useStore, useMessagesStore } from '../datas/store'

import { v4 as uuidv4 } from 'uuid'


const today = new Date()
const time = today.getHours() + ":" + today.getMinutes() // + ":" + today.getSeconds()
const date_time = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + " " + time

function Chatbox() {

    const MAX_LENGTH = 200
    const { handleIsHide, isHide, isLive, setIsLive, currentUser } = useStore()
    const { messages, addMessage } = useMessagesStore()

    const [height, setHeight] = useState(window.innerHeight)
    const [limitMessage, setLimitMessage] = useState("")
    const limitMessageChange = (event) => {
        if (event.target.value.length <= MAX_LENGTH) {
          setLimitMessage(event.target.value)
          event.target.style.height = 'auto'
          event.target.style.height = `${event.target.scrollHeight}px`
          const heightInPx = parseInt(event.target.style.height, 10)
          setHeight(heightInPx)
        //   console.log("height : " + heightInPx)
        }
      }

    const messageInputRef = useRef<HTMLTextAreaElement>(null);
    const updateMessage = () => {
        const messageInput = messageInputRef.current;
        if (messageInput && messageInput.value.length > 0) {
            const newMessage = {
                id: currentUser.id,
                time: time,
                level: currentUser.level,
                name: currentUser.name,
                icon: currentUser.icon,
                profile: currentUser.profile,
                message: messageInput.value
            }
            addMessage(newMessage)
            // setAllMessage(prevMessages => [...prevMessages, newMessage])
            // setAllMessage(useStore(state => state.allMessage))
            messageInput.value = ""
            setLimitMessage("")
      }
    }


    return (
        <aside >
            
            {isLive ? 
            //Not Live streaming
            <div className={isHide ? 'allcontainer relative xl:w-[400px] sm:w-[100%] h-[36px] rounded-[30px]'
                                    : `allcontainer relative
                                        top-0 left-0 
                                        xl:w-[400px] 
                                        sm:w-[100%] 
                                        xs:w-[100%]
                                        sm:h-[100%]
                                        xs:h-[100%]
                                        border-[1px] rounded-[10px] 
                                        lg:mb-[75%]
                                        `}>
                
                <div className={isHide ? 'headmessage hidden'
                                        : `headmessage relative
                                            w-[100%] h-[48px] border-b-[1px] 
                                            border-[#e5e5e5] bg-[#fff] rounded-t-[10px] p-[8px] 
                                            flex items-center`}>

                    <div className='relative ml-[16px] w-[100%] flex flex-row items-center'>
                        
                        <div className='flex flex-row relative cursor-pointer font-[500]'>
                            {isHide ? 'Top Chat' : 'Chat Replay'}  
                            <div className='h-[24px] w-[24px] flex items-center justify-center '>
                                <BsChevronDown />
                            </div>
                        </div>
                        
                        <div id="headtripledot" 
                             className='absolute right-0
                                        w-[40px] h-[40px] 
                                        flex items-center justify-center 
                                        min-w-[32px] min-h-[32px] rounded-[50%] cursor-pointer
                                        hover:text-[#606060]
                                        text-[#909090]
                                        active:border-[2px] 
                                        active:border-solid
                                        active:border-[#d2d2d2]
                                        active:bg-[#E5E5E5] 
                                        z-20
                                        '>
                            <RiMoreFill className='w-[24px] h-[24px] rotate-90 scale-[0.85]'/>
                        </div>

                    </div>
                </div>

                <div className={isHide ? 'hidden' 
                                         : `messagesection overflow-x-hidden overflow-y-hidden appearance-none relative
                                            w-[100%] 
                                            4xl:h-[calc(634px)] 
                                            1xl:h-[calc(634px)] 
                                            lg:h-[calc(506px)] 
                                            sm:h-[calc(506px)]
                                            xs:h-[calc(506px)]
                                            bg-[#f9f9f9]
                                            flex flex-col justify-end
                                            `}>
                        <div className='allmessage h-auto overflow-y-auto relative'>
                            {messages.map(item => 
                            <Message 
                                key = {`${Date.now()}-${uuidv4()}`}
                                time = {item.time}
                                level = {item.level}
                                name = {item.name}
                                icon = {item.icon}
                                profile = {item.profile}
                                message = {item.message}
                            />)}
                        </div>
                
                </div>    

                <div className={isHide ? ''
                                        : `relative w-[100%] h-[36px] rounded-b-[10px] 
                                            flex items-center justify-center border-t-[1px] bg-[#ffffff] bottom-0`}>
                    <button className='innerfooter absolute w-[100%] h-[36px] 
                                        rounded-[30px] flex items-center justify-center 
                                        font-[500] bg-white hover:bg-[#F2F2F2] 
                                        active:bg-[#E5E5E5] focus:outline-none focus:ring-[#F2F2F2] z-50'
                            onClick={handleIsHide}>
                            {isHide ? 'Show chat' : 'Hide chat'}
                    </button>
                </div>
            </div>
            :
            //Live streaming
            <div className={isHide ? 'allcontainer relative xl:w-[400px] sm:w-[100%] h-[36px] rounded-[30px] '
                                    : `allcontainer relative 
                                        top-0 left-0 
                                        xl:w-[400px] 
                                        sm:w-[100%] 
                                        xs:w-[100%]

                                        sm:h-[100%]
                                        xs:h-[100%]

                                        lg:mb-[75%]
                                        border-[1px] rounded-[10px] border-[#e2e2e2] box-border
                                        overflow-hidden
                                        `}>
                
                <div className={isHide ? 'headmessage hidden'
                                        : `headmessage relative
                                            w-[100%] h-[48px] border-b-[1px] 
                                            border-[#e5e5e5] bg-[#fff] rounded-t-[10px] p-[8px] 
                                            flex items-center`}>

                    <div className='relative ml-[16px] w-[100%] flex flex-row items-center'>
                        
                        <div className='flex flex-row relative cursor-pointer font-[500]'>
                            {isHide ? 'Top Chat' : 'Chat Replay'}  
                            <div className='h-[24px] w-[24px] flex items-center justify-center '>
                                <BsChevronDown />
                            </div>
                        </div>
                        
                        <div id="headtripledot" 
                             className='absolute right-0
                                        w-[40px] h-[40px] 
                                        flex items-center justify-center 
                                        min-w-[32px] min-h-[32px] rounded-[50%] cursor-pointer
                                        hover:text-[#606060]
                                        text-[#909090]
                                        active:border-[2px] 
                                        active:border-solid
                                        active:border-[#d2d2d2]
                                        active:bg-[#E5E5E5] 
                                        z-20
                                        '>
                            <RiMoreFill className='w-[24px] h-[24px] rotate-90 scale-[0.85]'/>
                        </div>

                    </div>
                </div>

                <div className={isHide ? 'hidden' 
                                         : `messagesection overflow-x-hidden overflow-y-hidden appearance-none relative
                                            w-[100%] 
                                            4xl:h-[calc(634px)] 
                                            1xl:h-[calc(634px)] 
                                            lg:h-[calc(506px)] 
                                            sm:h-[calc(506px)]
                                            xs:h-[calc(506px)]
                                            
                                            bg-[#f9f9f9]
                                            flex flex-col justify-end
                                            `}>
                        <div className='allmessage h-auto overflow-y-auto relative'>
                            {messages.map(item => 
                            <Message 
                                key = {`${Date.now()}-${uuidv4()}`}
                                time = {item.time}
                                level = {item.level}
                                name = {item.name}
                                icon = {item.icon}
                                profile = {item.profile}
                                message = {item.message}
                            />)}
                        </div>
                

                    <div className={isHide ? 'hidden'
                                            : 'livemessage relative w-[100%] min-h-[112px] max-h-[193px] p-[16px] bg-[#fff] overflow-hidden'}>
                        <div className='w-[100%] h-[100%] '>
                            {/* Part top */}                        
                            <div className='w-[calc(100%-16px)] min-h-[43px] max-h-auto mx-[8px] '>
                                <div className='latestmessage relative w-[100%] h-[100%] overflow-hidden flex items-start '>

                                    {/* profile pic */}
                                    <div className='w-fit'>
                                        <img src={currentUser.profile} alt="" 
                                        className='profile w-[24px] h-[24px] rounded-[50%] object-cover z-[60]' />
                                    </div>         

                                    {/* input */}
                                    <div className='relative justify-start text-[13px] w-[calc(100%-40px)] min-h-[43px] left-[16px] flex flex-col gap-[3px]'>
                                        <p className='name font-semibold text-gray-500 h-[16px] inline'>{currentUser.name}</p>
                                        <textarea rows={1} name="message" placeholder={`แชทแบบสาธารณะในชื่อ ${currentUser.name}...`}
                                            ref={messageInputRef}
                                            maxLength={MAX_LENGTH}
                                            onChange={limitMessageChange}
                                            className={`messageInput relative
                                                    text-[#030303] font-normal
                                                    w-[100%] 
                                                    min-h-[22px]
                                                    max-h-[104px]
                                                    py-[2px] resize-none
                                                    whitespace-normal 
                                                    break-words break-all
                                                    overflow-x-hidden outline-none 
                                                    ${height > 94 ? "overflow-y-auto" : "overflow-y-hidden "}
                                                    leading-[18px] box-border
                                                    bg-transparent border-b 
                                                    focus:outline-none 
                                                    before:content-[""] before:absolute before:border-b-[2px_solid_rgb(39,147,230)]
                                                    before:animate-borderbottom
                                                    `}/>
                                                    {/* focus:border-b-[2px] focus:border-b-[rgb(39,147,230)]  */}
                                    </div>
                                </div>
                            </div>

                            {/* Part bottom */}
                            <div className=' relative w-[100%] min-h-[40px] mt-[4px] mb-[-8px]'>
                                <div className='messagebox relative w-[auto] h-[100%] text-ellipsis overflow-hidden flex items-center bg-transparent'>
                                    <div className='w-[40px] h-[40px] p-[8px] text-[rgb(3,3,3)] flex items-center justify-center '>
                                        <FaRegSmile className='w-[24px] h-[24px] hover:cursor-pointer' />
                                    </div>
                                    <div className='w-[40px] h-[40px] p-[8px] text-[rgb(3,3,3)] flex items-center justify-center'>
                                        <MdLocalAtm className='w-[24px] h-[24px] hover:cursor-pointer '/>
                                    </div>

                                    <div className='absolute min-w-[82.55px] max-w-[97.15px] h-[40px] right-0 flex flex-row items-center justify-end'>
                                        <p className='Limitmessage relative mr-[8px] text-[13px] '>
                                            {limitMessage.length}/200
                                        </p>
                                        <button type="submit" name="submitmessage"
                                            className='messageButton text-[#030303] font-normal bg-transparent focus:outline-none relative 
                                                       w-[40px] h-[40px] p-[8px] flex items-center justify-center'

                                            onClick={updateMessage}>
                                            {/* <span className='text-[16px]'>➢</span> */}
                                            <BsTriangleHalf className='rotate-90'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                 
                <div className={isHide ? ''
                                        : `relative w-[100%] h-[44px] rounded-b-[10px] 
                                            flex items-center justify-center border-t-[1px] bg-[#ffffff] bottom-0`}>
                    <button className={`'innerfooter absolute w-[100%] h-[36px] 
                                        rounded-[30px] flex items-center justify-center 
                                        font-[500] bg-white hover:bg-[#F2F2F2] 
                                        
                                        active:bg-[#E5E5E5] focus:outline-none focus:ring-[#F2F2F2] z-50'
                                        ${isHide ? 'border-[1px]': ''}
                                        `}
                            onClick={handleIsHide}>
                            {isHide ? 'Show chat' : 'Hide chat'}
                    </button>
                </div>
            </div>

            }
        </aside>
    )
}

export default Chatbox

function Message(props : any) {
    return (
        <>
            {props.level < 1 ?
                // VIP level 0
                <div className='messagebox relative py-[4px] px-[24px] w-[100%] min-h-[32px] max-h-[auto] 
                                flex flex-row items-start overflow-hidden'> 
                    <img src={props.profile} alt="" className='profile w-[24px] h-[24px] rounded-[50%] object-cover'/>
                    <div className='container-container min-h-[24px] w-[calc(100%-39px)] relative overflow-hidden left-[15px] '>
                            <div className='containermessage relative w-fit min-h-[16.9px] max-h-[128px] self-center items-center'>
                                <span className='time relative w-[40px] mr-[8px] font-semibold text-[#a9a9a9] text-[11px] '>{props.time}</span>
                                <span className='name relative font-semibold text-[#107516] text-[13px] box-border rounded-[2px] '>{props.name}</span>
                                <span className='icon relative w-[16px] h-[16px] mr-[5px] text-[13px] aspect-[1/1] '>{props.icon}</span>
                                <span className='message relative text-[#030303] text-[13px] leading-[16px]
                                                break-words break-all overflow-hidden
                                                whitespace-pre-wrap'>{props.message}
                                </span>
                            </div>
                    </div>
                    <div className='absolute right-0 top-0 p-[4px] inline-block
                                    opacity-0 hover:opacity-[1] hover:cursor-pointer
                                    min-w-[32px] min-h-[32px] 
                                    '>
                        <RiMoreFill className='w-[24px] h-[24px] text-[#909090] text-sm rotate-90 scale-[0.85]'/>
                    </div>
                </div>
                :
                // VIP level 1
                <div className='messagebox relative py-[4px] px-[24px] w-[100%] min-h-[32px] max-h-[auto] 
                                flex flex-row items-start overflow-hidden'>
                    <img src={props.profile} alt="" className='profile w-[24px] h-[24px] rounded-[50%] object-cover'/>
                    <div className='min-h-[24px] w-[calc(100%-39px)] relative overflow-hidden left-[15px] '>
                            <div className='containermessage relative w-fit min-h-[16.9px] max-h-[128px] self-center '>
                                <span className='time relative w-[40px] mr-[8px] font-semibold text-[#a9a9a9] text-[11px] '>{props.time}</span>
                                <span className='name relative font-semibold text-[#107516] text-[13px] box-border rounded-[2px] '>{props.name}</span>
                                <span className='icon relative w-[16px] h-[16px] mr-[5px] text-[13px] aspect-[1/1] '>{props.icon}</span>
                                <span className='message relative text-[#030303] text-[13px] leading-[16px]
                                                break-words break-all overflow-hidden
                                                whitespace-pre-wrap'>{props.message}
                                </span>
                            </div>
                    </div>
                    <div className='absolute right-0 top-0 p-[4px] inline-block
                                    opacity-0 hover:opacity-[1] hover:cursor-pointer
                                    min-w-[32px] min-h-[32px] 
                                    '>
                        <RiMoreFill className='w-[24px] h-[24px] text-[#909090] text-sm rotate-90 scale-[0.85]'/>
                    </div>
                </div>

                // <div className='messagebox py-[4px] px-[24px] w-[100%]'>
                //     <div className='messagebox w-[90%] min-h-[56px] text-ellipsis overflow-hidden  bg-yellow-100 flex items-start'>
                //         <img src={props.profile} alt="" 
                //             className='profile w-[24px] h-[24px] rounded-[50%] z-10 m-[2%] object-cover' />
                //         <p className='name m-[1%] font-semibold text-gray-400 text-sm whitespace-pre-wrap'>{props.name}
                //             <span className='message m-[10px] text-[#030303] font-normal whitespace-pre-wrap'>{props.message} </span>
                //         </p>
                //     </div>
                // </div>
            }
        </>
    );
}

