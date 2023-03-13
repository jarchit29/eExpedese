import React from "react";
import { useIdleTimer } from "react-idle-timer";
import Swal from "sweetalert2";
import { login } from "../../redux/Authentication";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

const IdleTimer2 = () => {
  let dispatch = useDispatch();
  let history = useHistory();

  //! added idle timer alert
  const onIdle = () => {
    // const value = reference.current;

    console.log("User is idle");
    let timerInterval;
    Swal.fire({
      title: "Your session is about to expire. Would you like to continue?",
      html: " <strong ></strong><br/> mm : ss",
      timer: 300000,
      allowOutsideClick: () => Swal.clickConfirm(),
      allowEscapeKey: false,
      allowEnterKey: false,
      backdrop: true,
      showCancelButton: true,
      showConfirmButton: true,
      scrollbarPadding: false,
      //reverseButtons: true,
      confirmButtonText: "Continue",
      cancelButtonText: "Logout",
      buttonsStyling: false,
      customClass: {
        container: "idleTimer-container",
        popup: "...",
        header: "...",
        title: "idleTimer-title",
        closeButton: "...",
        content: "idleTimer-content",
        htmlContainer: "...",
        confirmButton: "idleTimer-continueButton",
        cancelButton: "idleTimer-logoutButton",
      },

      didOpen: () => {
        timerInterval = setInterval(() => {
          var getSeconds = Swal.getTimerLeft() / 1000;
          Swal.getHtmlContainer().querySelector("strong").textContent = (moment
            .duration(getSeconds, "minutes")
            .format("h : mm"))
        }, 1000);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.close();
      } else if (result.isDismissed) {
        dispatch(login(false));
        localStorage.setItem("auth", JSON.stringify("false"));
        history.push("./PortalList");
      }

    });
  };

  const onActive = (event) => {
    console.log("user is active");
    // swal.close();
  };
  const idleTimer = useIdleTimer({
    onIdle,
    onActive,
    timeout: 1500000,
    crossTab: true,
  });
  return <div> </div>;
};

export default IdleTimer2;
 