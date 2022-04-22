import { useState } from "react";
import img3 from "../img/insta2.png";
const Login = ({ handler }) => {
  const [username, setUsername] = useState();

  const [password, setPassword] = useState();
  return (
    <div>
      <form onSubmit={handler}>
        <div className="insta">
          <img src={img3} alt="instaicon" />
        </div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <br />
        <button type="submit">log In</button>

        <p>
          Dont have account?<a href="/">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
