//Import from Libraries
import { IonPage } from "@ionic/react";
import { Browser } from "@capacitor/browser";
import { RootStateOrAny, useSelector } from "react-redux";
import { useQuery } from "react-query";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Capacitor } from "@capacitor/core";
import { App as app } from "@capacitor/app";
//Import from Images
import logo from "../Style/Images/Logo.png";
import imgPassKey from "../Style/Images/pass-key.png";
import imgUser from "../Style/Images/user.png";
import imgBackArrow from "../Style/Images/arrow.png";
//Import from common files
import { login } from "../redux/Authentication";
import {
  setApplicantId,
  setApplicantStatus,
  setBedroom,
  setBedspace,
  setDob,
  setSessionId,
  setQualifyingDate,
  setCurrencyBand,
  setCurrentPoints,
  setIsCblUser,
  setDoubleAuthenticate,
  setHrRefId,
  setHrPass,
  setisMfaFlag,
} from "../redux/ResponseFromLogin";
import { SpinnerForLogin } from "../components/Miscellaneous/SpinnerForLogin";
import Swal from "sweetalert2";
import AlertOnLogin from "../components/Alerts/AlertOnLogin";

import { Spinner } from "../components/Miscellaneous/Spinner";
import { setPartnerId } from "../redux/PartnerId";

const Login = () => {
  const [showError, setShowError] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  //GetCode ~MFA
  const [code, getCode] = useState();
  const [mfaRedirect, setMfaRedirect] = useState();

  //Basic imports
  const { React_App_Base_URL } = process.env;
  const dispatch = useDispatch();
  let history = useHistory();

  //getting state of 'Id' from gobal store, where reducer is 'PartnerId'
  // dispatch(setPartnerId(localStorage.getItem("Id")))
  const partnerName = localStorage.getItem("LocalName");
  const { Id} = useSelector((state) => state.PartnerId);

  
  const responseFromLogin = useSelector((state) => state.ResponseFromLogin);

  //defining states for login & password inputs and partner Id fetched from redux store
  const [partnerId, setpartnerId] = useState();
  // const [url, seturl] = useState(`${React_App_Base_URL}/login`)
  const [inputs, setInputs] = useState({
    userId: "",
    pin: "",
  });

  // useEffect(() => {
  //   setPartnerId(localStorage.getItem("LocalId"))
    
  //   }, [])
  //     console.log(Id)

  //to check if ``user Id` and `password` is stored in local storage
  useEffect(() => {
    let savedCredentials = JSON.parse(localStorage.getItem("inputs") || "{}");
    let partnerId = JSON.parse(localStorage.getItem("Id") || "{}");
    let auth = JSON.parse(localStorage.getItem("auth") || "{}");
    setInputs(savedCredentials);
    setpartnerId(partnerId);
    dispatch(login(auth));
    //  (false);
  }, []);

  //fucntion to set `user Id` and `password ` to local storage
  const handleClickRememberMe = () => {
    localStorage.setItem("inputs", JSON.stringify(inputs));
    localStorage.setItem("Id", JSON.stringify(Id));
  };

  //function to handle change event
  const handleChange = (e) => {
    //destructing already existing values from `inputs` state and adding new values where key=name of feild & value=target.value
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setShowError(false);
  };

  //Open Unity ~ after getting MFA code

  useEffect(() => {
    code
      ? window.location.replace(
          `https://staglogin.homeconnections.org.uk/Unity/Login?Id=137&portalType=OLR&Code=${code}&returnURL=https://cblalpha.homeconnections.org.uk/MFACheck.jsp`,
          "_self"
        )
      : console.log("Missing code");
  }, [code]);

  var userData =
    Id == 1023 || Id == 12 || Id == 1022 || Id == 1034 || Id == 1050
      ? {
          cblPartnerId: Id,
          householdLoginId: inputs.userId,
          password: inputs.pin,
        }
      : { partnerId: Id, userId: inputs.userId, pin: inputs.pin };
  //Function for Api call using axios

  let urlCbl = `${React_App_Base_URL}/login`;
  //This is url for CBL login

  //These are urls for HR Login

  let urlHomeFinder =
    "https://testing.homeconnections.org.uk//HomeFinderUKHCWeb/CommonService.asmx/ValidateCBLLogin";
  let urlLorerburn =
    "https://testing.homeconnections.org.uk/LoreburnV3HCWEB/commonservice.asmx/ValidateCBLLogin";
  let urlHartDc =
    "https://testing.homeconnections.org.uk/HartDCHCWeb/CommonService.asmx/ValidateCBLLogin";
  let urlDevon =
    "https://testing.homeconnections.org.uk/DevonHCWeb/CommonService.asmx/ValidateCBLLogin";
  let urlRbkt =
    "https://testing.homeconnections.org.uk/KingstonHCWeb/CommonService.asmx/ValidateCBLLogin";

  let url =
    Id === 1023
      ? urlDevon
      : Id === 1022
      ? urlHomeFinder
      : Id === 1034
      ? urlLorerburn
      : Id === 1050
      ? urlHartDc
      : Id === 12
      ? urlRbkt
      : urlCbl;

  //fetchAuth is for CBL login

  let fetchAuth = async () => {
    // Id==1023 ? console.log("hi"):console.log("Bye");

    let res = await axios({
      method: "post",
      headers: {
        // "Accept": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      url,
      data: qs.stringify(userData),
    });
    return res;
  };

  //using react-query, useQuery api
  const { data, status, refetch } = useQuery("Authentiacting", fetchAuth, {
    refetchOnWindowFocus: false,
    enabled: false,
    cacheTime: 0,
  });

  //function to call `useQuery hook` manually on click
  const handleClick = (e) => {
    // let auth = JSON.parse(localStorage.getItem("auth") || "{}");
    // dispatch(login(auth));
    e.preventDefault();
    refetch();
    setShowSpinner(true);
    setTimeout(() => {
      setShowError(true);
      setShowSpinner(false);
    }, 5000);

    // console.table(data);
  };

  // Function and nesscities for double auth

  let doubleAuthenticateApi = async () => {
    console.log("Aya? double auth mein");
    const params = new URLSearchParams();

    params.append("partnerId", Id);
    params.append("userId", data.data.ReferenceId);
    params.append("pin", data.data.Password);
    params.append("options", " ");

    // console.log("Function is called " + params.values );
    // console.log("Partner ID  " + Id );

    let url = urlCbl;

    // This is for headers :-
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "*/*",
      },
    };

    // Axios
    await axios

      .post(url, params, config)

      .then((response) => {
        localStorage.setItem("LocalApplicantId", JSON.stringify(response.data));
        // console.log("success", response.data);
        response.data.message === "Applicant logged in successfully"
          ? dispatch(setIsCblUser("F")) &&
            dispatch(setSessionId(response.data.sessionId)) &&
            dispatch(
              setApplicantId(response.data.loginResponseJsonList[0].applicantId)
            ) &&
            dispatch(
              setApplicantStatus(
                response.data.loginResponseJsonList[0].applicantStatus
              )
            ) &&
            dispatch(
              setBedroom(response.data.loginResponseJsonList[0].bedroom)
            ) &&
            dispatch(
              setBedspace(response.data.loginResponseJsonList[0].bedspace)
            ) &&
            dispatch(setDob(response.data.loginResponseJsonList[0].DOB)) &&
            dispatch(
              setQualifyingDate(
                response.data.loginResponseJsonList[0].qualifyingDate
              )
            ) &&
            dispatch(
              setCurrentPoints(
                response.data.loginResponseJsonList[0].currentPoints
              )
            ) &&
            dispatch(
              setCurrencyBand(
                response.data.loginResponseJsonList[0].currencyBand
              )
            )
          : dispatch(setIsCblUser("T"));
      })
      .catch((error) => {
        console.log("Error fetching :- ", error);
      });
  };

  let doubleAutchFun = () => {
    // Comment if MFA not required

    // status === "success" &&
    //   responseFromLogin.isCblUser === "F" &&
    //   history.push("./HomePage");

    // UnComment for MFA-->

    status === "success" &&
      responseFromLogin.isCblUser === "F" &&
      Id != 1050 &&
      history.push("./HomePage");

    // This is done for MFA -> HartDC ,setting flag true via redux

    status === "success" &&
      responseFromLogin.isCblUser === "F" &&
      Id === 1050 &&
      dispatch(setisMfaFlag(true));

    // Dont touch below code in any sceario ..! not related to MFAF

    status === "success" && responseFromLogin.isCblUser === "T" ? (
      history.push("./PortalList") && alert("Can't log into CBL system")
    ) : (
      <></>
    );
  };

  // This is for running get code API on flag true which is set i doubleAuthFunc()
  useEffect(() => {
    responseFromLogin.isMfaFlag === true && mfaAuthenticateApi();
  }, [responseFromLogin.isMfaFlag]);

  // This is to fetch getCode API-->
  let mfaAuthenticateApi = async () => {
    console.log("inside mfa auth api ");

    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      id: "137",
      portalType: "OLR",
      // userName: 149,
      // password: 614464630,
      userName: inputs.userId,
      password: inputs.pin,
    });
    var config = {
      method: "post",
      url: `${React_App_Base_URL}/MFAValidator`,
      headers: {},
      data: data,
    };

    await axios(config)
      .then(function (response) {
        console.log(response.data);
        getCode(response.data.Code);
      })
      .catch(function (error) {
        console.log(error);
        console.log("MFA error");
      });
  };

  //Below was introduced beacuse of HR login
  useEffect(() => {
    status === "success" &&
      (Id === 1023 || Id === 12 || Id === 1022 || Id === 1034 || Id === 1050) &&
      inputs != null &&
      doubleAuthenticateApi();
  }, [status, showSpinner]);

  return (
    <ion-content>
      {Id !== 1050 && (
        <AlertOnLogin showError={showError} setShowError={setShowError} />
      )}

      {data && Id === 1050 && data.data.MessageCode === "-101" && (
        <AlertOnLogin showError={showError} setShowError={setShowError} />
      )}

      <IonPage>
        {showSpinner && <SpinnerForLogin />}
        {/* <SpinnerForLogin /> */}
        {/* <Spinner /> */}
        {status === "success" &&
        data.data.MessageCode === "1" &&
        responseFromLogin.isCblUser === "F" ? (
          dispatch(login(true)) &&
          dispatch(setHrRefId(data.data.referenceId)) &&
          dispatch(setHrPass(data.data.password)) &&
          doubleAutchFun()
        ) : status === "success" && data.data.isLoggedIn === true ? (
          dispatch(login(true)) &&
          dispatch(
            setApplicantStatus(
              data.data.loginResponseJsonList[0].applicantStatus
            )
          ) &&
          dispatch(setIsCblUser(true)) &&
          dispatch(setBedroom(data.data.loginResponseJsonList[0].bedroom)) &&
          dispatch(setBedspace(data.data.loginResponseJsonList[0].bedspace)) &&
          dispatch(setDob(data.data.loginResponseJsonList[0].DOB)) &&
          dispatch(setSessionId(data.data.sessionId)) &&
          // dispatch(setSessionId("xyz")) &&
          dispatch(
            setApplicantId(data.data.loginResponseJsonList[0].applicantId)
          ) &&
          dispatch(
            setQualifyingDate(data.data.loginResponseJsonList[0].qualifyingDate)
          ) &&
          dispatch(
            setCurrentPoints(data.data.loginResponseJsonList[0].currentPoints)
          ) &&
          dispatch(
            setCurrencyBand(data.data.loginResponseJsonList[0].currencyBand)
          ) &&
          history.push("./HomePage")
        ) : (
          <div className="loginBox">
            {/* Back button  */}
            <div className="banner-gr position-relative height-236">
              {/* <img className="pb-2 mx-2" src={imgBackArrow} alt="Back Arrow" onClick={()=>{alert("Hey")}} /> */}
              <img className="d-flex m-auto pt-5" src={logo} alt="" />
            </div>
            <div className="container d-set">
              <div className="row px-4 px-md-0 login">
                <div className="col card box-shw bdr-rad px-3 py-4">
                  {/* <p className="text-center pb-2 font_16 ff-semi" style={{color:"#A4195C"}}>{responseFromLogin.logoutText}</p> */}
                  <h5 className="text-center font_16 ff-semi">Login</h5>
                  <p
                    className="text-center pb-2 font_16 ff-semi"
                    style={{ color: "#A4195C" }}
                  >
                    {partnerName.replaceAll("_", " ")}{" "}
                    {/* the partner which is selected  */}
                  </p>

                  {/* This is done for differece between CBL and HR login  */}

                  {Id === 1023 ||
                  Id === 12 ||
                  Id === 1022 ||
                  Id === 1034 ||
                  Id === 1050 ? (
                    <p className="font_14 text-center p-color ff-reg">
                      Please enter your household ID and password below.
                    </p>
                  ) : (
                    <p className="font_14 text-center p-color ff-reg">
                      Please enter your application (user) ID and password
                      below.
                    </p>
                  )}

                  <form>
                    {Id == 1023 ||
                    Id == 12 ||
                    Id == 1022 ||
                    Id == 1034 ||
                    Id == 1050 ? (
                      <label className="font_14 form-label ff-semi">
                        Household ID
                      </label>
                    ) : (
                      <label className="font_14 form-label ff-semi">
                        Application ID
                      </label>
                    )}
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        <img src={imgUser} alt="" />
                      </span>
                      {Id == 1023 ||
                      Id == 12 ||
                      Id == 1022 ||
                      Id == 1034 ||
                      Id == 1050 ? (
                        <input
                          value={inputs.userId}
                          name="userId"
                          onChange={handleChange}
                          type="text"
                          className="form-control ff-reg"
                          placeholder="Enter household ID"
                          // aria-label="Enter household ID"
                          aria-describedby="basic-addon1"
                        />
                      ) : (
                        <input
                          value={inputs.userId}
                          name="userId"
                          onChange={handleChange}
                          type="text"
                          className="form-control ff-reg"
                          placeholder="Enter application (user) ID"
                          // aria-label="Enter application (user) ID"
                          aria-describedby="basic-addon1"
                        />
                      )}
                    </div>
                    <label className="font_14 form-label ff-semi">
                      Password
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon2">
                        <img src={imgPassKey} alt="" />
                      </span>
                      <input
                        value={inputs.pin}
                        name="pin"
                        onChange={handleChange}
                        type="password"
                        className="form-control ff-reg"
                        placeholder="Enter password"
                        // aria-label="Enter password"
                        aria-describedby="basic-addon2"
                      />
                    </div>
                    {/* {(status === "loading" && showError === false) && <Spinner />} */}

                    <div className="form-check pb-3">
                      <input
                        onClick={handleClickRememberMe}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label font_14 p-color ff-semi"
                        htmlFor="flexCheckDefault"
                      >
                        Remember me
                      </label>
                    </div>
                    {/*&& refetch  */}
                    {mfaRedirect && (
                      <div style={{ color: "#E00000" }}>
                        *Getting into MFA screen
                      </div>
                    )}

                    {showError &&
                    status === "success" &&
                    data.data.isLoggedIn === false
                      ? data && (
                          <div style={{ color: "#E00000" }}>
                            *Please check your details and try again
                          </div>
                        )
                      : ""}

                    {showError &&
                    status === "success" &&
                    data &&
                    data.data.MessageCode === "-101" ? (
                      <div style={{ color: "#E00000" }}>
                        *Please check your details and try again
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="">
                      <button
                        onClick={handleClick}
                        className="btn btn-primary border-0 w-100 mb-3 font_14 m_t_5 p_tb_lr blue-bg"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </IonPage>
    </ion-content>
  );
};

export default Login;
