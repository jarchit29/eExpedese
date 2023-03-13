//Imports from Libraries
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { Capacitor } from "@capacitor/core";
import { App as app } from "@capacitor/app";
import { setStatus } from "../redux/AlertStatus";
import { Browser } from "@capacitor/browser";
import { InAppBrowser } from "@ionic-native/in-app-browser";

// androidxBrowserVersion='1.4.0' ~ put that in variables.gradle for android

//Imports from Images
import imgLambeth from "../Style/Images/lambeth.png";
//Imports from common files
import {
  setIsReduxEmpty,
  setMfaIsMfaEnabled,
  setMfaIsThirdPartyConfigured,
  setMfaPartnerIdHr,
  setMfaPortalType,
  setPartnerId,
  setPartnerName,
} from "../redux/PartnerId";
//Imports from components
import { CardPortalList } from "../components/CardLayouts/CardPortalList";
import { Spinner } from "../components/Miscellaneous/Spinner";
import { Header } from "../components/Miscellaneous/Header";
import ErrorMessage from "../components/Miscellaneous/ErrorMessage";
import AlertOnExit from "../components/Alerts/AlertOnExit";
import swal from "sweetalert";
import { setLogoutText } from "../redux/ResponseFromLogin";
import { createGesture, Gesture } from "@ionic/react";
import { eventNames } from "process";

export const PortalList = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [portalListArray, setPortalListArray] = useState([]);
  const [code, getCode] = useState();
  const [updatedUrl, setUpdatedUrl] = useState("Open in cardova  ");
  const [openInCapacitor, setOpenInCapacitor] = useState("Open in capacitor ");
  const [localId, setLocalId] = useState();

  //For routing
  let history = useHistory();
  let location = useLocation();

  let onBackArrow = () => {
    history.push("/Welcome");
  };

  const swipeGesture = useRef(createGesture({ onMove: true }));

  //Base url for APi calls :)
  const { React_App_Base_URL } = process.env;

  // For in app browser

  // let openBrowser=()=>{

  //   // window.open((`https://support.microsoft.com/en-us/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79`,"_self"));
  //   // window.location.replace(`https://support.microsoft.com/en-us/office/mitigating-framesniffing-with-the-x-frame-options-header-1911411b-b51e-49fd-9441-e8301dcdcd79`,"_self");
  //   // window.location.replace("https://stackoverflow.com/questions/8454510/open-url-in-same-window-and-in-same-tab","_self");
  //   // window.open("https://stackoverflow.com/questions/8454510/open-url-in-same-window-and-in-same-tab","_self");
  //   // window.open("https://www.google.co.in/","_self");

  //   // const browser = code? InAppBrowser.create(`https://devlogin.homeconnections.org.uk/Unity/Login?Id=137&portalType=OLR&Code=${code}&returnURL=${window.location.href}`):console.log('missing');
  //   // const browser = InAppBrowser.create(`https://cblalpha.homeconnections.org.uk/MFACheck.jsp?result=true`);

  //   // window.location.replace("https://play.google.com/store/apps/details?id=com.ludo.king","_self");

  //   code? window.location.replace(`https://devlogin.homeconnections.org.uk/Unity/Login?Id=137&portalType=OLR&Code=${code}&returnURL=https://cblalpha.homeconnections.org.uk/MFACheck.jsp`,"_self"):console.log("Missing code");
  // }

  // let openUnity=()=>{

  //   // code ?window.location.replace((`https://devlogin.homeconnections.org.uk/Unity/Login?Id=137&portalType=OLR&Code=&returnURL=${window.location.href}`),'_self'):console.log('Missing code');

  //   const openCapacitorSite = async () => {

  //     // await Browser.open({ url: `https://cblalpha.homeconnections.org.uk/MFACheck.jsp?result=true`});

  //     // await Browser.open({ url: `https://play.google.com/store/apps/details?id=com.ludo.king`});
  //     // await Browser.open({ url: `https://pylononline.infoaxon.com/HomePage`});

  //     // await Browser.open({ url: `https://devlogin.homeconnections.org.uk/Unity/Login?Id=137&portalType=OLR&Code=${code}&returnURL=${window.location.href}` });

  //     Browser.addListener('browserFinished',(event)=>{

  //       console.log(event);
  //       setOpenInCapacitor('Opened once , browser finsihed working');

  //     })

  //   };

  //   // code?openCapacitorSite():console.log("missing");
  //   openCapacitorSite();

  // }

  //TODO:move to welcome page on back button click

  useEffect(() => {
    if (Capacitor.isNative) {
      app.addListener("backButton", (e) => {
        if (window.location.pathname === "/PortalList") {
          // Show A Confirm Box For User to exit app or
          history.push("/Welcome");
        }
      });
    }
  }, []);

  useEffect(() => {
    location.state !== undefined &&
      swal({
        icon: "success",
        text: "Successfully logged out",
      });
  }, []);

  useEffect(() => {
    let gesture = createGesture({
      el: swipeGesture.current,
      threshold: 0,
      gestureName: "my-gesture",
      gesturePriority: 40.5, // priority of swipe to go back is 40
      onMove: (ev) => {
        console.log(ev);
        ev.deltaX > 100 && setShowAlert(true);
      },
    });
    gesture.enable(true);
  });

  useEffect(() => {
    console.log(navigator.onLine);
  }, [navigator.onLine]);

  // This below api call is for finding is MFA enabled or not .! For not this is just for hart dc that's why passing hardcoded url and headers

  useEffect(() => {
    isMfaEnabled();
  }, []);

  let isMfaEnabled = async () => {
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      id: "137",
      portalType: "OLR",
      userId: "",
      password: "",
      partnerApiKey:
        "DI0IretegKB4f3IbVwzG9mKVS8GxqLrjFpBpU8EZwWX2lzYJh8pxa8XWpoWQvfw3HgtBBXhGF4ZzK2lBRJiWwQ==",
    });
    var config = {
      method: "post",
      url: "https://cblalpha.homeconnections.org.uk/ServiceInterface/services/rest/MFAChecker",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    let result = await axios(config)
      .then((res) => {
        dispatch(setMfaIsMfaEnabled(res.data.IsMFAEnabled)) &&
          dispatch(
            setMfaIsThirdPartyConfigured(res.data.IsThirdPartyConfigured)
          ) &&
          dispatch(setMfaPortalType(res.data.PortalType)) &&
          dispatch(setMfaPartnerIdHr(res.data.PartnerID));
      })
      .catch((error) => {
        console.log("Error fetching " + error);
      });
  };

  // In api call I have sent the data required for calling get code api in redux
  // The code for getCodApi for MFA shall be continued in Login page only

  //TODO: Shift on Login page

  // useEffect(() => {
  //   getMfaCode();
  // }, []);

  // let getMfaCode = async () => {
  //   var axios = require("axios");
  //   var qs = require("qs");
  //   var data = qs.stringify({
  //     id: "137",
  //     portalType: "OLR",
  //     userName: "149",
  //     password: "614464630",
  //   });
  //   var config = {
  //     method: "post",
  //     url: `${React_App_Base_URL}/MFAValidator`,
  //     headers: {
  //       // partnerApiKey:
  //       //   "DI0IretegKB4f3IbVwzG9mKVS8GxqLrjFpBpU8EZwWX2lzYJh8pxa8XWpoWQvfw3HgtBBXhGF4ZzK2lBRJiWwQ==",
  //       // "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     data: data,
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(response.data);
  //       getCode(response.data.Code);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       console.log("MFA error");
  //     });
  // };

  //For redux

  let fetchPartners = async () => {
    //Function for Api call using axios

    let config = {
      method: "post",
      url: `${React_App_Base_URL}/getPartnerList`,
      headers: {},
    };

    let res = await axios(config);

    //Sorting AlGO for portal list

    let comparee = (a, b) => {
      let valA = valuesStore(a);
      let valB = valuesStore(b);

      if (valA > valB) {
        return 1;
      } else if (valB > valA) {
        return -1;
      }

      return 0;
    };

    let valuesStore = (element) => {
      return element.partnerId === 1022
        ? "Homefinder UK"
        : element.partnerId === 1019
        ? "Clarion Housing"
        : element.partnerId === 1018
        ? "Housing Moves"
        : element.partnerId === 1032
        ? "Croydon"
        : element.partnerId === 1034
        ? "Loreburn"
        : element.partnerName;
    };
    setPortalListArray(res.data.partnerJsonList.sort(comparee));

    return res;
  };

  const { error, data, status, isLoading } = useQuery(
    "keyPortalList",
    fetchPartners,
    {
      retry: 2,
      cacheTime: 0,
    }
  );

  return (
    <ion-content ref={swipeGesture}>
      <ion-scroll scrollY="true">
        <div className="body ">
          <Header
            backArrow={true}
            hamBurgerMenu={false}
            HeaderTitle="Landlord"
            onBackArrow={onBackArrow}
          />
          <div className="row  mx-4 mt-80">
            <p className="ff-semi font_16 pt-4 px-0 ">
              Please choose your landlord below
            </p>
          </div>

          {/* Below is loader , success and errors  */}

          {navigator.onLine ? (
            <></>
          ) : (
            <>
              <ErrorMessage
                errorMessage={`We have experienced a connection error. Please check your internet connection and try again`}
                networkImage={true}
              />
            </>
          )}

          {status === "loading" && navigator.onLine && <Spinner />}

          {status === "error" && navigator.onLine && (
            <>
              <ErrorMessage
                errorMessage={`We have experienced a connection error. Please check your internet connection and try again`}
                networkImage={true}
              />
            </>
          )}

          {/* Below is for mapping with Api using react query library */}

          {status === "success" &&
            navigator.onLine &&
            portalListArray.map((element) => {
              //Below code is for printing specific partners
              // {console.table(element)}

              if (
                element.partnerId < 4 ||
                element.partnerId === 12 ||
                element.partnerId === 14 ||
                element.partnerId === 1050 ||
                element.partnerId === 1034 ||
                element.partnerId === 1004 ||
                element.partnerId === 1023 ||
                element.partnerId === 1011 ||
                element.partnerId === 1008 ||
                element.partnerId === 1019 ||
                element.partnerId === 1022 ||
                element.partnerId === 1032
              ) {
                return (
                  <>
                    {/* <button onClick={openBrowser}>
                    {updatedUrl}
                  </button>  */}
                    {/* <button onClick={openUnity}>
                    {openInCapacitor}
                  </button> */}

                    <CardPortalList
                      //set to local ID
                      cardClick={() => {
                        // window.location.replace('/Welcome');
                        localStorage.setItem("Checking", "Test for signed APK");
                        history.push("/Login");
                        localStorage.setItem("Page", "Properties");
                        dispatch(setIsReduxEmpty(false));
                        setLocalId(element.partnerId);
                        localStorage.setItem("LocalId", element.partnerId);
                        localStorage.setItem("LocalName", element.partnerName);

                        dispatch(setPartnerId(element.partnerId)); //dispatching an action to set 'Id' state into store
                        // dispatch(setLogoutText(null))
                        dispatch(
                          setPartnerName(
                            element.partnerId === 1022
                              ? "Homefinder UK"
                              : element.partnerId === 1019
                              ? "Clarion Housing"
                              : element.partnerId === 1018
                              ? "Housing Moves"
                              : element.partnerId === 1032
                              ? "Croydon"
                              : element.partnerId === 1034
                              ? "Loreburn"
                              : element.partnerName
                          )
                        );
                      }}
                      key={element.partnerId}
                      partnerName={
                        element.partnerId === 1022
                          ? "Homefinder UK"
                          : element.partnerId === 1019
                          ? "Clarion Housing"
                          : element.partnerId === 1018
                          ? "Housing Moves"
                          : element.partnerId === 1032
                          ? "Croydon"
                          : element.partnerId === 1034
                          ? "Loreburn"
                          : element.partnerName
                      }
                      // partnerImage={element.partnerLogoImageURL}
                      partnerImage={element.partnerLogoImageURL}
                    />
                  </>
                );
              }
            })}
        </div>
      </ion-scroll>
      {showAlert && (
        <AlertOnExit showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </ion-content>
  );
};
