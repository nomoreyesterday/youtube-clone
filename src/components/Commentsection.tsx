import React, { useRef, useState } from 'react'
import { MdOutlineSort } from 'react-icons/md'
import { CgSmileMouthOpen } from 'react-icons/cg'

import { currentUser, currentComment } from '../datas/store'
import { useStore, useMessagesStore } from '../datas/store'


const Commentsection = () => {
    const [height, setHeight] = useState(window.innerHeight)
    const [isFocus, setisFocus] = useState(false)
	const { comments, addComment } = useMessagesStore()
    const [text, setText] = useState(0)
	const commentInputRef = useRef<HTMLTextAreaElement>(null);
	const commentInput = commentInputRef.current;
    const checkComment = () => {
        if (commentInput && commentInput.value.length > 0) {
			setText(commentInput.value.length)
      	}
		if (commentInput && commentInput.value.length == 0) {
			setText(0)
		}
    }

    const updateMessage = () => {
        const messageInput = commentInputRef.current
        if (messageInput && messageInput.value.length > 0) {
            const newMessage = {
                id: currentComment.id,
                time: currentComment.time,
				timeStamp: currentComment.timeStamp,
                path: currentComment.path,
                name: currentComment.name,
                profile: currentComment.profile,
				isreply: currentComment.isreply,
                comment: messageInput.value,
				children: currentComment.children
            }

            addComment(newMessage)
			
            // setComment(prevMessages => [...prevMessages, newMessage])
            // setAllMessage(useStore(state => state.allMessage))
            messageInput.value = ""
            // setLimitMessage("")
			// console.log(addComment)
      }
    }

	const cancelComment = () => {
		if (commentInput) {
			commentInput.value = "";
			setText(0)
			setisFocus(false)
		}
    }
	const checkFocus = () => {
		setisFocus(true)
    }

	return (
		
		<div className='Commentsheader w-full h-auto mt-[24px] mb-[32px] flex flex-col '>

			<div className='topcontainer relative w-full h-[23.5px] mb-[24px] flex items-center justify-start'>
				<div className='relative h-[22px] space-x-[4px] mr-[32px] flex items-center justify-between align-middle font-normal'>
					<span className='retalive'>ความคิดเห็น</span>
					<span className='retalive'>{comments.length}</span>
					<span className='retalive'>รายการ</span>
				</div>
				
				<button className='retalive w-[24px] h-[24px] mr-[8px] flex items-center justify-center'>
					<MdOutlineSort size={24} />
				</button>
				<button className='retalive text-[14px] font-normal leading-[22px]'>จัดเรียงตาม</button>
			</div>


			<div className='bottomcontainer reltaive mr-[16px] '>
				<div className='relaitve w-full flex flex-row '>
					
					{/* <div className='leftsectionprofile relative w-[56px] h-[100%] bg-blue-200'> */}
					<div className='leftsectionprofile w-[40px] h-[40px] flex items-center justify-center'>
						<img src={currentUser.profile} alt="" 
						className='profile w-[40px] h-[40px]  rounded-full object-cover z-[60]'/>
					</div>
					{/* </div> */}

					<div className='rightsectioncontainercomment relative left-[16px] w-full h-auto'>
						<div className='reltaive w-[calc(100%-16px)] h-[31.5px] pb-[8px] '>
							<div className='innercommenttop flex items-start h-[23.5px] border-b '>
								
								<textarea placeholder='เพิ่มความคิดเห็น...'  
											ref={commentInputRef}
											onChange={checkComment}
											// onClick={updateMessage}
											onFocus={checkFocus}
											className='relative
														text-[#0f0f0f] font-normal text-[14px] placeholder-[#606060]
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
						
						<div className={` ${isFocus ?  `innercommentbottom reltaive rigth-[16px] w-[calc(100%-16px)] h-[40px] flex items-center justify-between` : `hidden` } `}>
							<div className='sticker w-[40px] h-[40px] ml-[-8px] flex items-center justify-center rounded-full  hover:bg-[#e5e5e5] active:bg-[#cecece] cursor-pointer'>
								<CgSmileMouthOpen size={24}/>
							</div>
							<div className={`buttonsection w-[206px] h-[36px] flex justify-between text-[14px]`}>
								<CancelButton onclick={cancelComment} text={"ยกเลิก"} />
								<AddCommentButton onclick={updateMessage} checktext={text} text={"ส่งความคิดเห็น"} />
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>
		
	)
}


export default Commentsection

export const CancelButton = (props) => {
	const {onclick, text} = props
	return (
		<button onClick={onclick} 
				className='Cancel w-[70px] h-[36px] rounded-full hover:bg-[#e5e5e5] active:bg-[#cecece] flex items-center justify-center cursor-pointer'>
				{text}
		</button>
	)
}


export const AddCommentButton = (props) => {
	const {onclick, text, checktext} = props
	return (
		<button onClick={onclick}
				className={`Submit w-[120px] h-[36px] px-[16px] rounded-full cursor-pointer flex items-center justify-center
							${checktext > 0 ? `bg-[#065fd4] hover:bg-[#0556bf] active:bg-[#3778cc] text-white` 
										: `bg-[#f2f2f2] text-[#909090] pointer-events-none` }`}>
				{text}
		</button>
	)
}
export const ReplyButton = (props) => {
	const {onclick, text, checktext} = props
	return (
		<button onClick={onclick}
				className={`Submit w-[84px] h-[32px] rounded-full cursor-pointer flex items-center justify-center
							${checktext > 0 ? `bg-[#065fd4] hover:bg-[#0556bf] active:bg-[#3778cc] text-white` 
										: `bg-[#f2f2f2] text-[#909090] pointer-events-none` }`}>
								{/* hover:bg-[#e5e5e5] active:bg-[#cecece] }`}> */}
				{text}
		</button>
	)
}


