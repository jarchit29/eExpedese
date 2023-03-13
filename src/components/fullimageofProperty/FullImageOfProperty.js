import React from "react";
import { useHistory } from "react-router";
import { useLocation } from "react-router";
import { Header } from "../Miscellaneous/Header";
import Slider from "react-slick";

const FullImageOfProperty = (props) => {
  let history = useHistory();
  const location = useLocation();
  const settings = {
    centerMode: true,
    dots: true,
    centerPadding: "40px",
    slidesToShow: 1,
    margin: "10px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  // console.log("in fullimage", location.state.propertyImage);

  return (
    <div>
      <Header
        backArrow={true}
        HeaderTitle={"full Image"}
        onBackArrow={() => history.goBack()}
      />

      <div className="fullImage">
          <Slider {...settings}>
        {location.state.propertyImage.map((elem) => {
            return <img src={elem} alt="property full img" />;
        })}
        </Slider>;
      </div>
    </div>
  );
};

export default FullImageOfProperty;
