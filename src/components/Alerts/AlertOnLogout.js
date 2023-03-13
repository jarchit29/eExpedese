import React from "react";
import { IonAlert, IonPage, IonContent } from "@ionic/react";
import { useHistory } from "react-router";
import { login } from "../../redux/Authentication";
import { useDispatch } from "react-redux";
import { setLogoutText } from "../../redux/ResponseFromLogin";
import swal from "sweetalert";
import {
  setArea,
  setBuild,
  setBedroom,
  setGroundFloor,
  setAccesible,
  setSheltered,
  setParking,
  setGarden,
  setSearchByText, } from "../../redux/FilterOptions";

export const AlertOnLogout = (props) => {
  let history = useHistory();
  let dispatch = useDispatch();
  return (
    <IonContent>
      <IonPage>
        <IonAlert
          isOpen={props.showAlert}
          onDidDismiss={() => props.setShowAlert(false)}
          cssClass="exit-alert"
          header={"Logout this app"}
          // subHeader={'Subtitle'}
          message={"Are you sure you want to logout.?"}
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
              text: "Logout",
              cssClass: "logout_confirm",
              handler: () => {
                swal({
                  icon: "success",
                  text: "Successfully logged out",
                  closeOnClickOutside: false,
                }).then(() => {
                  dispatch(login(false));
                  dispatch(setArea(null));

                  dispatch(setBuild(null));

                      dispatch(login(false));
                      dispatch(setArea(null));
                      dispatch(setBuild(null));
                      dispatch(setBedroom([]));
                      dispatch(setGroundFloor("N"));
                      dispatch(setAccesible("N"));
                      dispatch(setSheltered("N"));
                      dispatch(setParking("N"));
                      dispatch(setGarden("N"));
                      dispatch(setSearchByText(""));
                    dispatch(setLogoutText("Successfully logged out"));
                    history.push("./PortalList")
                    localStorage.setItem("auth", JSON.stringify("false"));

                  dispatch(setGroundFloor("N"));

                  dispatch(setAccesible("N"));

                  dispatch(setSheltered("N"));

                  dispatch(setParking("N"));

                  dispatch(setGarden("N"));

                  dispatch(setSearchByText(""));
                  dispatch(setLogoutText("Successfully logged out"));
                  history.push("./PortalList");
                  localStorage.setItem("auth", JSON.stringify("false"));
                });

                // dispatch(login(false));
                // dispatch(setLogoutText("Successfully logged out"));
                // history.push("./PortalList")
                // localStorage.setItem("auth", JSON.stringify("false"));

                // history.push("./PortalList", { SuccesfullyLoggedout: true });
              },
            },
          ]}
        />
      </IonPage>
    </IonContent>
  );
};
