import "./App.css";
import Card from "./components/card";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
function App() {
  const [image, setImage] = useState([""]);

  const fetchImage = async () => {
    let res = await fetch("https://picsum.photos/v2/list");
    let data = await res.json();
    console.log(data);
    setImage(data);
  };
  useEffect(() => {
    fetchImage();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Card image={image} />
    </div>
  );
}

export default App;
