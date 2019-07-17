import React from "react";

export default function Header(props) {
  return (
    <div className="header">
      <h1 className="title">NASA</h1>
      {/* <img src="./Assets/nasa-logo.jpg" alt="NASA Logo" /> */}
      <p className="date">{props.date}</p>
    </div>
  )
}