"use server"

import axios from "axios";

export const videoData = async () => {
    const query = process.env.YOUTUBE_API as string;
    console.log(query);

    const res = await axios.get(query).then((result)=>{
        console.log(result.data)
        return result.data;
        
    })

    return {res}
}