import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/Login";
import Page from "../pages/Page";
import Menu from "../components/Menu";

const Routes = () => {
  return (
    <IonReactRouter>


      <IonRouterOutlet>
        <Route exact path="/" component={Login} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/DashBoard" component={DashBoard}>
        
        </Route>
      </IonRouterOutlet>    


    </IonReactRouter>
  );
};

export default Routes;
