import { useHistory } from "react-router-dom";

const SlideTwo = () => {
  let history = useHistory();
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
            <span className="ff-bold  font_28 white">Pill reminder</span>
          </h3>
          <p className="ff-reg font_18 white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis incidunt quaerat animi molestias quos corporis voluptates, nemo repellendus dignissimos minus amet nostrum impedit.
          </p>
        </div>
        
        {/* <div className="mt-80">
          <button type="button" class="btn btn-lg btn-outline-primary rounded-pill " onClick={()=>{history.push("/Welcome")}}>Next</button>
          </div> */}

        <button
          className="ff-semi skip font_18 white"
          onClick={() => {
            history.push("/Login");      
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

export default SlideTwo;
