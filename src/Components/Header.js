import React from "react";
import { Image } from 'semantic-ui-react';

export default function Header(props) {

  const NasaLogo = () =>  { return <Image src='nasa-logo.jpg' size='small' /> }

  return (
    <div className="header">
      <h2 className="title">Image of the Day</h2>
      <NasaLogo />
      <p className="date">{props.date}</p>
    </div>
  )
}