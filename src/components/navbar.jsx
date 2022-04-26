import img1 from "../img/insta.png";
import img2 from "../img/img2.jpeg";
import { AiFillHome } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { MdExplore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Navbar = ({ user }) => {
  return (
    <div className="nav">
      <div className="insta">
        <img src={img1} alt="instaicon" />
      </div>
      <div className="search">
        <input placeholder="search" />
      </div>

      <div className="icon">
        <div>
          <AiFillHome style={{ color: "black", fontSize: "25px" }} />
        </div>
        <div>
          <FiSend style={{ color: "black", fontSize: "25px" }} />
        </div>
        <div>
          <CgAddR style={{ color: "black", fontSize: "25px" }} />
        </div>
        <div>
          <MdExplore style={{ color: "black", fontSize: "25px" }} />
        </div>
        <div>
          <FaRegHeart style={{ color: "black", fontSize: "25px" }} />
        </div>
        <div className="picbox">
          <img className="pic" src={img2} alt="img" />
          <p>{user}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
