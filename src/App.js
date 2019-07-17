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
      setNasaData(response);
      setDate(response.data.date);
      setExplanation(response.data.explanation);
      setMediaType(response.data.mediaType);
      setTitle(response.data.title);
      setUrl(response.data.url);
      console.log(response);
    })
  }, [])
  return (
    <div className="App">
      <Header />
      <SpaceCard 
      nasaData={nasaData} 
      date={date} 
      explanation={explanation}
      mediaType={mediaType}
      title={title}
      url={url}
      />
      <ExplanationCard explanation={explanation} />
    </div>
  );
}

export default App;
