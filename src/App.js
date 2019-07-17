import React, {useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SpaceCard from "./Components/SpaceCard.js";
import Header from "./Components/Header";
import ExplanationCard from "./Components/ExplanationCard";

function App() {
  const [nasaData, setNasaData] = useState([]);
  const [date, setDate] = useState("");
  const [explanation, setExplanation] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=AcOjW5HR3dXgctkKQ3hfCLxIs8yyy26t02u9RKkc")
    .then(response => {
      // set our state variables to the data coming in from the API
      setNasaData(response);
      setDate(response.data.date);
      setExplanation(response.data.explanation);
      setMediaType(response.data.media_type);
      setTitle(response.data.title);
      setUrl(response.data.url);
      console.log(response);
    })
  }, [])

  return (
    <div className="App">
      <Header date={date} />
      <SpaceCard 
      nasaData={nasaData} 
      date={date}
      mediaType={mediaType}
      title={title}
      url={url}
      />
      <ExplanationCard explanation={explanation} />
    </div>
  );
}

export default App;
