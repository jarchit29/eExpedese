//Imports from Libraries
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
//Imports from Components
import { BottomMap } from "../Map/BottomMap";
import swal from "sweetalert";

export const PropertyDetailsMap = () => {
  //Getting long, and lat from redux
  const responseFromPropertyDetails = useSelector(
    (state) => state.ResponseFromPropertyDetails
  );
  let history = useHistory();
  let latitude = responseFromPropertyDetails.latitude;
  let longitude = responseFromPropertyDetails.longitude;
  // console.log(longitude + " <--Longitude , Latitude--> " + latitude);

  return (
    <div className="mapBox mt-3 mb-3">

      {/* <BottomMap latitude={latitude} longitude={longitude}/> */}

      <button className="map-dir font_16 ff_semi mt-2 bg-trans">
        <span
          onClick={() => {
            if (latitude === "" || longitude === "") {
              swal({
                text: "Missing latitude or longitude hence getting uneven results ",
              });
            } else {
              history.push("/GetDirections");
            }
          }}
        >
          Show on map
        </span>
      </button>
      <div className="clearfix"></div>
    </div>
  );
  // }
};
