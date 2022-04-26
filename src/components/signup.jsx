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
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />{" "}
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />{" "}
        <br />
        <button type="submit">signUp</button>
        <div>
          Already have account?
          <p className="p" onClick={(e) => setIsclicked(true)}>
            Log In
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
