import React, { useState } from 'react'
import { useStore, useMessagesStore } from '../datas/store'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import { BsHouseDoor } from 'react-icons/bs'
import { BsCollectionPlay } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { VscHistory } from 'react-icons/vsc'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'
import { BiLike } from 'react-icons/bi'
import { AiOutlineFire } from 'react-icons/ai'
import { BsMusicNote } from 'react-icons/bs'
import { IoGameControllerOutline } from 'react-icons/io5'
import { BiNews } from 'react-icons/bi'
import { BsTrophy } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { TbFlag } from 'react-icons/tb'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { RiFeedbackLine } from 'react-icons/ri'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import { MdSlowMotionVideo } from 'react-icons/md'
import { TbBrandYoutubeKids } from 'react-icons/tb'
import { SiYoutubemusic } from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import { BsFillPlayCircleFill } from 'react-icons/bs'

import { IoReorderThreeOutline } from 'react-icons/io5'
import { HiOutlineBars3 } from 'react-icons/hi2'

import Navbar from './Navbar'



function Sidebar() {
	const { isActive, setActive, activeName, handleSetActiveName } = useStore()
	// console.log("realname : "+activeName)

	return (	 
		<aside>			
			<div 
				className={`w-[240px] h-[100%] fixed top-0 left-[-240px] bg-[#fff] z-[1000] 
                  			${isActive != null ? isActive ? "animate-transright" : "animate-transleft" : ""
							}`}>
							
							
                  			{/* ${isActive ? 'animate-transright' : 'animate-transleft'}`}> */}
				<div className='topnav w-[calc(100%-16px)] h-[56px] pl-[16px] flex flex-row items-center '>
					<span onClick={setActive}
						className='w-[40px] h-[40px] rounded-[50%] hover:bg-[#F2F2F2] flex items-center justify-center cursor-pointer'>
						{/* <i className="w-[24px] h-[24px] flex items-center justify-center fa-solid fa-bars text-xl"></i> */}
						<HiOutlineBars3 size={24}/>
					</span>
					<div className='w-[120px] h-[56px] pl-[16px] py-[16px] pr-[14px] flex items-center justify-start cursor-pointer'>test.Gif</div>
				</div>

				<div className='w-[100%] max-h-[calc(100vh-56px)] overflow-y-auto scrollbar-none hover:scrollbar-thin scrollbar-thumb-[#909090] hover:scrollbar-thumb-[#747474] scrollbar-track-[#fff]'>
					<div className='w-[100%] h-[auto] p-[12px] '>
						<div className='w-[100%] h-[auto] '>
							{topNavItems.map((item) => (
								<PaperItem
									key={item.name}
									icon={item.icon}
									name={item.name}
									selected={item.name == activeName}
									onClick={() => handleSetActiveName(item.name)}
								/>
							))}
							{/* <PaperItem icon={<BsHouseDoor size={24} />} name={"หน้าแรก"} selected={}/>
							<PaperItem icon={<MdOutlineExplore size={24}/>} name={"สำรวจ"}/>
							<PaperItem icon={<MdSlowMotionVideo size={24} />} name={"Shorts"}/>
							<PaperItem icon={<BsCollectionPlay size={24} />} name={"การติดตาม"}/> */}
						</div>
						<div className='w-[100%] h-[auto] pt-[12px] mt-[12px] border-t-[1px] border-[#e5e5e5]'>
							{bottomNavItems.map((item) => (
								<PaperItem
									key={item.name}
									icon={item.icon}
									name={item.name}
									selected={item.name === activeName}
									onClick={() => handleSetActiveName(item.name)}
								/>
							))}
							{/* <PaperItem icon={<MdOutlineVideoLibrary size={24}/>} name={"คลังวิดีโอ"}/>
							<PaperItem icon={<VscHistory size={24}/>} name={"ประวัติการเข้าชม"}/>
							<PaperItem icon={<AiOutlinePlaySquare size={24}/>} name={"วิดีโอของคุณ"}/>
							<PaperItem icon={<MdOutlineWatchLater size={24}/>} name={"ดูภายหลัง"}/>
							<PaperItem icon={<BiLike size={24}/>} name={"วิดีโอที่ชอบ"}/> */}
						</div>
					</div>
					<div className='w-[100%] h-[auto] overflow-x-hidden p-[12px] border-t-[1px] border-[#e5e5e5] '>
							<HeadItem name={"การติดตาม"}/>
							{followNavItems.map((item) => (
								<PaperItem
									key={item.name}
									icon={item.icon}
									name={item.name}
									selected={item.name === activeName}
									onClick={() => handleSetActiveName(item.name)}
								/>
							))}
							{/* <PaperItem icon={<BsHouseDoor size={24}/>} name={"Channel"}/>
							<PaperItem icon={<BsHouseDoor size={24}/>} name={"Channel"}/>
							<PaperItem icon={<BsHouseDoor size={24}/>} name={"Channel"}/>
							<PaperItem icon={<BsHouseDoor size={24}/>} name={"Channel"}/>
							<PaperItem icon={<BsHouseDoor size={24}/>} name={"Channel"}/> */}
					</div>
					<div className='w-[100%] h-[auto] overflow-x-hidden p-[12px] border-t-[1px] border-[#e5e5e5] '>
							<HeadItem name={"สำรวจ"}/>
							{exploreNavItems.map((item) => (
								<PaperItem
									key={item.name}
									icon={item.icon}
									name={item.name}
									selected={item.name === activeName}
									onClick={() => handleSetActiveName(item.name)}
								/>
							))}
							{/* <PaperItem icon={<AiOutlineFire size={24}/>} name={"มาแรง"}/>
							<PaperItem icon={<BsMusicNote size={24}/>} name={"เพลง"}/>
							<PaperItem icon={<IoGameControllerOutline size={24}/>} name={"เกม"}/>
							<PaperItem icon={<BiNews size={24}/>} name={"ข่าวสาร"}/>
							<PaperItem icon={<BsTrophy size={24}/>} name={"กีฬา"}/> */}
					</div>
					<div className='w-[100%] h-[auto] overflow-x-hidden p-[12px] border-t-[1px] border-[#e5e5e5] '>
							<HeadItem name={"เพิ่มเติมจาก YouTube"}/>
							{moreNavItems.map((item) => (
								<PaperItem
									key={item.name}
									icon={item.icon}
									name={item.name}
									selected={item.name === activeName}
									onClick={() => handleSetActiveName(item.name)}
								/>
							))}
							{/* <PaperItem icon={<BsYoutube size={24}/>} name={"YouTube Premium"}/>
							<PaperItem icon={<BsFillPlayCircleFill size={24}/>} name={"YouTube Studio"}/>
							<PaperItem icon={<SiYoutubemusic size={24}/>} name={"Youtube Music"}/>
							<PaperItem icon={<TbBrandYoutubeKids size={24}/>} name={"Youtube kids"}/> */}
					</div>
					<div className='w-[100%] h-[auto] overflow-x-hidden p-[12px] border-t-[1px] border-[#e5e5e5] '>
						{settingItems.map((item) => (
							<PaperItem
								key={item.name}
								icon={item.icon}
								name={item.name}
								selected={item.name === activeName}
								onClick={() => handleSetActiveName(item.name)}
							/>
						))}
							{/* <PaperItem icon={<AiOutlineSetting size={24}/>} name={"การตั้งค่า"}/>
							<PaperItem icon={<TbFlag size={24}/>} name={"ประวัติรายงาน"}/>
							<PaperItem icon={<IoIosHelpCircleOutline size={24}/>} name={"ความช่วยเหลือ"}/>
							<PaperItem icon={<RiFeedbackLine size={24}/>} name={"ส่งความเห็น"}/> */}
					</div>
				</div>
			</div>
			<div onClick={setActive} 
			     className={`rightdrawer w-[100%] h-[100%] top-0 left-0
							${isActive ? 'z-[999] bg-[rgb(0,0,0,0.5)] fixed' : ''}`}>
			</div>
		</aside>
	)
}

export default Sidebar

export const HeadItem = (props) => {
	return (
		<div className='w-[216px] h-[32px] px-[12px] pt-[6px] pb-[4px] flex items-center'>
			{props.name}
		</div>
	)
}

export const PaperItem = (props) => {
  	return (
		<div onClick={props.onClick}
			className={`w-[204px] h-[40px] px-[12px] bg-transparent flex flex-row items-center rounded-[10px]
						hover:bg-[#e6e6e6]  active:bg-[#c8c8c8]
						focus:outline-none focus:ring focus:ring-offset-2 focus:ring-[#f2f2f2] focus:ring-opacity-50
						${props.selected ? 'bg-[#f4f4f4]' : ''} 
						`}>
			<div className='w-[24px] h-[24px] mr-[24px] flex items-center justify-center '>
				{props.icon}
			</div>
			<div className='w-[132px] h-[20px] flex items-center text-[14px] leading-[20px]'>
				{props.name}
			</div>
		</div>
  	)
}

export const topNavItems = [
	{  icon: <BsHouseDoor size={24} />, name: 'หน้าแรก', selected: false },
	{  icon: <MdOutlineExplore size={24} />, name: 'สำรวจ', selected: false },
	{  icon: <MdSlowMotionVideo size={24} />, name: 'Shorts', selected: false },
	{  icon: <BsCollectionPlay size={24} />, name: 'การติดตาม', selected: false },
]

export const bottomNavItems = [
	{  icon: <MdOutlineVideoLibrary size={24} />, name: 'คลังวิดีโอ' },
	{  icon: <VscHistory size={24} />, name: 'ประวัติการเข้าชม' },
	{  icon: <AiOutlinePlaySquare size={24} />, name: 'วิดีโอของคุณ' },
	{  icon: <MdOutlineWatchLater size={24} />, name: 'ดูภายหลัง' },
	{  icon: <BiLike size={24} />, name: 'วิดีโอที่ชอบ' },
]

export const followNavItems = [
	{  icon: <BsHouseDoor size={24} />, name: 'Channel' },
	{  icon: <BsHouseDoor size={24} />, name: 'Channe2' },
	{  icon: <BsHouseDoor size={24} />, name: 'Channe3' },
	{  icon: <BsHouseDoor size={24} />, name: 'Channe4' },
	{  icon: <BsHouseDoor size={24} />, name: 'Channe5' },
]

export const exploreNavItems = [
	{  icon: <AiOutlineFire size={24} />, name: 'มาแรง' },
	{  icon: <BsMusicNote size={24} />, name: 'เพลง' },
	{  icon: <IoGameControllerOutline size={24} />, name: 'เกม' },
	{  icon: <BiNews size={24} />, name: 'ข่าวสาร' },
	{  icon: <BsTrophy size={24} />, name: 'กีฬา' },
]

export const moreNavItems = [
	{  icon: <BsYoutube size={24} />, name: 'YouTube Premium' },
	{  icon: <BsFillPlayCircleFill size={24} />, name: 'YouTube Studio' },
	{  icon: <SiYoutubemusic size={24} />, name: 'Youtube Music' },
	{  icon: <TbBrandYoutubeKids size={24} />, name: 'Youtube kids' },
]

export const settingItems = [
	{  icon: <AiOutlineSetting size={24} />, name: "การตั้งค่า" },
	{  icon: <TbFlag size={24} />, name: "ประวัติรายงาน" },
	{  icon: <IoIosHelpCircleOutline size={24} />, name: "ความช่วยเหลือ" },
	{  icon: <RiFeedbackLine size={24} />, name: "ส่งความเห็น" }
]

// export const topNavItems = [
// 	{ key:1, icon: <BsHouseDoor size={24} />, name: 'หน้าแรก', selected: false },
// 	{ key:2, icon: <MdOutlineExplore size={24} />, name: 'สำรวจ', selected: false },
// 	{ key:3, icon: <MdSlowMotionVideo size={24} />, name: 'Shorts', selected: false },
// 	{ key:4, icon: <BsCollectionPlay size={24} />, name: 'การติดตาม', selected: false },
// ]

// export const bottomNavItems = [
// 	{ key:1, icon: <MdOutlineVideoLibrary size={24} />, name: 'คลังวิดีโอ' },
// 	{ key:2, icon: <VscHistory size={24} />, name: 'ประวัติการเข้าชม' },
// 	{ key:3, icon: <AiOutlinePlaySquare size={24} />, name: 'วิดีโอของคุณ' },
// 	{ key:4, icon: <MdOutlineWatchLater size={24} />, name: 'ดูภายหลัง' },
// 	{ key:5, icon: <BiLike size={24} />, name: 'วิดีโอที่ชอบ' },
// ]

// export const followNavItems = [
// 	{ key:1, icon: <BsHouseDoor size={24} />, name: 'Channel' },
// 	{ key:2, icon: <BsHouseDoor size={24} />, name: 'Channe2' },
// 	{ key:3, icon: <BsHouseDoor size={24} />, name: 'Channe3' },
// 	{ key:4, icon: <BsHouseDoor size={24} />, name: 'Channe4' },
// 	{ key:5, icon: <BsHouseDoor size={24} />, name: 'Channe5' },
// ]

// export const exploreNavItems = [
// 	{ key:1, icon: <AiOutlineFire size={24} />, name: 'มาแรง' },
// 	{ key:2, icon: <BsMusicNote size={24} />, name: 'เพลง' },
// 	{ key:3, icon: <IoGameControllerOutline size={24} />, name: 'เกม' },
// 	{ key:4, icon: <BiNews size={24} />, name: 'ข่าวสาร' },
// 	{ key:5, icon: <BsTrophy size={24} />, name: 'กีฬา' },
// ]

// export const moreNavItems = [
// 	{ key:1, icon: <BsYoutube size={24} />, name: 'YouTube Premium' },
// 	{ key:2, icon: <BsFillPlayCircleFill size={24} />, name: 'YouTube Studio' },
// 	{ key:3, icon: <SiYoutubemusic size={24} />, name: 'Youtube Music' },
// 	{ key:4, icon: <TbBrandYoutubeKids size={24} />, name: 'Youtube kids' },
// ]

// export const settingItems = [
// 	{ key:1, icon: <AiOutlineSetting size={24} />, name: "การตั้งค่า" },
// 	{ key:2, icon: <TbFlag size={24} />, name: "ประวัติรายงาน" },
// 	{ key:3, icon: <IoIosHelpCircleOutline size={24} />, name: "ความช่วยเหลือ" },
// 	{ key:4, icon: <RiFeedbackLine size={24} />, name: "ส่งความเห็น" }
// ]

