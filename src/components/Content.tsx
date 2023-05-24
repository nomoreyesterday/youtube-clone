import React, { useEffect, useRef, useState } from 'react'
import {RiMoreFill} from 'react-icons/ri'
import {BiLike} from 'react-icons/bi'
import {BiDislike} from 'react-icons/bi'
import {CgSmileMouthOpen} from 'react-icons/cg'
import {IoMdArrowDropup} from 'react-icons/io'
import {IoMdArrowDropdown} from 'react-icons/io'

import {CancelButton, ReplyButton} from './Commentsection'

import {  useMessagesStore, currentComment, useStore, Commentsection} from '../datas/store'
// import {time, startTimer, formattedTime, updateTime} from '../datas/time'
// import { useTimeStore } from '../datas/store'
// import { useTimeStore, formatTime } from '../datas/time'
// import {time, formattedTime} from '../datas/time'
import { v4 as uuidv4 } from 'uuid'




export default function Content() {   
    const { comments, updateTime, childrens, updateIsReply, addComment, addReplyChildren, addTestChild  } = useMessagesStore()
    useEffect(() => {
        comments.forEach((comment) => {
            const interval = setInterval(() => {
                updateTime(comment.id)
            }, 60000 )
            // console.log(comments)
            return () => {clearInterval(interval)}
    })}, [comments, updateTime])
       

    const [isreply, setIsreply] = useState(false)
    const [replyIndex, setReplyIndex] = useState({ parentIndex: -1, childIndex: -1 })

    // Parent
    const checkReply = (parentId) => {
        const index = comments.findIndex((comment) => comment.id === parentId)
        if(index !== -1) { 
            updateIsReply(parentId, true)
        }
    }
    const checkCancel = (parentId) => {
        const index = comments.findIndex((comment) => comment.id === parentId)
        if(index !== -1) { 
            updateIsReply(parentId, false)
        }
    }

    const [isFocus, setisFocus] = useState(false)
    const [text, setText] = useState(0)
	const commentInputRef = useRef<HTMLTextAreaElement>(null)
	const commentInput = commentInputRef.current
    const checkComment = () => {
        if (commentInput && commentInput.value.length > 0) {
			setText(commentInput.value.length)
      	}
		if (commentInput && commentInput.value.length == 0) {
			setText(0)
		}
    }
	const checkFocus = () => {
		setisFocus(true)
    }
    
    const reply = (parentId) => {
        const index = comments.findIndex((comment) => comment.id === parentId)
        if(index !== -1) { 
            const messageInput = commentInputRef.current
            if (messageInput && messageInput.value.length > 0) {
            const newMessage: Commentsection = {
                id: currentComment.id,
                time: currentComment.time,
				timeStamp: currentComment.timeStamp,
                path: currentComment.path,
                name: currentComment.name,
                profile: currentComment.profile,
				isreply: currentComment.isreply,
                comment: messageInput.value,
				children: [
                    {
                        id: uuidv4(),
                        time: currentComment.time,
                        timeStamp: Date.now(),
                        path: currentComment.path,
                        name: currentComment.name,
                        profile: currentComment.profile,
                        comment: messageInput.value,
                        isreply: currentComment.isreply,
                        children: []
                    },
                ]
            }
            // addTestChild()
            addReplyChildren(newMessage)
            // addReplyChildren(newMessage[index].children)
            console.log("newMessage.id : " + newMessage.id)
            console.log("messageInput.value.length : " + messageInput.value.length)
            messageInput.value = ""
            // console.log("comment.id : " + comments.id)
            }
            updateIsReply(parentId, false)
            console.log("index : " + index)
            console.log("parentId : " + parentId)
            // console.log(newMessage[index].children)
            console.log(JSON.stringify(comments, null, 2));
            console.log(JSON.stringify(comments[index].children, null, 2));
        }
    }

    const [isseemore, setIsseemore] = useState(false)
    const checkSeemore = () => {
        setIsseemore(!isseemore)
    }
    // -------------------------------------------------
    // const [isFocus, setisFocus] = useState(false)
    // const [text, setText] = useState(0)

    // const commentInput = commentInputRef.current
    // const cancelComment = (commentId) => {
    //     if (commentInput) {
    //         commentInput.value = ""
    //         setText(0)
    //         setisFocus(false)
    //         updateIsReply(commentId, false)
    //     }
    //     // const index = comments.findIndex((comment) => comment.id === commentId)
    //     // // ถ้าหาค่าไม่เจอจะ findindex จะ return -1
    //     // if (index !== -1) { //ถ้าหาเจอ
    //     //     updateIsReply(commentId, false)
    //     // }
    // }

    return (
        <>
            {/* <Commented />  */}
            {/* <ParentContent /> 
             */}
             {comments.map((parent) => (
                <div className='mb-[16px]' key={parent.id}>
                    <ParentContent
                        id={parent.id}
                        time={parent.time}
                        timeStamp={Date.now()}
                        path={parent.path}
                        name={parent.name}
                        profile={parent.profile}
                        comment={parent.comment}
                        parentIsreply={parent.isreply}
                        parentreply={() => checkReply(parent.id)}
                        parentcancel={() => checkCancel(parent.id)}
                        reply={() => reply(parent.id)}

                        //reply
                        commentInputRef={commentInputRef}
                        checkComment={checkComment}
                        checkFocus={checkFocus}
                        text={text}
                    />
                    {parent.children &&
                    parent.children.map((child) => (
                        <ChildrenContent
                            key={child.id}
                            id={child.id}
                            time={child.time}
                            timeStamp={Date.now()}  
                            path={child.path}
                            name={child.name}
                            profile={child.profile}
                            comment={child.comment}
                            countcomment={parent.children ? parent.children.length : 0}
                            checkSeemore={checkSeemore}
                            isseemore={isseemore}
                            parentreply={() => checkReply(child.id)}
                            parentcancel={() => checkCancel(child.id)}
                            reply={() => reply(parent.id)}
                        />
                    ))}
                   
                </div>
            ))}
        </>
    )
}

// export const Commented = (props) => {
//     const { comments, updateTime, childrens, updateIsReply, addComment  } = useMessagesStore()
//     useEffect(() => {
//         comments.forEach((comment) => {
//             const interval = setInterval(() => {
//                 updateTime(comment.id)
//             }, 60000 )
//             console.log(comments)
//             return () => {clearInterval(interval)}
//     })}, [comments, updateTime])
       
//     const [isseemore, setIsseemore] = useState(false)
//     const [isreply, setIsreply] = useState(false)
//     const [replyIndex, setReplyIndex] = useState({ parentIndex: -1, childIndex: -1 })

//     const checkReply = (parentId) => {
//         const index = comments.findIndex((comment) => comment.id === parentId)
//         console.log(index)
//         // const updatedComments = [...comments]
//         // updatedComments[index].isreply = true
//         // console.log(updatedComments)
//         if(index !== -1) {
//             updateIsReply(parentId, true)
//         }
            
//     }

//     //   function checkReply(parentId, childId) {
//     //     setComments((prevComments) =>
//     //       prevComments.map((comment) =>
//     //         comment.id === parentId
//     //           ? { ...comment, isreply: childId ? false : !comment.isreply }
//     //           : { ...comment, children: comment.children?.map((child) => (child.id === childId ? { ...child, isreply: !child.isreply } : child)) }
//     //       )
//     //     );
//     //   }

//     const checkSeemore = () => {
//         setIsseemore(!isseemore)
//     }
//     // -------------------------------------------------
//     const [isFocus, setisFocus] = useState(false)
//     const [text, setText] = useState(0)

// 	const commentInputRef = useRef<HTMLTextAreaElement>(null)
// 	const commentInput = commentInputRef.current
//     const cancelComment = (commentId) => {
//         if (commentInput) {
//             commentInput.value = ""
//             setText(0)
//             setisFocus(false)
//             updateIsReply(commentId, false)
//         }
//         // const index = comments.findIndex((comment) => comment.id === commentId)
//         // // ถ้าหาค่าไม่เจอจะ findindex จะ return -1
//         // if (index !== -1) { //ถ้าหาเจอ
//         //     updateIsReply(commentId, false)
//         // }
//     }
//     return (
//         <>
//             {comments.map((parent) => (
//                 <div className='mb-[16px]' key={parent.id}>
//                     <ParentContent
//                         key={parent.id}
//                         id={parent.id}
//                         time={parent.time}
//                         timeStamp={Date.now()}
//                         path={parent.path}
//                         name={parent.name}
//                         profile={parent.profile}
//                         comment={parent.comment}
//                         parentreply={() => checkReply(parent.id)}
//                         // parentreply={() => checkReply(parent.id)}
//                     />
//                     {/* {parent.children &&
//                     parent.children.map((child) => ( */}
//                      {currentComment.children &&
//                     currentComment.children.map((child) => (
                        
//                         <ChildrenContent
//                             key={child.id}
//                             id={child.id}
//                             time={child.time}
//                             timeStamp={Date.now()}  
//                             path={child.path}
//                             name={child.name}
//                             profile={child.profile}
//                             comment={child.comment}
//                             countcomment={child.id}
//                             checkSeemore={checkSeemore}
//                             isseemore={isseemore}
//                             parentreply={parent.id}
//                             // parentreply={child.isreply ?? parent.isreply}
//                             // isreply={() => checkReply(parent.id, child.id)}
//                             childrencancel={cancelComment}
//                             childrenreply={child.isreply}
//                             // childrenreply={() => checkReply(parent.id, child.id)}
//                         />
//                     ))}
//                 </div>
//             ))}
//         </>
//     )    
// }




export const ParentContent = (props) => {
    const { handleIsHide, isHide, isLive, setIsLive, currentUser } = useStore()
    const [like, setLike] = useState(0)
    const [dislike, setDisLike] = useState(0)

    const handleLike = () => {
        if (like === 0 && dislike === 0) {setLike(1), setDisLike(0) }
        if (like === 0 && dislike === 1) {setLike(1), setDisLike(0)}   
        if (like === 1 && dislike === 0) {setLike(0), setDisLike(0) }
    }
    const handleDisLike = () => {
        if (like === 0 && dislike === 0) {setDisLike(1), setLike(0) }
        if (like === 0 && dislike === 1) {setDisLike(0), setLike(0) }   
        if (like === 1 && dislike === 0) {setDisLike(1), setLike(0) }      
    }

    // const [isFocus, setisFocus] = useState(false)
    // const [text, setText] = useState(0)

	// const commentInputRef = useRef<HTMLTextAreaElement>(null)
	// const commentInput = commentInputRef.current
    // const checkComment = () => {
    //     if (commentInput && commentInput.value.length > 0) {
	// 		setText(commentInput.value.length)
    //   	}
	// 	if (commentInput && commentInput.value.length == 0) {
	// 		setText(0)
	// 	}
    // }
	// const checkFocus = () => {
	// 	setisFocus(true)
    // }

    return (
        <>
            <div className='content w-full h-auto'>
                <div className='relative w-[calc(100%)] h-full flex items-start '>
                {/* <div className='relative w-[calc(100%+6px)] h-full flex items-start '> */}
                    {/* 1 */}
                    <div className='leftsectionprofile relative w-[56px] h-[100%] '>
                        <a href="#" className='relative w-[56px] h-[43px] '>
                            <div className='relative w-[40px] h-[40px] rounded-full flex items-center justify-center bg-gray-200'>
                                <img src={props.profile} alt="" 
                                    className='profile w-[40px] h-[40px]  rounded-full object-cover z-[60]'/>
                            </div>
                        </a>
                    </div>

                    {/* 2 */}
                    <div className='middlesection relative w-[calc(100%-96px)] h-[auto] flex flex-col text-[14px]'>
                        <div className='toprow relative w-full h-[20px] flex items-start justify-start mb-[2px]'>
                            <span className='relative font-semibold text-[12px] mr-[4px] mb-[2px] flex items-start'>
                                <a href={props.path} >{props.name}</a>
                            </span>
                            <span className='relative text-[12px] font-normal text-[#606060] hover:text-[#0f0f0f] cursor-pointer'>
                                {props.time}ที่ผ่านมา 
                                {/* {props.unit} */}
                            </span>
                            {/* <span className='relative'></span> */}
                        </div>
                        <div className='middlerow leading-[20px] break-words break-all text-[14px]'>
                            {props.comment}
                        </div>
                
                        <div className="bottomrow relative h-auto mt-[4px] flex">
                            <div onClick={handleLike}
                                className={`like w-[32px] h-[32px] ml-[-8px] flex items-center 
                                            justify-center rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] cursor-pointer`}>
                                {like > 0 ? <img src="/Icon/LikeIconBlack.png" alt="" className='w-[18px] h-[18px]'/> 
                                        : <img src="/Icon/LikeIcon.png" alt="" className='w-[18px] h-[18px]'/>}
                                {/* {like > 0 ? <BiLike size={20} color="red"/> : <BiLike size={20}/>} */}
                            </div>
                            { like > 0 && <span className='mr-[8px] flex items-center'>{like}</span>}

                            <div onClick={handleDisLike}
                                className={`dislike w-[32px] h-[32px] flex items-center justify-center
                                            rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] cursor-pointer`}>
                                {dislike > 0 ? <img src="/Icon/DisLikeIconBlack.png" alt="" className='w-[18px] h-[18px]'/> 
                                        : <img src="/Icon/DisLikeIcon.png" alt="" className='w-[18px] h-[18px]'/>}
                                {/* {dislike > 0 ? <BiDislike size={20}/> : <BiDislike size={20}/>} */}
                            </div>
                            { dislike > 0 && <span className='mr-[8px] flex items-center'>{dislike}</span>}

                            <div className='reply w-[72px] h-[32px] flex justify-end'>
                                <button onClick={props.parentreply}
                                        className={`Submit w-[68px] h-[32px] rounded-full cursor-pointer flex items-center justify-center text-[12px]
                                                        hover:bg-[#e5e5e5] active:bg-[#cecece] }`}>
                                    ตอบกลับ
                                </button>
                            </div>
                        </div>  
                        
                        {/* reply */}
                        {props.parentIsreply && 
                        <Reply 
                            commentInputRef={props.commentInputRef}
                            checkComment={props.checkComment}
                            checkFocus={props.checkFocus}
                            text={props.text}
                            profile={currentUser.profile} 
                            childrencancel={props.parentcancel} 
                            childrenreply={props.reply} 
                        />}

                    </div>

                    {/* 3 */}
                    <div className='rightsection relative h-[100%] flex items-start'>
                        <div className='w-[40px] h-[40px] flex items-center justify-center 
                                        min-w-[32px] min-h-[32px] rounded-[50%] cursor-pointer
                                        hover:text-[#030303]
                                        text-transparent
                                        active:border-[2px] 
                                        active:border-solid
                                        active:border-[#d2d2d2]
                                        active:bg-[#E5E5E5] 
                                        z-20'>
                            <RiMoreFill className='w-[24px] h-[24px] rotate-90 scale-[0.85]'/>
                        </div>
                    </div>
                </div>  
            </div>


        </>
    )
}


export const ChildrenContent = (props) => {
    const { handleIsHide, isHide, isLive, setIsLive, currentUser } = useStore()
    const [isFocus, setisFocus] = useState(false)
    const [text, setText] = useState(0)

	const commentInputRef = useRef<HTMLTextAreaElement>(null)
	const commentInput = commentInputRef.current
    const checkComment = () => {
        if (commentInput && commentInput.value.length > 0) {
			setText(commentInput.value.length)
      	}
		if (commentInput && commentInput.value.length == 0) {
			setText(0)
		}
    }
	const checkFocus = () => {
		setisFocus(true)
    }

    const [like, setLike] = useState(0)
    const [dislike, setDisLike] = useState(0)

    const handleLike = () => {
        if (like === 0 && dislike === 0) {setLike(1), setDisLike(0) }
        if (like === 0 && dislike === 1) {setLike(1), setDisLike(0)}   
        if (like === 1 && dislike === 0) {setLike(0), setDisLike(0) }
    }
    const handleDisLike = () => {
        if (like === 0 && dislike === 0) {setDisLike(1), setLike(0) }
        if (like === 0 && dislike === 1) {setDisLike(0), setLike(0) }   
        if (like === 1 && dislike === 0) {setDisLike(1), setLike(0) }      
    }

    // {parent.children &&
    //     parent.children.map((child) => (
    //         <ChildrenContent
    //             key={child.id}
    //             id={child.id}
    //             time={child.time}
    //             timeStamp={Date.now()}  
    //             path={child.path}
    //             name={child.name}
    //             profile={child.profile}
    //             comment={child.comment}
    //             countcomment={parent.children ? parent.children.length : 0}
    //             checkSeemore={checkSeemore}
    //             isseemore={isseemore}
    //             parentreply={() => checkReply(child.id)}
    //             parentcancel={() => checkCancel(child.id)}
    //             reply={() => reply(parent.id)}
    //         />
    //     ))}


  return (
        <>
            {/* children */}
            <div className={`content w-full h-auto flex items-start`}>
                <div className='subcontent w-full flex items-start '>
                    <div className={`childsection w-full h-[100%] ml-[56px] flex flex-col`}>
                        <div className='childcontainer reltaive  '>

                            {/* See more */}
                            {props.countcomment > 0  && (
                            <div className='seemore w-full h-[36px] '>
                                <div onClick={props.checkSeemore}
                                    className='buttonseemore w-fit px-[16px] ml-[-10px] rounded-full 
                                                text-[#065fd4] hover:bg-[#def1ff] active:bg-[#c7d8e5]'>
                                    <button className='more h-[36px] w-fit text-[14px] leading-[36px] flex items-center '>
                                        <div className='relative w-[24px] h-[24px] ml-[-6px] mr-[6px] flex items-center justify-center'>
                                            { props.isseemore ?  <IoMdArrowDropdown size={20}/> : <IoMdArrowDropup size={20}/> }
                                        </div>
                                        <div className='w-fit'>การตอบกลับ {props.countcomment} รายการ</div>
                                    </button>
                                </div>
                            </div>)}

                            {/* Comment */}
                            <div className={`contentcontainer w-full h-auto`}>
                            {/* <div className={`${props.isseemore ? "" : "hidden"} contentcontainer w-full h-auto`}> */}
                                <div className='relative w-[100%] h-full flex items-start '>
                                {/* <div className='relative w-[calc(100%+6px)] h-full flex items-start '> */}
                                    {/* 1 left */}
                                    <div className='leftsectionprofile relative w-[40px] h-[100%] flex'>
                                        <a href="#" className='relative w-[40px] h-[29.5px] '>
                                            <div className='relative w-[24px] h-[24px] mr-[16px] rounded-full flex items-center justify-center bg-gray-200'>
                                                <img src={props.profile} alt="" 
                                                    className='profile w-[24px] h-[24px] rounded-full object-cover z-[60]'/>
                                            </div>
                                        </a>
                                    </div>

                                    {/* 2 mid */}
                                    <div className='middlesection relative w-[calc(100%)] h-[auto] flex flex-col text-[14px]'>
                                        <div className='toprow relative w-full h-[20px] flex items-start justify-start mb-[2px]'>
                                            <span className='relative font-semibold text-[12px] mr-[4px] mb-[2px] flex items-start'>
                                                <a href={props.path}>{props.name}</a>
                                            </span>
                                            <span className='relative text-[12px] font-normal text-[#606060] hover:text-[#0f0f0f] cursor-pointer'>
                                                {props.time}ที่ผ่านมา 
                                                {/* {props.unit} */}
                                            </span>
                                            {/* <span className='relative'></span> */}
                                        </div>
                                        <div className='middlerow leading-[20px] break-words break-all text-[14px]'>
                                            {props.comment}
                                        </div>
                                
                                        <div className="bottomrow relative h-auto mt-[4px] flex">
                                            <div onClick={handleLike}
                                                className={`like w-[32px] h-[32px] ml-[-8px] flex items-center 
                                                            justify-center rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] cursor-pointer`}>
                                                {like > 0 ? <img src="/Icon/LikeIconBlack.png" alt="" className='w-[18px] h-[18px]'/> 
                                                          : <img src="/Icon/LikeIcon.png" alt="" className='w-[18px] h-[18px]'/>}
                                                {/* {like > 0 ? <BiLike size={20} color="red"/> : <BiLike size={20}/>} */}
                                            </div>
                                            { like > 0 && <span className='mr-[8px] flex items-center'>{like}</span>}

                                            <div onClick={handleDisLike}
                                                className={`dislike w-[32px] h-[32px] flex items-center justify-center
                                                            rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] cursor-pointer`}>
                                                {dislike > 0 ? <img src="/Icon/DisLikeIconBlack.png" alt="" className='w-[18px] h-[18px]'/> 
                                                         : <img src="/Icon/DisLikeIcon.png" alt="" className='w-[18px] h-[18px]'/>}
                                                {/* {dislike > 0 ? <BiDislike size={20}/> : <BiDislike size={20}/>} */}
                                            </div>
                                            { dislike > 0 && <span className='mr-[8px] flex items-center'>{dislike}</span>}

                                            <div className='reply w-[72px] h-[32px] flex justify-end'>
                                                <button onClick={props.parentreply}
                                                        className={`Submit w-[68px] h-[32px] rounded-full cursor-pointer flex items-center justify-center text-[12px]
                                                                        hover:bg-[#e5e5e5] active:bg-[#cecece] }`}>
                                                    ตอบกลับ
                                                </button>
                                            </div>
                                        </div>  

                                        {/* Reply */}
                                        {props.parentIsreply && 
                                        <Reply 
                                            commentInputRef={commentInputRef}
                                            checkComment={checkComment}
                                            checkFocus={checkFocus}
                                            text={text}
                                            profile={currentUser.profile} 
                                            childrencancel={props.parentcancel} 
                                            childrenreply={props.reply} 
                                        />}

                                    </div>

                                    {/* 3 right */}
                                    <div className='rightsection relative w-[40px] flex items-start self-stretch '>
                                        <div className='relative w-[40px] h-[40px] flex items-center justify-center 
                                                        min-w-[32px] min-h-[32px] rounded-[50%] cursor-pointer
                                                        hover:text-[#030303]
                                                        text-transparent
                                                        active:border-[2px] 
                                                        active:border-solid
                                                        active:border-[#d2d2d2]
                                                        active:bg-[#E5E5E5]     
                                                        z-20'>
                                            <RiMoreFill className='w-[24px] h-[24px] rotate-90 scale-[0.85]'/>
                                        </div>
                                    </div>
                                </div>  
                            </div>

                        </div>
                    </div>
                </div>
            </div>  
         </>
    )
}





export const Reply = (props) => {
    return (
        <>
            {/* <div className={`${props.isreply ? `relaitve w-full flex flex-row` : `hidden`} `}> */}
            <div className={`relative w-full flex flex-row ${true ? "" : "hidden"}`}>
            {/* <div className={`relative w-full flex flex-row ${props.parentreply ? "": "hidden"}`}> */}
                <div className='relative w-[40px]'>
                    <div className='leftsectionprofile w-[24px] h-[24px] rounded-full bg-gray-200 flex items-center justify-center'>
                        <img src={currentComment.profile} alt="" 
                            className='profile w-[24px] h-[24px]  rounded-full object-cover z-[60]'/>
                    </div>
                </div>

                <div className='rightsectioncontainercomment relative w-full h-auto'>
                    <div className='reltaive w-[calc(100%)] h-[31.5px] pb-[8px] '>
                        <div className='innercommenttop flex items-start h-[23.5px] border-b '>
                            
                            <textarea placeholder='เพิ่มการตอบกลับ...' 
                                        ref={props.commentInputRef}
                                        onChange={props.checkComment}
                                        // onClick={}
                                        onFocus={props.checkFocus}
                                        className='relative
                                                    text-[#030303] font-normal text-[14px] placeholder-[#606060]
                                                    w-[100%] h-[20px]
                                                    resize-none
                                                    whitespace-normal 
                                                    break-words break-all
                                                    overflow-x-hidden overflow-y-hidden
                                                    outline-none
                                                    bg-transparent 
                                                    focus:outline-none 
                                                    '/>
                        </div>
                    </div>
                    
                    {/* children Reply */}
                    <div className={`innercommentbottom reltaive w-[calc(100%)] h-[40px] flex items-center justify-between`}>
                        <div className='sticker w-[36px] h-[36px] ml-[-8px] flex items-center justify-center rounded-full bg-[#f2f2f2] hover:bg-[#e5e5e5] active:bg-[#cecece] cursor-pointer'>
                            <CgSmileMouthOpen size={24}/>
                        </div>
                        <div className={`buttonsection w-[170px] h-[36px] flex justify-between text-[14px]`}>
                            <CancelButton onclick={props.childrencancel} text={"ยกเลิก"} />
                            <ReplyButton onclick={props.childrenreply} checktext={props.text} text={"ตอบกลับ"} /> 
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}



