import img3 from "../img/insta2.png";
const Signup = ({
  setIsclicked,
  handler,
  setEmail,
  setUsername,

  setPassword,
}) => {
  return (
    <div className="signup">
      <form onSubmit={handler}>
        <div className="insta">
          <img src={img3} alt="instaicon" />
        </div>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="email"
        />{" "}
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="password"
          placeholder="password"
        />{" "}
        <br />
        <button type="submit">signUp</button>
        <p>
          Already have account
          <a onClick={(e) => setIsclicked(true)} href="/">
            Log In
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
