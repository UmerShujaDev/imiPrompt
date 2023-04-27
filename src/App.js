import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Builder from "./pages/Builder";
import {
  categories as categoryData,
  categoryDependentData as categoryRelevantData,
} from "./Constants/constants";
export const AppContext = createContext();

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
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/builder" />} />
            <Route path="/builder" element={<Builder />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
