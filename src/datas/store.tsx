import {data, message} from './data'
import {create} from 'zustand'
import {StoreApi} from 'zustand'
import immer from 'immer'
import {time} from './time'
// import {startTimer, formattedTime,formatTime, updateTime} from './time'
// import {updateTime} from './time'
import {formatTime} from './time'
// import {formattedTime} from './time'
// import {startTimer} from './time'
import { useEffect, useState } from 'react'

import { v4 as uuidv4 } from 'uuid';

// const uniqueId = uuidv4()
    
//Live Chat
export interface Message {
    id: string
    time: string
    level: number
    name: string
    icon?: string
    profile: string
    message: string
}
export const currentUser:message = {
    id : uuidv4(),
    time : time,
    level : 0,
    name : "Hikari",
    icon : "🙂",
    profile : "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1790&q=80",
    message : ""
}

//Comment
// export interface Commentsection {
//     id: string
//     time: string
//     timeStamp : number
//     path: string
//     name: string
//     profile: string
//     isreply: boolean
//     comment: string
//     children?: Commentsection[] // เพิ่มฟิลด์ children
// }
let currentId = 1;

function generateId() {
  const id = currentId.toString();
  currentId++;
  return id;
}

export interface Commentsection {
    id: string;
    time: string;
    timeStamp: any;
    path: string;
    name: string;
    profile: string;
    isreply: boolean;
    comment: string;
    children: Commentsection []
  }

export const currentComment:Commentsection = {
    id : uuidv4(),
    time : formatTime(Date.now()),  //initial value
    timeStamp : 0,
    path : "",
    name : "Hikari",
    profile : "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1790&q=80",
    isreply: false,
    comment : "เม้นแรก",
    children: [
		{
		  id: generateId(),
		  time: "12:35 PM",
		  timeStamp: 123456790,
		  path: "/comments/1/2",
		  name: "Jane Smith",
		  profile: "jane_smith.jpg",
		  isreply: true,
		  comment: "This is a reply.",
		  children: [],
		},
		{
		  id: generateId(),
		  time: "12:36 PM",
		  timeStamp: 123456791,
		  path: "/comments/1/3",
		  name: "Alice Johnson",
		  profile: "alice_johnson.jpg",
		  isreply: true,
		  comment: "This is another reply.",
		  children: [
			{
			  id: generateId(),
			  time: "12:37 PM",
			  timeStamp: 123456792,
			  path: "/comments/1/3/1",
			  name: "Bob Anderson",
			  profile: "bob_anderson.jpg",
			  isreply: true,
			  comment: "This is a nested reply.",
			  children: [],
			},
		  ],
		},
		{
		  id: generateId(),
		  time: "12:38 PM",
		  timeStamp: 123456793,
		  path: "/comments/1/4",
		  name: "Eve Wilson",
		  profile: "eve_wilson.jpg",
		  isreply: true,
		  comment: "This is a third reply.",
		  children: [],
		},
	  ],
	};
  
export interface MessagesState {
    messages: Message[]
    addMessage: (newMessage: Message) => void
    comments: Commentsection[]
    addComment: (newComment: Commentsection) => void
    childrens: Commentsection[]
    addReplyChildren: (newChildrens: Commentsection) => void
    // times: Commentsection[]
    updateTime: (commentId: string) => void
    updateIsReply: (commentId: string, isReply: boolean) => void
    addTestChild: () => void
    // reply: boolean
    // updateCommentTimestamp: (commentId: string) => void
    // updateTimestamp: (newTimestamp: number, commentId: number) => void;
}

export const useMessagesStore = create<MessagesState>((set) => ({
    messages: data,
    addMessage: (newMessage) =>
        set((state) => ({
            messages: [...state.messages, newMessage],
        })),

    comments: [],   
	addComment: (newComment) => {
        const currentTime = Date.now()
        const timePassed = currentTime - newComment.timeStamp
        const newId = uuidv4()
        const updatedParent = { 
            ...newComment, 
            time: formatTime(timePassed), 
            isreply: newComment.isreply, 
            timeStamp: currentTime, 
            id: newId, 
            children: [],
        }
		
        set((state) => ({
            comments: [...state.comments, updatedParent],
        }))
    },

    childrens: [],    

	addTestChild: () => {
		set((state) => {
		  const comments = [...state.comments];
		  const parent = comments[0]; // กำหนดตำแหน่งของ Commentsection หลักที่ต้องการเพิ่ม Commentsection ลูก
	  
		  const newChild = {
			id: uuidv4(), // สร้าง id สำหรับ Commentsection ลูกใหม่
			time: "12:40 PM",
			timeStamp: Date.now(),
			path: "/comments/1/5",
			name: "Test Child",
			profile: "test_child.jpg",
			isreply: true,
			comment: "This is a test child comment.",
			children: [],
		  };
	  
		  parent.children.push(newChild); // เพิ่ม Commentsection ลูกใหม่ลงใน children ของ Commentsection หลัก
	  
		  return { ...state, comments };
		});
	  },

	  addReplyChildren: (newComment) => {
		const currentTime = Date.now();
		const timePassed = currentTime - newComment.timeStamp;
		const newId = uuidv4();
	  
		set((state) => {
		  const comments = [...state.comments];
	  
		  const addChildToParentComment = (parentComment) => {
			if (parentComment.id === newComment.id) {
			  const newChild = {
				id: newId,
				time: formatTime(timePassed),
				timeStamp: currentTime,
				path: newComment.path,
				name: newComment.name,
				profile: newComment.profile,
				comment: newComment.comment,
				isreply: newComment.isreply,
				children: [],
			  };
	  
			  parentComment.children.push(newChild);
			  return true;
			}
	  
			if (parentComment.children && parentComment.children.length > 0) {
			  return parentComment.children.some(addChildToParentComment);
			}
	  
			return false;
		  };
	  
		  comments.some(addChildToParentComment);
	  
		  return { ...state, comments };
		});
	  },
	
	// addReplyChildren: (newComment) => {
	// 	const currentTime = Date.now();
	// 	const timePassed = currentTime - newComment.timeStamp;
	// 	const newId = uuidv4();
	// 	const updatedChild = {
	// 	  id: newId,
	// 	  time: formatTime(timePassed),
	// 	  timeStamp: newComment.timeStamp, 
	// 	  path: "",
	// 	  name: "Hikari",
	// 	  profile: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1790&q=80",
	// 	  isreply: newComment.isreply,
	// 	  comment: "ตอบกลับ",
	// 	  children: [],
	// 	};
	// 	set((state) => {
	// 	  const updatedComments = state.comments.map((comment) => {
	// 		if (comment.id === newComment.id) {
	// 		  return {
	// 			...comment,
	// 			children: [...comment.children, updatedChild],
	// 		  };
	// 		}
	// 		return comment;
	// 	  });
		
	// 	  return {
	// 		...state,
	// 		comments: updatedComments,
	// 	  };
	// 	});
	//   }, 

    updateIsReply: (commentId: string, isReply: boolean) => {
        set((state) => ({
          comments: state.comments.map((comment) =>
            comment.id === commentId ? { ...comment, isreply: isReply } : comment
          ),
        }))
      },

    // v2
    updateTime: () => {
        set((state) => ({ comments: state.comments.map((comment) => ({
            ...comment,
            time: formatTime(comment.timeStamp),
          })),
    }))},

    toggleReply: (commentId) => {
        set((state) => {
          const updatedComments = state.comments.map((comment) => {
            if (comment.id === commentId) {
              return { ...comment, showReplyForm: !comment.isreply };
            }
            return comment;
          });
          return { comments: updatedComments };
        });
      },
      
      
}))


interface StoreState {
    isHide: boolean;
    isLive: boolean;
    isActive?: boolean;
    activeName: string;
    currentUser:message,
    handleIsHide: () => void;
    setIsLive: () => void;
    setActive: () => void;
    handleSetActiveName: (name: string) => void;
}

export const useStore = create<StoreState>((set) => ({
    isHide: false,
    isLive: false,
    activeName: "",
    currentUser: currentUser,
    isCloseSidebar: false, // เพิ่มค่าเริ่มต้นให้เป็น false
    handleIsHide: () => set((state) => ({ ...state, isHide: !state.isHide })),
    setIsLive: () => set((state) => ({ ...state, isLive: !state.isLive })),
    setActive: () => set((state) => ({ ...state, isActive: !state.isActive })),
    handleSetActiveName: (name) => set((state) => ({ ...state, activeName: name })),
  }));





