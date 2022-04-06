import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout";
import "./index.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Picture from "./components/Picture";
import SearchContextProvider from "./context/SearchContext";
import SearchGallery from "./components/SearchGallery";
ReactDOM.render(
  <SearchContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" exact element={<Navigate to="/trend" />} />
          <Route
            path="trend"
            exact
            element={
              <Picture
                url="https://vntalking.com/wp-content/uploads/2020/12/snapshot-1.jpg"
                altText="Trending"
              />
            }
          />
          <Route
            path="recent"
            exact
            element={<Navigate to="/search/recent" />}
          />
          <Route
            path="explore"
            exact
            element={<Navigate to="/search/explore" />}
          />
          <Route
            path="animal"
            exact
            element={<Navigate to="/search/animal" />}
          />
          <Route path="search/:query" exact element={<SearchGallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </SearchContextProvider>,
  document.getElementById("root")
);
