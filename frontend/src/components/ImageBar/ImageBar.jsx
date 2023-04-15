import React from "react";
import { Container } from "reactstrap";
import photo1 from "../../images/photo1.png";

const ImageBar = () => {
  return (
    <div className="imagebar">
      <Container>
        <div className="content">
          <div className="left-text">
            <h3 className="mb-3">About GoTravels</h3>
            <p>
              This company is a premium transportation service provider based in
              Istanbul, Turkey, specializing in luxury car rentals and transfers
              for tourists. With a focus on delivering a first-class experience,
              the company offers a range of high-end vehicles for hire,
              including luxury sedans, SUVs.
            </p>
          </div>
          <div className="image">
            <img loading="lazy" src={photo1} alt="logo" className="img-fluid" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImageBar;
