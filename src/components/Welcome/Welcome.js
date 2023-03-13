//Imports from LIBRARIES
import { useHistory } from "react-router-dom";

//Imports from IMAGES
import imgBottomBg from "../../Style/Images/bottom-bg.svg";
import imgLogo2 from "../../Style/Images/logo2.png";
import imgForSale from "../../Style/Images/for-sale-pana.svg";
import IdleTimer2 from "../Miscellaneous/Idletimer2";
import IdleTimer1 from "../IdleTimer/IdleTimer";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { isPlatform } from "@ionic/react";
import { getPlatforms } from "@ionic/react";
import { Spinner } from "../Miscellaneous/Spinner";
import userGuide from "../../Style/UserGuide.pdf";
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

  return (
    <ion-content>
      <div className="welcome-bg">
        <div className="body ">
          <div className=" h-100">
            <div className="p-60 position-relative">
              <img
                className="d-flex m-auto pt-2"
                src={imgLogo2}
                alt="Home connections logo"
              />
            </div>
            <div className="container mt-9m d-set">
              <div className="row px-4 px-md-0 conect">
                <div className="col p-3 text-center">
                  <img
                    src={imgForSale}
                    className="img-fluid pt-5 mt-3"
                    alt="Properties for rent "
                  />
                </div>
                <div className="text-center px-4">
                  <p className="font_20 mb-0 text-color l_h_26 ff-reg">
                    Welcome to
                  </p>
                  <h2 className="ff-bold font_28 text-color m_0">
                    Home Connections
                  </h2>
                  <p className="font_14 mb-0 text-color l_h_26 ff-reg">
                    choice-based lettings app
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4"></div>
          <div className="d-flex justify-content-center overflow-auto get-start">
            <button
              className="btn bg-white position-fixed w-10 mt-5 font_14 py-2 ff-semi blue-btn letter-s getStarted"
              onClick={clickGetStarted}
            >
              Get started
            </button>
            <img src={imgBottomBg} alt="" />
          </div>
        </div>
      </div>
    </ion-content>
  );
};
