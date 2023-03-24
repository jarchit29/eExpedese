import { IonApp } from "@ionic/react";
import { Provider } from "react-redux";
import React from "react";

// New
import { useEffect, useState, useRef } from "react";
import { Capacitor } from "@capacitor/core";
import { App as app } from "@capacitor/app";

import "./Style/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick-theme.css";
import "./Style/Style.css";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
// import './theme/variables.css';
import Routes from "./Routes/Routes";
import Store from "./redux/Storee";
import { useDispatch } from "react-redux";
import { setStatus } from "./redux/AlertStatus";
import { useSelector, RootStateOrAny } from "react-redux";
import AlertOnExit from "./components/Alerts/AlertOnExit";
import AlertSessionTimeOut from "./components/Alerts/AlertSessionTimeOut";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";


import { TextZoom } from "@capacitor/text-zoom";

const App: React.FC = () => {
  let history = useHistory();

  const { alertStatus } = useSelector(
    (state: RootStateOrAny) => state.AlertStatus
  );

  const dispatch = useDispatch();

  // uncomment for text zoom in ios

  // useEffect(() => {
  //   async function getTextZoom() {
  //     const { value } = await TextZoom.getPreferred();
  //     console.log("Text zoom is", value);
  //     TextZoom.set({ value });
  //   }
  //   getTextZoom();
  // }, []);

  return (
    <Provider store={Store}>
      <IonApp>
        <Routes />
      </IonApp>
    </Provider>
  );
};

export default App;
