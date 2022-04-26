import "./App.css";
import Card from "./components/card";
import Navbar from "./components/navbar";
import { useState, useEffect } from "react";
import Login from "./components/login";
import Signup from "./components/signup";
function App() {
  // hook to initiate value for conditional rendering between sign up log in form
  const [isclicked, setIsclicked] = useState(false);

  //conditional rendering between login and main page
  const [user, setUser] = useState();
  const [image, setImage] = useState([""]);

  //to set new value for sign up page
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //fetch request from lorem pictsum API
  const fetchImage = async () => {
    let res = await fetch("https://picsum.photos/v2/list");
    let data = await res.json();
    console.log(data);
    setImage(data);
  };
  useEffect(() => {
    fetchImage();
  }, []);
  //fectch request from REST-API instaclone backend
  const addUser = async (username, email, password) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
  //fetch request for login form
  const addLogIn = async (username, password) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,

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
  const submitHandlerLogIn = (e) => {
    e.preventDefault();

    addLogIn(username, password, setUser);
  };

  return (
    <div className="App">
      {/* login/signup with conditional rendering */}
      {!user && (
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
              handler={submitHandlerLogIn}
              email={email}
              setEmail={setEmail}
            />
          )}
        </div>
      )}
      <div>
        {/* navbar and card for main page */}
        {user && <Navbar user={user} setUser={setUser} />}
        {user && <Card image={image} />}
      </div>
    </div>
  );
}

export default App;
