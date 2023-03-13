import React from "react";
import { useIdleTimer } from "react-idle-timer";
import swal from "sweetalert";
import { login } from "../../redux/Authentication";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import jquery from "jquery";
import $ from 'jquery';

const IdleTimer = () => {
  let dispatch = useDispatch();
  let history = useHistory();

  //! added idle timer alert
  const onIdle = () => {
    console.log("User is idle");
    // swal({
    //   title: "You have been idle for 25 minutes",
    //   text: "Do you want to continue?",
    //   icon: "warning",
    //   buttons: ["Logout", "Continue"],
    //   closeOnClickOutside: false,

    //   // timer:3000 //using sweetalert timer to show alert for 5 min, and then  sweetalert hides & logout
    // }).then((value) => {
    //   if (value) {
    //     swal.close();
    //   } else {
    //     dispatch(login(false));
    //     localStorage.setItem("auth", JSON.stringify("false"));
    //     history.push("./PortalList");
    //   }
    // });

    // var closeInSeconds = 5,
    //   displayText = "I will close in #1 seconds.",
    //   timer;

    // swal({
    //   title: "Auto close alert!",
    //   text: displayText.replace(/#1/, closeInSeconds),
    //   timer: closeInSeconds * 1000,
    //   showConfirmButton: false,
    // });

    // timer = setInterval(function () {
    //   closeInSeconds--;

    //   if (closeInSeconds < 0) {
    //     clearInterval(timer);
    //   }

    //   $(".sweet-alert > p").text(displayText.replace(/#1/, closeInSeconds));
    // }, 1000);
  };

  const onActive = (event) => {
    console.log("user is acitive");
  };
  const idleTimer = useIdleTimer({
    onIdle,
    onActive,
    timeout: 1000,
    // crossTab: true,
  });
  return <div></div>;
};

export default IdleTimer;
