import React from "react";
import ReactPlayer from 'react-player'


export default function SpaceCard(props) {
  return (
    <div className="space-card">
      <h2 className="card-title">{props.title}</h2>

      <ReactPlayer url={props.url} controls={true} 
                   playing={false} width='80%' height='80%' 
                   style={{margin: 'auto'}}/>

    </div>
  )
}