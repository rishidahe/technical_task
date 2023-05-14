import React from "react";

function AboutUs() {
  return (
    <div className="bg-white my-3">
      <div className="container text-center py-5">
        <h1 className="text-center font-weight-light">
          <span className="text-info">About</span> Us
        </h1>
        <div className="lead pb-3">
          We provide the Front and the Back of a configuration.
        </div>
        <div className="row">
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What we can do ?</h5>
            <p className="text-justify">
              Vehicle configurator project is designed to allow customers to
              customize and personalize their vehicles according to their
              preferences and needs. This project provides a wide range of
              options for customers to select from, such as the make and model
              of the vehicle, its color, interior design, engine size, and other
              features.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What are we doing currently ?</h5>
            <p className="text-justify">
              We provide a digital solution that allows users to customize
              various aspects and parts of a vehicle. Typically, the user is
              presented with an interface and multiple menus, with a vehicle
              visualization taking up most of the space. Accordingly, changes
              made in the menus tend to affect the visualization immediately.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>How we can help You ?</h5>
            <p className="text-justify">
              We can also help to reduce costs associated with inventory
              management, as it allows manufacturers to produce only those
              vehicles that have been ordered and configured by customers.
              Overall, a vehicle configurator is essential for automakers and
              dealerships looking to improve customer engagement, increase
              sales, and reduce costs.
            </p>
          </div>
          <div className="col-12 col-md-6 px-5 pt-5">
            <h5>What do we believe in ?</h5>
            <p className="text-justify">
              We believe that this site can be an effective sales and marketing
              tool. By allowing customers to visualize their customized vehicle
              and providing them with accurate pricing information, a vehicle
              configurator project can help to generate leads and convert them
              into sales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
