import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import swal from "sweetalert";
import { Spinner } from "./Spinner";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Authentication";
import { setLogoutText } from "../../redux/ResponseFromLogin";

const SessionTimeOut = () => {

  let history = useHistory();
  let dispatch = useDispatch();


  setTimeout(() => {
    swal({ title: "Session expired",
    text:"please login again to continue ",
    icon:"info",
    closeOnClickOutside:false,
  
  }).then(()=>{
    // history.push("./PortalList");
    dispatch(login(false));
    dispatch(setLogoutText("Successfully logged out"));
    history.push("./PortalList")
    localStorage.setItem("auth", JSON.stringify("false"));
  });
  }, 30);

  return (
    <>
      <div style={{ marginTop: "120px", marginLeft: "120px" }}>
        {/* <CountdownCircleTimer
        isPlaying
        duration={10}
        size={100}
        trailColor={"#6C0BA9"}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        strokeWidth={5}
        colorsTime={[7, 5, 2, 0]}
        onComplete={() => {
            
            swal({text:"Login again to cintinue "})

        }}
      >
        {({ remainingTime }) => (<div className="text-center" ><div>Please login  </div> <div>{remainingTime}</div></div>)}

      </CountdownCircleTimer> */}
      </div>

      <h4 className="text-center text-danger mt-5">
        Session expired , please login again{" "}
      </h4>
    </>
  );
};

export default SessionTimeOut;
