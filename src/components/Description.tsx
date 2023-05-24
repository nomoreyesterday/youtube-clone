import React, { useEffect, useRef, useState } from 'react'

const Description = () => {
    const [isOverflow, setIsOverflow] = useState(false)
    const handleOverflow = () => {
        if (isOverflow === false) {
            setIsOverflow(true)
        }
    }
    const handleSeeMore = () => {
        if (isOverflow === true) {
            setIsOverflow(false)
        }

        // if (targetRef.current) {
        //     const { top } = targetRef.current.getBoundingClientRect()
        //     console.log(top)
        //     window.scrollTo({
        //         top: 300, // ตำแหน่ง Y ของ element ในเชื่อมโยงความสูงของหน้าจอ
        //         // top: window.pageYOffset + top -180, // ตำแหน่ง Y ของ element ในเชื่อมโยงความสูงของหน้าจอ
        //         behavior: 'smooth', // เพื่อให้การเลื่อนเป็นแบบอ่อนโยน
        //     })
        // }
    }



    const targetRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div ref={targetRef}
                className={`${isOverflow ? "min-h-[116px]" : "description relative h-[116px]"} w-[calc(100%+12px)] mt-0 mr-[-12px] flex flex-row flex-wrap`}>
                <div onClick={handleOverflow}
                    className={`secondtier relative w-full h-[calc(100%-12px)] rounded-[10px] flex items-center justify-center 
                                bg-[#f2f2f2] mt-[12px] mr-[12px]
                                ${isOverflow ? "" : "hover:bg-[#e2e2e2] active:bg-[#cecece] cursor-pointer" }
                                `}>
                    <div className='thirdtier w-[calc(100%-24px)] h-[calc(100%-24px)] m-[12px] overflow-hidden '>

                        <div className={`headline w-full overflow-hidden break-words leading-[20px]
                                        ${isOverflow ? "h-full" : "h-[80px]"}
                                        `}>
                            
                            <div className='texthead text-[14px] leading-[20px]'>
                                <span className='font-[600]'>การดู 367,529 ครั้ง</span>
                                <span className='space w-[7px]'> </span>
                                <span className='font-[600]'>22 ก.พ. 2022</span>
                                <span className='space w-[7px]'> </span>
                                <span className=''>#鯊鯊</span>
                                <span className='space w-[3.5px]'> </span>
                                <span className=''>#dino</span>
                                <span className='space w-[3.5px]'> </span>
                                <span className=''>#GawrGura</span>
                            </div>
                            <div className={`textsection relative w-full overflow-hidden text-[14px]
                                           ${isOverflow ? "h-auto" : "h-[60px]"}
                                            `}>
                                <pre className={`subtext relative block overflow-hidden whitespace-pre-wrap break-words break-all 
                                                ${isOverflow ? "h-auto" : "h-[40px]"}
                                                `}>
                                    {textoriginal}
                                </pre>
                                <button onClick={handleSeeMore}
                                        className={`${isOverflow ? "left-[0px] mt-[20px] " : "left-[3px]"} bottom-[0px] `}>
                                            {isOverflow ? "แสดงน้อยลง" : "แสดงเพิ่มเติม"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Description



const textoriginal = 
`【Gawr Gura Ch. hololive-EN】
https://www.youtube.com/channel/UCoSr...

【Original Source】
• 【1 YEAR ANNIVERSA...  

今天只想聽日文，但也必須是鯊鯊 ùwú


0:00 恋愛サーキュレーション
4:30 真夜中のドア Stay With Me
9:20 街のドルフィン Machi No Dorufin
13:03 愛してるばんざーい!
17:47 Bad Apple!!
21:06 Departure!
24:37 Flattery？
28:33 Plastic Love
33:19 Ride On Time
37:04 Say So
40:24 Snowstorm
43:45 Summertime
47:26 Sweets Parade
48:59 おうちに帰りたい
50:40 ケ セラ セラ
53:46 ばかみたい
57:30 はじめてのチュウ
1:01:25 ふゆびより
1:07:17 もうそうえくすぷれす
1:08:44 やらないか





#GawrGura #Karaoke #1hr #BGM #lyrical #japanesesong #japanese #peace #love #playlist #hololiveEN #guraoke #gawraoke #holoMyth  #hololiveEnglish  #hololive #vtuber #dino #Vtuber歌曲 #HoloEN歌曲 #hololive中文 #hololiveEN翻譯 #holoMyth翻譯 #vtuber翻譯 #hololiveEN中文翻譯 #hololiveEN中文字幕 #holoＭyth #卡拉OK #鯊鯊歌回  #日文歌回 #作業用歌 #烤歌 #中文翻譯 #中文字幕 #hololive中文翻譯 #vtuber中文翻譯 #中文烤肉 #烤肉man #鯊鯊 #古拉翻譯 #鯊鯊翻譯  #鯊米挖歌 */}
`