import { useState, useEffect, useRef } from "react";
import { Header } from "../../components/Miscellaneous/Header";
import { BottomNavBar } from "./BottomNavBar";
import { App as app } from "@capacitor/app";
import { setStatus } from "../../redux/AlertStatus";
import AlertOnExit from "../../components/Alerts/AlertOnExit";
import { Capacitor } from "@capacitor/core";
import { createGesture, Gesture } from "@ionic/react";
import { useDispatch  } from "react-redux";   
import UserDashBoard from "../UserDashBoard";

const HomePage = () => {
  //Use State for setting page

  const [page, setPage] = useState("Home");
  const [showAlert, setShowAlert] = useState(false);

  const swipeGesture = useRef(createGesture({ onMove: true }));
  // const swipeGesture = useRef(null);

let dispatch = useDispatch();
  //TODO: add ionic-alert box to exit app

  useEffect(() => {
    if (Capacitor.isNative) {
      app.addListener("backButton", (e) => {
        if (window.location.pathname === "/HomePage") {
          // Show A Confirm Box For User to exit app or
          dispatch(setStatus(true));
          setShowAlert(true);
        }
      });
    }
  }, []);

  //! setting swipe to go back gesture to false in homepage
  useEffect(() => {
    let gesture = createGesture({
      el: swipeGesture.current,
      threshold: 0,
      gestureName: "my-gesture",
      gesturePriority: 40.5, // priority of swipe to go back is 40
      onMove: (ev) => {
        console.log(ev);
        ev.deltaX > 100 && setShowAlert(true)
    
      },
    });
    gesture.enable();
  });

  return (
    <ion-content ref={swipeGesture}>

      <div>
        <Header HeaderTitle={page} backArrow={true} hamBurgerMenu={false} />

        {/* <SideMenuItems setPage={setPage} /> */}

        {page==="Home" && <UserDashBoard/>}

        <BottomNavBar setPage={setPage} page={page} />
        
      </div>

      {showAlert && (
        <AlertOnExit showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
      
    </ion-content>
  );
};

export default HomePage;

//10596 295112