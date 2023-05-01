import React, { useState, createContext, useContext } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Builder from "./pages/Builder";
import {
  categories as categoryData,
  categoryDependentData as categoryRelevantData,
} from "./Constants/constants";

const AppContext = createContext();

export function useBuilderContext() {
  return useContext(AppContext);
}

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [categories, setCategories] = useState(categoryData);
  const [categoryDependentData, setCategoryDependentData] =
    useState(categoryRelevantData);


  const value = {
    selectedCards,
    setSelectedCards,
    categories,
    setCategories,
    categoryDependentData,
    setCategoryDependentData,
  };
  return (
    <>
      <AppContext.Provider value={value}>
       <Builder />
      </AppContext.Provider>
    </>
  );
}

export default App;
