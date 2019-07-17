import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState("https://api.nasa.gov/planetary/apod?api_key=AcOjW5HR3dXgctkKQ3hfCLxIs8yyy26t02u9RKkc")

  axios.get(nasaData)
    .then(response => {
      console.log(response);
    })


  return (
    <div className="App">

    </div>
  );
}

export default App;
