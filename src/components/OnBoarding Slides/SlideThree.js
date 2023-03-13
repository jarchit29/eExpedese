import logo from "../../Style/Images/logo3.png";
import welcomeLogo from "../../Style/Images/welcome-logo.png";
import slideImg1 from "../../Style/Images/slide_img1.png";
import slideImg2 from "../../Style/Images/slide_img2.png";
import slideImg3 from "../../Style/Images/slide_img3.png";
import slideImg4 from "../../Style/Images/slide_img4.png";
import slideImg5 from "../../Style/Images/slide_img5.png";
import { useHistory } from "react-router-dom";

const SlideThree = () => {
  let history = useHistory();

  return (
    <>
      <div id="onboardingCntr">
        <div className="wel-logo">
          <a href="#">
            <img src={logo} alt="homeconnection logo" />
          </a>
        </div>
        <div className="welcome-logo">
          <img src={welcomeLogo} alt="welcome logo " />
        </div>
        <div className="prop-detail">
          <h3 className="ff-reg font_20 white">
            How to view your
            <span className="ff-bold  font_28 white">My bids</span>
          </h3>
          <p className="ff-reg font_18 white">
            You are able to see 'My bids' and this lists out all your current
            bids shortlisted bids previous bids etc.
          </p>
        </div>
        {/* <div className="welcomeArea">
          <div className="page-image">
            <div className="img-area">
              <img src={slideImg1} />
            </div>
            <div className="img-area">
              <img src={slideImg2} />
            </div>
            <div className="img-area">
              <img src={slideImg3} />
            </div>
            <div className="img-area">
              <img src={slideImg4} />
            </div>
            <div className="img-area">
              <img src={slideImg5} />
            </div>
          </div>
          <div className="clearfix"></div>
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

export default SlideThree;
