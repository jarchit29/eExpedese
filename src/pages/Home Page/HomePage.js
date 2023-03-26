import { useState, useEffect, useRef } from "react";
import { Header } from "../../components/Miscellaneous/Header";
import { BottomNavBar } from "./BottomNavBar";
import { App as app } from "@capacitor/app";
import { setStatus } from "../../redux/AlertStatus";
import AlertOnExit from "../../components/Alerts/AlertOnExit";
import { Capacitor } from "@capacitor/core";
import { createGesture, Gesture } from "@ionic/react";
import { useDispatch  } from "react-redux";   
import UserDashBoard from "../UserDashBoard/UserDashBoard";
import { DashboardHeader } from "../../components/Miscellaneous/DashBoardHeader";
import { useHistory } from "react-router-dom";

// Import images 
import imgBmi from "../../Style/Images/bmi.svg"
import imgWeight from "../../Style/Images/bmi.svg"
import imgHeight from "../../Style/Images/height.svg"

const HomePage = () => {

  // Imports 
  let history = useHistory();

  //Use State for setting page

  const [page, setPage] = useState("Home");
  const [showAlert, setShowAlert] = useState(false);

  const swipeGesture = useRef(createGesture({ onMove: true }));
  // const swipeGesture = useRef(null);

  // Harcoded Jsons
  const userHeaderData = [

    {Value :"66" , Unit :"kg", icon:imgWeight, Attribute:"Weight" , Date:"10/03/2023"},
    {Value :"177" , Unit :"cm", icon:imgHeight , Attribute:"Height" , Date:"10/03/2023"},
    {Value :"22.6" ,  icon:imgBmi , Attribute:"BMI" , Date:"10/03/2023"},

  ]

let dispatch = useDispatch();
  //TODO: add ionic-alert box to exit app

  let onProfileIcon = ()=>{
    
    history.push("/EditProfile")
  }


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
        <DashboardHeader DashboardHeaderTitle="Welcome Archit"  salutation="Good Morning " userInfo={true} data={userHeaderData} onClick={onProfileIcon} />

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