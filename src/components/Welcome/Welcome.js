//Imports from LIBRARIES
import { useHistory } from "react-router-dom";
import ButtonBlock from "../Buttons/ButtonBlock";

// import slide1 from "../../Style/Images/slide-1.jpg";

// import { IonAlert, IonPage,IonContent } from "@ionic/react";
// import { App as app } from "@capacitor/app";

export const Welcome = () => {
  var options = {
    share: true, // default is false
    closeButton: false, // default is true
    copyToReference: true, // default is false
    headers: "", // If this is not provided, an exception will be triggered
    piccasoOptions: {}, // If this is not provided, an exception will be triggered
  };

  let history = useHistory();
  let clickGetStarted = () => {
    history.push("/PortalList");
    localStorage.setItem("firstTimeOnboarding", "false");
  };

  let onButtonClick =()=>{
    history.push("/Login")
  }

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
            <span className="ff-bold  font_28 white">Consult Doctors at home</span>
          </h3>
          <p className="ff-reg font_18 white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis incidunt quaerat animi molestias quos corporis voluptates, nemo repellendus dignissimos minus amet nostrum impedit.
          </p>
        </div>
        
        <div className="mt-80">
          {/* <button type="button" class="btn btn-lg btn-outline-primary rounded-pill " onClick={()=>{history.push("/Login")}}>Get Started</button> */}

          <ButtonBlock label="GET STARTED" onButtonClick={onButtonClick}/>

          </div>

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
