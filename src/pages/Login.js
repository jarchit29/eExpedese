//Import from Libraries
import { IonPage } from "@ionic/react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
//Import from Images
import logo from "../Style/Images/Logo.png";
import imgPassKey from "../Style/Images/pass-key.png";
import imgUser from "../Style/Images/user.png";
import eyeOn from "../Style/Images/eye (2).jpg";
import eyeClose from "../Style/Images/eyeClose.jpg";

//Import from common files
import { login } from "../redux/Authentication";
import { SpinnerForLogin } from "../components/Miscellaneous/SpinnerForLogin";
import AlertOnLogin from "../components/Alerts/AlertOnLogin";
import ButtonBlock from "../components/Buttons/ButtonBlock";

const Login = () => {
  const [showError, setShowError] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  //Basic imports
  const dispatch = useDispatch();
  let history = useHistory();

  // Store inputs in use state
  const [inputs, setInputs] = useState({
    userId: "",
    pin: "",
  });

  // Show and hide password
  const [showPassowrd, setShowPassowrd] = useState(true);

  //function to handle change event
  const handleChange = (e) => {
    //destructing already existing values from `inputs` state and adding new values where key=name of feild & value=target.value
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setShowError(false);
  };

  // Function for handle click
  const handleClick = (e) => {
    e.preventDefault();
    // history.push("/HomePage")
    !inputs.userId || !inputs.pin
      ? setShowError(true)
      : history.push("/HomePage");
  };

  return (
    <ion-content>
      <AlertOnLogin showError={showError} setShowError={setShowError} />
      <IonPage>
        {showSpinner && <SpinnerForLogin />}

        <div className="loginBox">
          <div className="banner-gr position-relative height-236">
            {/* <img className="d-flex m-auto pt-5" src={logo} alt="" /> */}
            <p className="d-flex m-auto pt-5 mx-4 " style={{ fontSize: "20px" }}>
              MedCuratio(A unit of eExpedise group)
            </p>
          </div>
          <div className="container d-set">
            <div className="row px-4 px-md-0 login">
              <div className="col card box-shw bdr-rad px-3 py-4">
                <h5 className="text-center font_16 ff-semi">Login</h5>

                <form>
                  <label className="font_14 form-label ff-semi">
                    Email id / Phone Number *
                  </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <img src={imgUser} alt="" />
                    </span>
                    <input
                      value={inputs.userId}
                      name="userId"
                      onChange={handleChange}
                      type="text"
                      className="form-control ff-reg"
                      placeholder="Enter Email/Phone Number"
                      // aria-label="Enter household ID"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <label className="font_14 form-label ff-semi">
                    Password*
                  </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">
                      <img src={imgPassKey} alt="" />
                    </span>
                    <input
                      value={inputs.pin}
                      name="pin"
                      onChange={handleChange}
                      type={showPassowrd ? `password` : `text`}
                      className="form-control ff-reg"
                      placeholder="Enter password"
                      // aria-label="Enter password"
                      aria-describedby="basic-addon2"
                    />
                    <span className="input-group-text" id="basic-addon2">
                      {showPassowrd ? (
                        <img
                          src={eyeOn}
                          alt=""
                          onClick={() => {
                            setShowPassowrd(false);
                          }}
                        />
                      ) : (
                        <img
                          src={eyeClose}
                          alt=""
                          onClick={() => {
                            setShowPassowrd(true);
                          }}
                        />
                      )}
                    </span>
                  </div>

                  {/* <div className="form-check pb-3">
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
                    </div> */}
                  <p className="gray" style={{ textAlign: "right" }}>
                    Forgot password ?
                  </p>

                  <div className="">
                    <div className="text-center">
                      <ButtonBlock
                        label="SIGN IN"
                        onButtonClick={handleClick}
                      />
                    </div>

                    <div className="mt-4">
                      By Signing in you Agree to our{" "}
                      <a href="#" style={{ color: "red" }}>
                        Terms & conditions
                      </a>{" "}
                      and{" "}
                      <a href="" style={{ color: "red" }}>
                        Privacy Policy
                      </a>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </IonPage>
    </ion-content>
  );
};

export default Login;
