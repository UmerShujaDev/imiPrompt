import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <>
      <footer className="bg-dark text-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <p>&copy; {currentYear} My Website. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
