import { IonRouterOutlet } from "@ionic/react";
import { useEffect, useState } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome";
import { PortalList } from "../pages/PortalList";
import { useDispatch } from "react-redux";
import HomePage from "../components/Home Page/HomePage";  
import Login from "../pages/Login";
import { Bids } from "../pages/Bids";
import { Messages } from "../components/Messages/Messages";
import OnboardingScreen from "../pages/OnboardingScreen";


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
          <Route exact path="/PortalList" component={PortalList} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/Bids" component={Bids} />
          <Route exact path="/Messages" component={Messages} />
        </>
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export default Routes;
