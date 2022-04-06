import { useState, createContext } from "react";
import axios from "axios";
import { apiKey } from "../api/config";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const querySearch = (query) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=32&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  return (
    <SearchContext.Provider value={{ images, loading, querySearch }}>
      {children}
    </SearchContext.Provider>
  );
};
export default SearchContextProvider;
