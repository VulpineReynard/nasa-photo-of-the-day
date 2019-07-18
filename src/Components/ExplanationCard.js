import React from "react";

export default function ExplanationCard(props) {
  return (
  <div className="explanation-card">
    <h3>Summary</h3>
    <p className="explanation">{props.explanation}</p>
  </div>
  )
}