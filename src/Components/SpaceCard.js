import React, { useState } from "react";
import ReactPlayer from 'react-player';


export default function SpaceCard(props) {
  let [isVideoPlaying, togglePlayPause] = useState(false);

  // function to render youtube player if the data gives us a video
  function DisplayCardContent() {
    // check if it is a video
    if (props.mediaType === "video") {
      // if it is a video, return  the ReactPlayer element given the URL from the API data
      return (
        [<ReactPlayer url={props.url} controls={true} 
        playing={isVideoPlaying} width='600px' height='500px' 
        style={{margin: 'auto', marginTop: '30px'}} className="video-player"/>,
        
        <button onClick={()=> togglePlayPause(isVideoPlaying ? false : true)} className="video-btn">Play / Pause</button>,

        <input placeholder="Enter a video time" className="video-input"></input>,
        <button className="video-time-btn"></button>]
      );
    } else if(props.mediaType === "image") {
        return (
          <img src={props.url} className="nasa-img"/>
        )
    }
  }

  return (
    <div className="space-card">
      <h2 className="card-title">{props.title}</h2>
      {DisplayCardContent()}
    </div>
  )
}