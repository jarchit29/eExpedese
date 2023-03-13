//Import from libraries 

import Slider from "react-slick";

export const AppliedFilterSlider = (props) => {
    const settings = {
        centerMode: false,
        dots: true,
        centerPadding: "0",
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "0",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: "0",
              slidesToShow: 2,
            },
          },
        ],
      };
      return (
     
    
        <div className={props.classFilterBox}>
          <h4 className="font_10 ff-reg">{props.Filetrtitle}</h4>
          <Slider {...settings}>
            <div className="center">
              <div>
                <span className="fill font_10 ff-semi">
                  Bedrooms : 1<a href="#">x</a>
                </span>
              </div>
            </div>
            <div>
              <span className="fill font_10 ff-semi">
                Bedrooms : 1<a href="#">x</a>
              </span>
            </div>
            <div>
              <span className="fill font_10 ff-semi">
                Bedrooms : 1<a href="#">x</a>
              </span>
            </div>
    
            <div className="clearfix"></div>
          </Slider>
        </div>
      )
        
};
