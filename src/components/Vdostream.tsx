import React, { useEffect, useRef, useState } from 'react'

export default function Vdostream() {
    const youtube = "https://www.youtube.com/embed/"
    const arraylist = [
      "mYUijIryu0o" , //Gawr Gura｜1hr作業用BGM】天才小鯊魚日文歌曲合輯【Gura sings Playlist｜20 Japanese Songs】
      "g0lQESej9zc" , //Gawr Gura Sings Playlist 2 ( 20 Songs )
      "2lD3vEJ0xVY" , //yoasobi
      "QJd8IR9mxFw" , //yoasobi
    ]

    const playlist = (playlist) => {
        const randomIndex = Math.floor(Math.random() * playlist.length)
        // return youtube + playlist[randomIndex]
        return youtube + playlist[0]
    }
 
    const handleEnded = () => {
        const nextSrc = playlist(arraylist) + '?autoplay=1';
        setCurrentSrc(nextSrc)
    }
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [currentSrc, setCurrentSrc] = useState(playlist(arraylist) + '?autoplay=1');




    // หาชื่อคลิปจากกา่ร Copy link มาวางแล้วใช้ regex
    const youtubeUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=42s';
    const videoIdMatch = youtubeUrl.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/);
    if (videoIdMatch !== null) {
      const videoId = videoIdMatch[1];
    //   console.log(videoId); // แสดง "dQw4w9WgXcQ"
    } else {
      console.log('Invalid URL');
    }

    // useEffect(() => {
    //     const iframe = iframeRef.current;
    //     const handleIframeEnded = () => {
    //         const newSrc = playlist(arraylist) + '?autoplay=1';
    //         if (newSrc !== currentSrc) {
    //             setCurrentSrc(newSrc)
    //         } else {
    //             handleIframeEnded() // ถ้าสุ่มแล้วซ้ำกันให้สุ่มใหม่
    //         }
    //     }
    //     iframe?.addEventListener('ended', handleIframeEnded);
    //     return () => {
    //         iframe?.removeEventListener('ended', handleIframeEnded);
    //     }
    // }, [currentSrc]);

  return (
        <div className="vdocontainer relative box-border outline-none border-none
                        sm:h-[auto]
                        xs:h-[calc(240px)]
                        xs:w-[100%] 
                        ">   
            <iframe className="youtubevdo aspect-video outline-none border-none"
                onEnded={handleEnded}
                ref={iframeRef}
                src={currentSrc}
                width="100%" 
                height="100%" 
                title="YouTube video player" 
                frameBorder="0" 
                allowFullScreen
                // allow="accelerometer;
                //         autoplay; clipboard-write; 
                //         encrypted-media; 
                //         gyroscope; 
                //         picture-in-picture; 
                //         web-share" 
                />                    
        </div>
    )
}


