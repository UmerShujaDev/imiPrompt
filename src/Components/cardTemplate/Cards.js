import React, { useContext } from "react";
import { AppContext } from "../../App";

const Cards = ({ parent, title, selected, id }) => {
  const {
    categoryDependentData,
    setCategoryDependentData,
    setSelectedCards,
    selectedCards,
  } = useContext(AppContext);
  const handleCardClick = () => {
    setCategoryDependentData({
      ...categoryDependentData,
      [parent]: categoryDependentData[parent].map((categoryDependentList) => {
        if (categoryDependentList.id === id) {
          if (categoryDependentList.selected) {
            setSelectedCards((selectedCards) =>
              selectedCards.filter((selectedCard) => selectedCard !== title)
            );
          } else {
            setSelectedCards([categoryDependentList.title, ...selectedCards]);
          }
          return {
            ...categoryDependentList,
            selected: !categoryDependentList.selected,
          };
        } else {
          return { ...categoryDependentList };
        }
      }),
    });
  };
  return (
    <>
      <div
        className="card shadow-sm mb-3"
        onClick={handleCardClick}
        style={{ width: "15rem", cursor: "pointer" }}
      >
        <img
          className="card-img-top"
          src={process.env.PUBLIC_URL + "/dummyImage.png"}
          alt={title}
        />
        <div className={`card-body ${selected ? "bg-danger text-white" : ""}`}>
          <p className="card-title">{title}</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
