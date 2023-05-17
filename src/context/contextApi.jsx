/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, createContext } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        searchResults,
        selectedCategory,
        mobileMenu,
        setLoading,
        setSearchResults,
        setSelectedCategory,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
