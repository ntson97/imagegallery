import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const SearchGallery = () => {
  const { query } = useParams();
  const { images, loading, querySearch } = useContext(SearchContext);
  useEffect(() => {
    querySearch(query);
    // eslint-disable-next-line
  }, [query]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default SearchGallery;
