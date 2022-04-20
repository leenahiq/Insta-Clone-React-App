const Stories = ({ image }) => {
  return (
    <div className="stories">
      {image.map((item, index) => (
        <div>
          <img key={index} src={item.download_url} alt="images" />
          <p>{item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
