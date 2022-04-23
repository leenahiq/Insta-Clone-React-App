import "./App.css";
import Card from "./components/card";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import Login from "./components/login";

function App({ username }) {
  const [user, setUser] = useState([]);
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

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="container">
        <Login handler={submitHandler} />
      </div>

      <div>
        {username && <Navbar user={user} setUser={setUser} /> && (
          <Card image={image} />
        )}
      </div>
    </div>
  );
}

export default App;
