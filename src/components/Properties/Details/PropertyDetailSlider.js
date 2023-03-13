//Imports from Libraries
import Slider from "react-slick";
//Imports from Images
import imgSlide1 from "../../../Style/Images/slide-1.png";
import { useHistory } from "react-router";
import { useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";

export const PropertyDetailSlider = (props) => {
  let history = useHistory();
  const [indexx, setIndexx] = useState(1);
  // const handleClick = () => {
  //   history.push({
  //     pathname: "/FullImageOfProperty",
  //     state: { propertyImage: props.propertyImage },
  //   });
  // };

  const settings = {
    centerMode: true,
    dots: true,
    centerPadding: "40px",
    slidesToShow: 1,
    margin: "10px",
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
    // debugger
    // afterChange: function (indexx) {
    //   setIndexx(indexx + 1);
    // },
  };

  // for srl wrapper
  const options = {
    settings: {
      disableKeyboardControls: false,
      disableWheelControls: false,
    },
    caption: {
      captionAlignment: "start",
      captionColor: "#FFFFFF",
      captionContainerPadding: "0",
      captionFontFamily: "inherit",
      captionFontSize: "1.1rem",
      captionFontStyle: "inherit",
      captionFontWeight: "bold",
      captionTextTransform: "inherit",
      showCaption: true,
    },
    buttons: {
      showAutoplayButton: false,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: false,
      showNextButton: false,
      showPrevButton: false,
      showThumbnailsButton: false,
    },
    thumbnails: {
      showThumbnails: false,
    },
  };

  return (
    <div className="center  Pro-det">
      <div className="propSlider">
        <div className="badge rounded-pill bg-dark mx-3">
          {indexx}/{props.propertyImageCount}
        </div>
        <SRLWrapper options={options}>

        <Slider {...settings}>
          {props.propertyImage.map((element) => {
            return (
              <div key={props.advertNumber}>
                <img
                  key={props.advertNumber}
                  src={element}
                  alt={`Image ${
                    props.propertyImage.indexOf(element) + 1
                  } for advert number ${props.advertNumber}`}
                />
              </div>
            );
          })}
          {/* <img src= {imgSlide1} /> */}
        </Slider>
        </SRLWrapper>

      </div>
      <div className="clearfix"></div>
    </div>
  );
};
