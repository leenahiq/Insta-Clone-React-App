import { FaRegHeart } from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { MdOutlineBookmark } from "react-icons/md";
const Comment = () => {
  return (
    <div className="comment">
      <div className="like">
        <div>
          <a href="/">
            <FaRegHeart style={{ color: "black", fontSize: "30px" }} />
          </a>
          <a href="/">
            <FiSend style={{ color: "black", fontSize: "30px" }} />
          </a>
        </div>

        <div>
          <a href="/">
            <MdOutlineBookmark style={{ color: "black", fontSize: "30px" }} />
          </a>
        </div>
      </div>
      <h3>Lorem Picsum</h3>

      <div>
        <p>View all comments</p>
      </div>
    </div>
  );
};

export default Comment;
