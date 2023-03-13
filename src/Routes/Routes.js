import { IonRouterOutlet } from "@ionic/react";
import { useEffect, useState } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome";
import { PortalList } from "../pages/PortalList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import Login from "../components/Login";
import { login } from "../redux/Authentication";
import HomePage from "../components/Home Page/HomePage";
import Filter from "../pages/Filter";
import { PropertyDetail } from "../components/Properties/Details/PropertyDetail";
import { GetDirectionsFuntionCompo } from "../components/Properties/Map/GetDirectionsFuntionCompo";
import { MessagesDetail } from "../components/Messages/MessagesDetail";
// import Login from "../pages/Login";

import CurrentBids from "../components/Bids/CurrentBids";
import Declined from "../components/Bids/Declined";
import OfferedToOthers from "../components/Bids/OfferedToOthers";
import PreviousBids from "../components/Bids/PreviousBids";
import ShortListedBids from "../components/Bids/ShortListedBids";
import UnderReview from "../components/Bids/UnderReview";
import OfferedBids from "../components/Bids/OfferedBids";
import WithdrawnBids from "../components/Bids/WithdrawnBids";
import LetBids from "../components/Bids/LetBids";
import Login from "../pages/Login";
import { Bids } from "../pages/Bids";
import { Messages } from "../components/Messages/Messages";
import FullImageOfProperty from "../components/fullimageofProperty/FullImageOfProperty";
import OnboardingScreen from "../pages/OnboardingScreen";

// import  MapContainer from "../AppComponent/GetDirections";

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
          {firstTimeOnboarding === "false" ? (
            <Route exact path="/" component={Welcome} />
          ) : (
            <Route exact path="/" component={OnboardingScreen} />
          )}

          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/OnboardingScreen" component={OnboardingScreen} />
          <Route exact path="/PortalList" component={PortalList} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Filter" component={Filter} />
          <Route exact path="/HomePage" component={HomePage} />
          <Route exact path="/MessagesDetail" component={MessagesDetail} />
          <Route exact path="/PropertyDetail" component={PropertyDetail} />
          <Route
            exact
            path="/FullImageOfProperty"
            component={FullImageOfProperty}
          />
          <Route
            exact
            path="/GetDirections"
            component={GetDirectionsFuntionCompo}
          />
          <Route exact path="/CurrentBids" component={CurrentBids} />
          <Route exact path="/OfferedBids" component={OfferedBids} />
          <Route exact path="/Declined" component={Declined} />
          <Route exact path="/OfferedToOthers" component={OfferedToOthers} />
          <Route exact path="/PreviousBids" component={PreviousBids} />
          <Route exact path="/ShortListedBids" component={ShortListedBids} />
          <Route exact path="/UnderReview" component={UnderReview} />
          <Route exact path="/WithdrawnBids" component={WithdrawnBids} />
          <Route exact path="/LetBids" component={LetBids} />
          <Route exact path="/Bids" component={Bids} />
          <Route exact path="/Messages" component={Messages} />
        </>
      </IonRouterOutlet>
    </IonReactRouter>
  );
}

export default Routes;
