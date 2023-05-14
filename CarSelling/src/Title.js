import React from "react";
import car1 from "./about_us.png";

function Title(props) {
  // const name = "Rishikesh Dahe.";
  // const leadText = "I am a Software Developer from INDIA";
  const { leadText } = props;
  return (
    <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img className="img-fluid w-150 mt-5" src={car1} alt="Title" />
        </div>
        <div className="col-12 col-md-6">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, Welcome to
          </div>
          <h4 className="font-weight-light" style={{ fontSize: "50px" }}>
            <span className="text-info">{leadText}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Title;
