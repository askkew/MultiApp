import React from 'react'
import videoBg from '../media/videoBg.mp4';

const VideoBg = () => {
  return (
    <div style={{width: "100%", height: "100vh",}}>
        <video style={{width: "100%", objectFit: "contain",}} src={videoBg} autoPlay loop muted />
    </div>
  )
}

export default VideoBg