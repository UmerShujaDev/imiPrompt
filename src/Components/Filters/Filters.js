import React, { useContext } from "react";
import Cards from "../cardTemplate/Cards";
import { Button } from "antd";
import { AppContext } from "../../App";
import {
  categoryDependentData as categoryRelevantData,
  categories as categoryData,
} from "../../Constants/constants";

const Filters = () => {
  const {
    categoryDependentData,
    categories,
    setCategories,
    setCategoryDependentData,
  } = useContext(AppContext);
  const handleButtonClick = (parent) => {
    setCategoryDependentData(() => {
      if (categoryRelevantData?.[parent])
        return { [parent]: categoryRelevantData[parent] };
    });

    setCategories({
      ...categoryData,
      [parent]: {
        ...categoryData[parent],
        selected: !categoryData[parent].selected,
      },
    });
  };
  return (
    <>
      <div className="row mb-5">
        <div className="d-flex flex-wrap">
          {categories &&
            Object.keys(categories).map((category, key) => (
              <Button
                onClick={() => {
                  handleButtonClick(category);
                }}
                danger={categories[category].selected}
                className="m-1"
                key={key}
              >
                {categories[category].name}
              </Button>
            ))}
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between">
        {categoryDependentData &&
          Object.keys(categoryDependentData).map((categoryData) =>
            categoryDependentData[categoryData].map(
              ({ id, title, selected }) => (
                <Cards
                  title={title}
                  selected={selected}
                  parent={categoryData}
                  id={id}
                />
              )
            )
          )}
      </div>
    </>
  );
};

export default Filters;
