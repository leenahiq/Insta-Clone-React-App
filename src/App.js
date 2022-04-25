import "./App.css";
import Card from "./components/card";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
function App({ username }) {
  const [isclicked, setIsclicked] = useState(false);

  const [user, setUser] = useState([]);
  const [image, setImage] = useState([""]);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const fetchImage = async () => {
    let res = await fetch("https://picsum.photos/v2/list");
    let data = await res.json();
    console.log(data);
    setImage(data);
  };
  useEffect(() => {
    fetchImage();
  }, []);

  const addUser = async (username, email, password) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        mathod: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      setUser(data.user);
      localStorage.setItem("myToken", data.token);
    } catch (error) {
      console.log(error);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();

    addUser(username, email, password, setUser);
  };

  return (
    <div className="App">
      <div className="container">
        {isclicked ? (
          <Login
            username={username}
            setUsername={setUsername}
            passsword={password}
            setPassword={setPassword}
            setIsclicked={setIsclicked}
            handler={submitHandler}
          />
        ) : (
          <Signup
            username={username}
            setUsername={setUsername}
            passsword={password}
            setPassword={setPassword}
            setIsclicked={setIsclicked}
            handler={submitHandler}
          />
        )}
      </div>

      <div>
        {user && <Navbar user={user} setUser={setUser} /> && (
          <Card image={image} />
        )}
      </div>
    </div>
  );
}

export default App;
