import React from "react";
import { IonAlert, IonPage, IonContent } from "@ionic/react";
import { App as app } from "@capacitor/app";
import {Plugins} from '@capacitor/core';
import { isPlatform } from "@ionic/react";
const { ExitAppIosPlugin } = Plugins;


const AlertOnExit = (props) => {

  return (
    <IonContent>
      <IonPage>
        <IonAlert
          isOpen={props.showAlert}
          onDidDismiss={() => props.setShowAlert(false)}
          cssClass="exit-alert"
          header={"Exit this app"}
          // subHeader={'Subtitle'}
          message={"Are you sure you want to exit?"}
          
          buttons={[
            {
              text: "Cancel",
              role: "cancel",
              cssClass: "exit_cancel",
              handler: () => {
                props.setShowAlert(false);
              },
            },
            {
              text: "Exit",
              cssClass: "exit_Confirm",
              handler: () => {
                
                isPlatform("android") ? app.exitApp(): ExitAppIosPlugin.killApp().then();
                
                
              },
            },
          ]}
        />
      </IonPage>
    </IonContent>
  );
};

export default AlertOnExit;
