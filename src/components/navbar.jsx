import img1 from "../img/insta.png";
import img2 from "../img/img2.jpeg";
import { AiFillHome } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { MdExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

export const Navbar = ({ user }) => {
  return (
    <div className="nav">
      <div className="insta">
        <img src={img1} alt="instaicon" />
      </div>
      <div className="search">
        <input placeholder="Search" />
      </div>

      <div className="icon">
        <a href="/">
          <AiFillHome style={{ color: "black", fontSize: "25px" }} />
        </a>
        <a href="/">
          <FiSend style={{ color: "black", fontSize: "25px" }} />
        </a>
        <a href="/">
          <CgAddR style={{ color: "black", fontSize: "25px" }} />
        </a>
        <a href="/">
          <MdExplore style={{ color: "black", fontSize: "25px" }} />
        </a>
        <a href="/">
          <FaRegHeart style={{ color: "black", fontSize: "25px" }} />
        </a>
        <img className="pic" src={img2} alt="img" />
        {user}
      </div>
    </div>
  );
};

export default Navbar;
