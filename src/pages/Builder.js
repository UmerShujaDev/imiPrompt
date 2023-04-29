import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "./../Components/Footer";
import SideBar from "../Components/sidebar/SideBar";
import Body from "../Components/mainBody/Body";

const Builder = () => {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-3">
            <SideBar />
          </div>
          <div className="col-lg-9">
            <Body />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Builder;
