import { useState } from 'react'
import './index.css'
import src from "./src.jpg"

function App() {
  const [video, setvideo] = useState(false)
  function play(){
    if(video){
      setvideo(false)
    }else{
      setvideo(true)
    }
  }

  return (
    <>
    <h1>Songs</h1>
    {video?
    <>
    <video src='https://videostreamserver-ldsv.vercel.app/video' controls></video>
    <button onClick={play}>Back</button>
    </>:<>
    <div id='par' onClick={play}>
      <img src={src} onClick={play}></img>
      <p onClick={play}>video is streaming through streams</p>
    </div>
    </>

    }
    </>
  )
}

export default App
