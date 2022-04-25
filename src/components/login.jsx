import img3 from "../img/insta2.png";

const Login = ({
  handler,
  setIsclicked,

  setUsername,

  setPassword,
}) => {
  return (
    <div className="containerf">
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
          Dont have account?
          <p className="p" onClick={() => setIsclicked(false)}>
            Sign Up
          </p>
        </p>
      </form>
    </div>
  );
};

export default Login;
