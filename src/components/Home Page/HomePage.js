import { useState, useEffect, useRef } from "react";
import { Header } from "../Miscellaneous/Header";
import { BottomNavBar } from "./BottomNavBar";
import { PropertiesList } from "../Properties/List/PropertiesList";
import { Bids } from "../../pages/Bids";
import { Messages } from "../Messages/Messages";
import { SideMenuItems } from "./SideMenuItems";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setAreaList, setBuildList } from "../../redux/FilterOptions";
import qs from "qs";
import { useHistory } from "react-router-dom";
import { App as app } from "@capacitor/app";
import { setStatus } from "../../redux/AlertStatus";
import AlertOnExit from "../Alerts/AlertOnExit";
import { Capacitor } from "@capacitor/core";
import { createGesture, Gesture } from "@ionic/react";
// import swal from "sweetalert";
// import { login } from "../../redux/Authentication";
// import { useIdleTimer } from "react-idle-timer";
// import {
//   IdleTimerProvider,
//   IdleTimerConsumer,
//   IIdleTimerContext,
//   IdleTimerContext,
//   useIdleTimerContext,
// } from "react-idle-timer";
import IdleTimer2 from "../Miscellaneous/Idletimer2";
import swal from "sweetalert";
import { setApplicantId, setApplicantStatus, setBedroom, setBedspace, setCurrencyBand, setCurrentPoints, setDob, setQualifyingDate, setSessionId } from "../../redux/ResponseFromLogin";
import { setPartnerId } from "../../redux/PartnerId";

const HomePage = () => {
  //Use State for setting page

  const [page, setPage] = useState(localStorage.getItem("Page"));
  const [showAlert, setShowAlert] = useState(false);

  const swipeGesture = useRef(createGesture({ onMove: true }));
  // const swipeGesture = useRef(null);

  const { React_App_Base_URL } = process.env;

  const { Id } = useSelector((state) => state.PartnerId);
  const responseFromPartnerId = useSelector((state)=>state.PartnerId)

  const dispatch = useDispatch();
  let history = useHistory();

  //get  build list
  var Data = {
    partnerId: localStorage.getItem("LocalId"),
    options: "",
  };

  // This is for taking data from local storage and setting back to Redux
  //?This is done beacuse of DEEP LINKS
  useEffect(() => {
   console.log(responseFromPartnerId.isReduxEmpty)
   responseFromPartnerId.isReduxEmpty===true && setApplication();

  }, [])

  let setApplication = ()=>{
    const partnerId = localStorage.getItem("LocalId");
  const str = JSON.parse(localStorage.getItem("LocalApplicantId"))

    // console.log(JSON.parse(localStorage.getItem("LocalApplicantId")))
    // console.log(str.sessionId)
    // console.log(str.loginResponseJsonList[0].applicantId)
    
    dispatch(setSessionId(str.sessionId)) 
    dispatch(setApplicantId(str.loginResponseJsonList[0].applicantId));
    dispatch(setPartnerId(partnerId));

    
    // Side menu items
    dispatch(
      setApplicantStatus(
        str.loginResponseJsonList[0].applicantStatus
      )
    ) 
 
    dispatch(
      setBedroom(str.loginResponseJsonList[0].bedroom)
    ) 
    dispatch(
      setBedspace(str.loginResponseJsonList[0].bedspace)
    ) 
    dispatch(setDob(str.loginResponseJsonList[0].DOB)) 
    dispatch(
      setQualifyingDate(
        str.loginResponseJsonList[0].qualifyingDate
      )
    ) 
    dispatch(
      setCurrentPoints(
        str.loginResponseJsonList[0].currentPoints
      )
    ) 
    dispatch(
      setCurrencyBand(
        str.loginResponseJsonList[0].currencyBand
      )
    )
    localStorage.setItem("Page","Properties")
  }

  useEffect(() => {
    async function fetchAreaTypes() {
      let url = `${React_App_Base_URL}/getAreaList`; //~Env file
      const res = await axios({
        method: "post",
        url,
        data: qs.stringify(Data),
      });
      dispatch(setAreaList(res.data));
    }
    fetchAreaTypes();
  }, [Id]);

  //get build list
  useEffect(() => {
    async function fetchBuildTypes() {
      let url = `${React_App_Base_URL}/getPropertyBuildType`; //~Env File
      const res = await axios({
        method: "post",
        url,
        data: qs.stringify(Data),
      });
      dispatch(setBuildList(res.data));
    }
    fetchBuildTypes();
  }, []);

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
      <IdleTimer2 />

      <div>
        <Header HeaderTitle={page} backArrow={false} hamBurgerMenu={true} />

        <SideMenuItems setPage={setPage} />

        {page === "Properties" && <PropertiesList />}
        {page === "My bids" && <Bids />}
        {page === "My messages" && <Messages />}

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