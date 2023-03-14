//Imports from Libraries
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//Imports from Images
import imgButtonClose from "../../Style/Images/arrow.png";
import imgHeaderLogo from "../../Style/Images/Logo.png";
import imgLogout from "../../Style/Images/logout.png";
import imgHome from "../../Style/Images/properties.png";
import imgBids from "../../Style/Images/bids.png";
import imgMessage from "../../Style/Images/message.png";
import imgNavArrow from "../../Style/Images/nav-arrow.png";
import download from "../../Style/Images/download.png";
//Imports from common files
import { login } from "../../redux/Authentication";
import { useState } from "react";
import { setStatus } from "../../redux/AlertStatus";
import AlertOnExit from "../../components/Alerts/AlertOnExit";
import { AlertOnLogout } from "../../components/Alerts/AlertOnLogout";
import userGuide from "../../Style/UserGuide.pdf";
//Imports from components

export const SideMenuItems = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  let history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    setTimeout(() => {
      dispatch(setStatus(true));
      setShowAlert(true);
    }, 200);

    // dispatch(login(false));
    // localStorage.setItem("auth", JSON.stringify("false"));
    // history.push("./PortalList", { SuccesfullyLoggedout: true });
  };

  const responseFromLogin = useSelector((state) => state.ResponseFromLogin);
  const partnerId = useSelector((state) => state.PartnerId);
  return (
    <div
      className="offcanvas offcanvas-start w-85"
      tabIndex="-1"
      id="offcanvas"
      data-bs-keyboard="false"
      data-bs-backdrop="false"
    >
      <div className="offcanvas-header">
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <img src={imgButtonClose} alt="close button" />
        </button>
        <img
          src={imgHeaderLogo}
          className="logo "
          alt="Home connections logo"
        />
      </div>

      <div className="col-12 d-flex p_tb_lr">
        <div className="bdr-rad light-bg2 w_100 p_tb_lr">
          <span className="font_12 ff-semi d_block white">
            <span className="opa-8">Applicant status :</span>{" "}
            <small className="font_12 ff-semi d_i_block white">
              {" "}
              {responseFromLogin.status}
            </small>
          </span>
          <span className="font_12 ff-semi d_block white">
            <span className="opa-8">Bedroom/bedspaces :</span>{" "}
            <small className="font_12 ff-semi d_i_block white">
              {" "}
              {responseFromLogin.bedroom}/{responseFromLogin.bedspace}
            </small>
          </span>
          <span className="font_12 ff-semi d_block white">
            <span className="opa-8">Priority :</span>{" "}
            <small className="font_12 ff-semi d_i_block white">
              {" "}
              {responseFromLogin.currencyBand === " "
                ? ""
                : `${responseFromLogin.currencyBand},`}
              {responseFromLogin.currentPoints === " "
                ? "-"
                : responseFromLogin.currentPoints}
              {responseFromLogin.qualifyingDate === ""
                ? ""
                : `,${responseFromLogin.qualifyingDate}`}
              {/* {responseFromLogin.currentPoints}, */}
              {/* {responseFromLogin.qualifyingDate} */}
            </small>
          </span>
        </div>
      </div>

      <div className="offcanvas-body px-0 p_r_5 nav-manu">
        <ul
          className="nav nav-pills mb-sm-auto mb-0 align-items-start"
          id="menu"
        >
          <li className="w_100">
            <a
              href="#"
              className="nav-link font_14 ff-reg text-truncate white d_block nav-top-border"
              data-bs-dismiss="offcanvas"
              onClick={() => {
                props.setPage("Properties");
                localStorage.setItem("Page", "Properties");
              }}
            >
              <img src={imgHome} className="d_i_block" alt="properties icon" />
              Properties
              <img
                src={imgNavArrow}
                className="nav-arrow"
                alt="navigate to Properties"
              />
            </a>
          </li>
          <li className="w_100">
            <a
              href="#submenu1"
              data-bs-dismiss="offcanvas"
              className="nav-link font_14 ff-reg text-truncate white d_block nav-top-border"
              onClick={() => {
                props.setPage("My bids");
                localStorage.setItem("Page", "My bids");
              }}
            >
              <img src={imgBids} className="d_i_block" alt="Bids icon" />
              My bids
              <img
                src={imgNavArrow}
                className="nav-arrow"
                alt="Navigate to my bids"
              />
            </a>
          </li>

          {/* <a
            className="nav-link font_14 ff-reg text-truncate white d_block nav-top-border"
            href={userGuide}
            target="_blank"
            download
          >
            <img
              src={download}
              className="d_i_block w_11"
              alt="Download icon"
            />
            Download userguide
            <img
              src={imgNavArrow}
              className="nav-arrow"
              alt="Download userguide"
            />
          </a> */}
          {/* <li className="w_100">
            <a
              href={userGuide}
              data-bs-dismiss="offcanvas"
              className="nav-link font_14 ff-reg text-truncate white d_block nav-top-border"
              download
            >
              <img src={imgBids} className="d_i_block" alt="Bids icon" />
              Download Userguide
              <img
                src={imgNavArrow}
                className="nav-arrow"
                alt="Download userguide"
              />
            </a>
          </li> */}
          {(partnerId.Id == 2 || partnerId.Id === 1011) && (
            <li className="w_100">
              <a
                href="#"
                className="nav-link font_14 ff-reg text-truncate white d_block nav-top-border"
                //
                data-bs-dismiss="offcanvas"
                onClick={() => {
                  props.setPage("My messages");
                  localStorage.setItem("Page", "My messages");
                }}
              >
                <img
                  src={imgMessage}
                  className="d_i_block"
                  alt="Messages Icon"
                />
                My messages
                <img
                  src={imgNavArrow}
                  className="nav-arrow"
                  alt="Navigate to my messages"
                />
              </a>
            </li>
          )}
        </ul>

        <div className="bot-fix">
          <span className="font_12 ff-semi white d_block">
            © Home Connections 2002-2022 | Ver: 3.1.3
          </span>
          <a
            className="out font_14 ff-semi white t-d-none"
            data-bs-dismiss="offcanvas"
            onClick={handleClick}
          >
            <img
              src={imgLogout}
              alt="logout icon"
              data-bs-dismiss="offcanvas"
              className="d_i_block  m_r_15"
            />
            Logout
          </a>
        </div>
      </div>
      {showAlert && (
        <AlertOnLogout showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
    </div>
  );
};
