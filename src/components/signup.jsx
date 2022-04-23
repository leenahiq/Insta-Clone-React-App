import img3 from "../img/insta2.png";
const Signup = ({ setIsclicked, handler }) => {
  return (
    <div className="signup">
      <form onSubmit={handler}>
        <div className="insta">
          <img src={img3} alt="instaicon" />
        </div>
        <input placeholder="username" /> <br />
        <input placeholder="email" /> <br />
        <input placeholder="password" /> <br />
        <button type="submit">signUp</button>
        <p>
          Already have account
          <a onClick={() => setIsclicked(true)} href="/">
            Log In
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
