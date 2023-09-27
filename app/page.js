"use client"
import axios from 'axios'
import React, {useState} from 'react'

const page = () => {
  const [Images, setImages] = useState([])
  const getImages = async () => {
    try {
      const opt = await axios.get("https://picsum.photos/v2/list")
      console.log(opt.data)
      const data = opt.data
      setImages(data)
      // console.log("Images");
    } catch (error) {
      console.error("Error Fetching Images")
    }
  }
  return (
    <div>
      <button onClick={getImages} className = 'px-6 py-6 bg-blue-400 text-white font-bold'>
        Get Images
      </button>
      <div>
        {Images.map((elem,i) => {
          return <img key = {i} src = {elem.download_url} height={300} width={300} className = "m-10 rounded inline-block"></img>
        })}
      </div>
    </div>
  )
}

export default page