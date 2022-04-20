import Stories from "./stories";
import Comment from "./comment";
const Card = ({ image }) => {
  return (
    <div>
      <Stories image={image} />
      {image.map((item, index) => (
        <div className="tile">
          <div className="dp">
            <div>
              {" "}
              <img key={index} src={item.download_url} alt="images" />
            </div>
            <div>
              {" "}
              <p>{item.author}</p>
            </div>
          </div>
          <div className="img">
            <img key={index} src={item.download_url} alt="images" />
          </div>
          <div>
            <Comment />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
