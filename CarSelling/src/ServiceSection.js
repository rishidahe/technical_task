import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceSection() {
  const services = [
    {
      id: 1,
      title: "Build Your Vehicle",
      imageUrl: "https://i.imgur.com/541Cbuj.jpg",
      // excerpt: "This is my project about....",
    },
    {
      id: 2,
      title: "Configur",
      imageUrl: "https://i.imgur.com/ZicduCU.jpg ",
      //excerpt: "This is my project about....",
    },
    {
      id: 3,
      title: "Modify",
      imageUrl: "https://media.istockphoto.com/id/183545763/photo/neon-anatomy-of-an-automobile-on-black-background.jpg?s=612x612&w=0&k=20&c=ErNg88nH31Sex3llCY1CpSaykHlk_9HaEVe94Rcyg7I=",
      //excerpt: "This is my project about....",
    },
  ];
  return (
    <div className="bg-light w-100 pt-3 pb-3">
      <div className="container text-center my-5 pt-3">
        <h1 className="font-weight-light">
          Our <span className="text-info"> Services</span>
        </h1>
        <div className="lead ">We give following services.</div>
        <div className="row my-5 pt-3">
          {services.map((project) => (
            <div key={project.id} className="col-12 col-md-4 my-2">
              <ServiceCard project={project} />
            </div>
          ))}
        </div>
        <div className="my-5">
          {/* <a href="/" className="text-dark text-right">
            <h5>
              All Services{" "}
              <i className="fas fa-solid fa-circle-arrow-right align-middle"></i>
            </h5>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
