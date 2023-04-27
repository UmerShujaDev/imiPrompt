import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Notification } from "../../Constants/utils";
import { categories, categoryDependentData } from "../../Constants/constants";

const SideBar = () => {
  const {
    selectedCards,
    setSelectedCards,
    setCategories,
    setCategoryDependentData,
  } = useContext(AppContext);

  const handleReset = () => {
    try {
      setSelectedCards([]);
      setCategories(categories);
      setCategoryDependentData(categoryDependentData);
      Notification("success", "All filters reset successfully");
    } catch (error) {
      Notification("error", "Reset failed");
    }
  };
  function handleCopy() {
    navigator.clipboard
      .writeText("/imagine prompt: " + selectedCards.join(","))
      .then(() => Notification("success", "Text copied to clipboard"))
      .catch(() => Notification("error", "Failed to copy text to clipboard"));
  }
  return (
    <>
      <div className="d-flex flex-column text-white bg-dark p-1 rounded">
        <div>
          <span>/imagine prompt:</span> {selectedCards.join(",")}
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={handleReset}>
            Reset
          </button>
          <button
            type="button"
            className="btn btn-danger"
            disabled={selectedCards.length === 0}
            onClick={handleCopy}
          >
            <i className="fas fa-clipboard"></i> Copy
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
