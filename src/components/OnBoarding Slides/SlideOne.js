import logo from "../../Style/Images/logo3.png";
import welcomeLogo from "../../Style/Images/welcome-logo.png";
import slideImg1 from "../../Style/Images/slide_img1.png";
import slideImg2 from "../../Style/Images/slide_img2.png";
import slideImg3 from "../../Style/Images/slide_img3.png";
import slideImg4 from "../../Style/Images/slide_img4.png";
import slideImg5 from "../../Style/Images/slide_img5.png";
import { useHistory } from "react-router-dom";
import { IonButton } from "@ionic/react";

const SlideOne = () => {
  let history = useHistory();
  const handleSkip = () => {
    localStorage.setItem("firstTimeOnboarding", "false");
    history.push("/PortalList");
  };

  return (
    <>
      <div id="onboardingCntr">
        <div className="wel-logo">
          <a href="#">
            {/* <img src={logo} alt="homeconnection logo" /> */}
          </a>
        </div>
        <div className="welcome-logo">
          {/* <img src={welcomeLogo} alt="welcome logo " /> */}
        </div>
        <div className="prop-detail">
          <h3 className="ff-reg font_20 white">
            <span className="ff-bold  font_28 white">Order Medicine Online</span>
          </h3>
          <p className="ff-reg font_18 white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit reprehenderit obcaecati dolor officia eius tempora beatae necessitatibus, quisquam saepe veritatis voluptatem explicabo hic.
          </p>
        </div>

          {/* <div className="mt-80">
          <button type="button" class="btn btn-lg btn-outline-primary rounded-pill " onClick={()=>{history.push("/SlideTwo")}}>Next</button>
          </div> */}

      

        <button
          className="ff-semi skip font_18 white"
          onClick={() => {
            history.push("/PortalList");
            localStorage.setItem("firstTimeOnboarding", "false");
          }}
        >
          Skip
        </button>

        <div className="clearfix"></div>
      </div>
    </>
  );
};

export default SlideOne;
