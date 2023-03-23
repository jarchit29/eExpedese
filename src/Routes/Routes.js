import { IonRouterOutlet } from "@ionic/react";
import { useEffect, useState } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome";
import { useDispatch } from "react-redux";
import HomePage from "../pages/Home Page/HomePage";  
import Login from "../pages/Login";
import OnboardingScreen from "../pages/OnboardingScreen";
import SlideTwo from "../components/OnBoarding Slides/SlideTwo";
import Medicines from "../pages/UserDashBoard/Medicines";
import LabTests from "../pages/UserDashBoard/LabTests";
import DoctorConsults from "../pages/UserDashBoard/DoctorConsults";
import PillReminder from "../pages/UserDashBoard/PillReminder";
import { HealthRecords } from "../pages/UserDashBoard/HealthRecords";
import ChronicDiseases from "../pages/UserDashBoard/ChronicDiseases";
import EditProfile from "../pages/EditProfile";
import UploadPrescription from "../pages/UploadPrescription";


function Routes() {
  const [firstTimeOnboarding, setfirstTimeOnboarding] = useState();
  const dispatch = useDispatch();

  //checking if auth is true, skip login component
  // useEffect(() => {
  //   let authentication = JSON.parse(localStorage.getItem("auth") || "{}");
  //   if (authentication === "true") {
  //     dispatch(login(true));
  //   }
  // });
  // const { auth } = useSelector((state) => state.Authentication);

  //to check if app is opened on first time or not. Get the saved value from local storage.
  useEffect(() => {
    setfirstTimeOnboarding(localStorage.getItem("firstTimeOnboarding"));

    // console.log("firstTimeOnboarding", firstTimeOnboarding);
  }, []);

  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <>
          {/* {firstTimeOnboarding === "false" ? (
            <Route exact path="/" component={Welcome} />
          ) : (
            <Route exact path="/" component={OnboardingScreen} />
          )} */}

          <Route exact path="/" component={OnboardingScreen} />

          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/OnboardingScreen" component={OnboardingScreen} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path= "/SlideTwo" component={SlideTwo}/>
          <Route exact path="/Medicines" component={Medicines}/>
          <Route exact path="/LabTests" component={LabTests}/>
          <Route exact path="/DoctorConsults" component={DoctorConsults}/>
          <Route exact path="/PillReminder" component={PillReminder}/>
          <Route exact path="/HealthRecords" component={HealthRecords}/>
          <Route exact path="/ChronicDisease" component={ChronicDiseases}/>
          <Route exact path="/EditProfile" component={EditProfile}/>
          <Route exact path="/UploadPrescription" component={UploadPrescription}/>
          
        </>
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export default Routes;
