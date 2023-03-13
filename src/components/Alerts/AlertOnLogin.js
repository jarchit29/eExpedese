import React from "react";
import { IonAlert, IonPage } from "@ionic/react";
import { App as app } from "@capacitor/app";

const AlertOnLogin = (props) => {
  return (
    <IonPage>
      <IonAlert
        isOpen={props.showError}
        onDidDismiss={() => props.setShowError(false)}
        cssClass="my-custom-class"
        header='Error login!'
        // subHeader='Please check your details and try again.'
        message='Please check your details and try again.'
        buttons={[
          {
            text: "Ok",
            role: "cancel",
            cssClass: "Err_Login-btn",
            handler: () => {
              props.setShowError(false);
            },
          },
        ]}
      />
    </IonPage>
  );
};

export default AlertOnLogin;
