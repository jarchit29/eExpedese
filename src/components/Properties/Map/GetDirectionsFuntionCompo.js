//Imports from Libraries

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

//Imports from Components
import { Header } from "../../Miscellaneous/Header";

//Import from Images
import imgBackArrow from "../../../Style/Images/arrow.png";
import IdleTimer2 from "../../Miscellaneous/Idletimer2";

export const GetDirectionsFuntionCompo = () => {
  let history = useHistory();
  //Getting long, and lat from redux
  const responseFromPropertyDetails = useSelector(
    (state) => state.ResponseFromPropertyDetails
  );
  let latitude = responseFromPropertyDetails.latitude;
  let longitude = responseFromPropertyDetails.longitude;
  // console.log(longitude + " <--Longitude , Latitude--> " + latitude);
  let API_KEY = process.env.React_App_MAP_API_KEY;

  // Hardcoded values to test
  // let latitude =51.547
  // let longitude=-0.08425
  // let tryPlace ="Eiffel+Tower,Paris+France"

  let box = {
    height: "calc(100% - 80px)",
  };

  return (
    <>
      <IdleTimer2 />
{/* 
      <Header
        backArrow={true}
        onBackArrow={() => {
          history.goBack();
        }}
        HeaderTitle={`${responseFromPropertyDetails.address1} (${responseFromPropertyDetails.area})`}
      /> */}
      <div class=" example_header banner-gr position-relative hardcodedHeaderMap ">
        <div class="container ps-0 pt-3 iosTop">
          <div class=" d-flex position-relative align-items-center  pt-1 pb-1">
            <img
              className="mx-3"
              src={imgBackArrow}
              alt="Back Arrow"
              onClick={() => {
                history.goBack();
              }}
            />
            <span class="ff-semi font_20 l-height-24 text-left text-white">
              {`${responseFromPropertyDetails.address1} (${responseFromPropertyDetails.area})`}
            </span>{" "}
          </div>
        </div>
      </div>

      {/* <MapContainer latitude={latitude} longitude={longitude}/> */}
      <div className="mt-126" style={box}>
        {/* {(latitude||longitude)===""?alert("Missing latitude or longitude hence getting uneven results "):console.log("FINE")} */}
        <iframe
          title="map"
          width="100%"
          height="100%"
          loading="lazy"
          // allowfullscreen
          src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY} &q=${latitude},${longitude}`}
        ></iframe>
        {(latitude || longitude) === ""
          ? swal({
              text: "Missing latitude or longitude ",
            })
          : null}
      </div>
    </>
  );
};
