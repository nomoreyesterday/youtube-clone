
import { v4 as uuidv4 } from 'uuid';

const uniqueId = uuidv4()

export interface message{
    id : string,
    time : any,
    level : number,
    name : string,
    icon? : string,
    profile : string,
    message : string
}

export const data:message[] = [
    {
        id: uniqueId+1,
        time : 22.45,
        level: 0,
        name: "Mac Loren",
        icon : "🙂",
        profile: "https://images.unsplash.com/photo-1581436670376-f152b9e3b5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        message: `hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ  hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับhello สวัสดีครับhello สวัสดีครับ`
    }, 
    // {
    //     id: 4,
    //     level: 0,
    //     name: "Mac Loren",
    //     icon : "🙂",
    //     profile: "https://images.unsplash.com/photo-1581436670376-f152b9e3b5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //     message: `hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ  hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับhello สวัสดีครับhello สวัสดีครับ`
    // }, 
    // {
    //     id: 5,
    //     level: 0,
    //     name: "Mac Loren",
    //     icon : "🙂",
    //     profile: "https://images.unsplash.com/photo-1581436670376-f152b9e3b5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //     message: `hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ  hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับhello สวัสดีครับhello สวัสดีครับ`
    // }, 
    // {
    //     id: 6,
    //     level: 0,
    //     name: "Mac Loren",
    //     icon : "🙂",
    //     profile: "https://images.unsplash.com/photo-1581436670376-f152b9e3b5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //     message: `hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ  hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับhello สวัสดีครับhello สวัสดีครับ`
    // }, 
    // {
    //     id: 7,
    //     level: 0,
    //     name: "Mac Loren",
    //     icon : "🙂",
    //     profile: "https://images.unsplash.com/photo-1581436670376-f152b9e3b5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //     message: `hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ  hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับhello สวัสดีครับhello สวัสดีครับ`
    // }, 
    // {
    //     id: 8,
    //     level: 0,
    //     name: "Mac Loren",
    //     icon : "🙂",
    //     profile: "https://images.unsplash.com/photo-1581436670376-f152b9e3b5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //     message: `hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ  hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับhello สวัสดีครับhello สวัสดีครับ`
    // }, 
    // {
    //     id: 9,
    //     level: 0,
    //     name: "Mac Loren",
    //     icon : "🙂",
    //     profile: "https://images.unsplash.com/photo-1581436670376-f152b9e3b5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //     message: `hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ  hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับhello สวัสดีครับhello สวัสดีครับ`
    // }, 
    // {
    //     id: 10,
    //     level: 0,
    //     name: "Mac Loren",
    //     icon : "🙂",
    //     profile: "https://images.unsplash.com/photo-1581436670376-f152b9e3b5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //     message: `hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ  hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับhello สวัสดีครับhello สวัสดีครับ`
    // }, 
    // {
    //     id: 11,
    //     level: 0,
    //     name: "Mac Loren",
    //     icon : "🙂",
    //     profile: "https://images.unsplash.com/photo-1581436670376-f152b9e3b5ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbmdhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //     message: `hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ  hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับ hello สวัสดีครับhello สวัสดีครับhello สวัสดีครับ`
    // }, 
    {
        id: uniqueId+2,
        level: 0,
        time: 22.46,
        name: "Lai Bath",
        icon : "🙂",
        profile : "https://steamuserimages-a.akamaihd.net/ugc/1832411129754108407/49BE228A027B98FBF5E025DD893DA781A6F41A32/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
        message: "สวัสดีจ้า"
    },
    {
        id: uniqueId+3,
        time: 22.47,
        level: 1,
        name: "Lufy",
        icon : "🙂",
        profile : "https://c4.wallpaperflare.com/wallpaper/56/368/958/anime-lufy-one-piece-wallpaper-preview.jpg",
        message: "สวัสดีงับ"
    }
]