import React from "react";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="row py-5">
          <div className="col-12">
            <h2 className="text-light">Interested working with Us ?</h2>
            <button className="btn btn-outline-light btn-lg">Let's Talk</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">More Links</h5>
            <a href="/" className="text-light d-block">
              Home
            </a>
            <a href="/" className="text-light d-block">
              Blogs
            </a>
            <a href="/" className="text-light d-block">
              Projects
            </a>
            <a href="/" className="text-light d-block">
              Contact Us
            </a>
            <a href="/" className="text-light d-block">
              Write a Recommendation
            </a>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            <p>
              Vehicle Configurator is designed to allow customers to customize
              and personalize their vehicles according to their preferences and
              needs. This project provides a wide range of options for customers
              to select from, such as the make and model of the vehicle, its
              Colour, Interior Design, Engine Size, and other Features.
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">Social</h5>
            <a href="/">
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fab fa-github text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fas fa-envelope text-light h1 d-block"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-muted">
            <p>Copyright © Vehicle_Configurator 2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
