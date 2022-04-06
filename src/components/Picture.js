const Picture = ({ url, altText }) => {
  return (
    <li>
      <img src={url} alt={altText}></img>
    </li>
  );
};

export default Picture;
