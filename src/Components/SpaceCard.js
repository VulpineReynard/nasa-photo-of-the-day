import React, { useState } from "react";
import ReactPlayer from 'react-player'


export default function SpaceCard(props) {
  let [isVideoPlaying, togglePlayPause] = useState(false);

  function DisplayVideo() {
    if (props.mediaType === "video") {
      return (<ReactPlayer url={props.url} controls={true} 
        playing={isVideoPlaying} width='600px' height='500px' 
        style={{margin: 'auto', marginTop: '30px'}} className="video-player"/>);
    }
  }

  return (
    <div className="space-card">
      <h2 className="card-title">{props.title}</h2>

      {DisplayVideo()}

      <button onClick={()=> togglePlayPause(isVideoPlaying ? false : true)} className="video-btn">Play / Pause</button>
    </div>
  )
}