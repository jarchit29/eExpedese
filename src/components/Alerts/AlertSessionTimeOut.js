import React from "react";
import { IonAlert, IonPage, IonContent } from "@ionic/react";
import { App as app } from "@capacitor/app";
// import { useHistory } from "react-router-dom";

const AlertSessionTimeOut = (props) => {
//   let history = useHistory();
  const handleClick = () => {
    // history.push("/Login");
  };
  return (
    <IonContent>
      <IonPage>
        <IonAlert
          isOpen={props.showAlert}
          onDidDismiss={() => props.setShowAlert(false)}
          cssClass="exit-alert"
          header={"Session time out"}
          // subHeader={'Subtitle'}
          message={"Please login again"}
          buttons={[
            {
              text: "Login again",
              cssClass: "exit_Confirm",
              handler: () => {
                props.alertHandler();
              },
            },
          ]}
        />
      </IonPage>
    </IonContent>
  );
};

export default AlertSessionTimeOut;
