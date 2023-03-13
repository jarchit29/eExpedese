//Imports from Library

import { useEffect } from "react";
import Geocode from "react-geocode";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//Imports from Common files
import {
  setAddress1,
  setAddress2,
  setArea,
  setbidPeriodId,
  setBidStatus,
  setLatitude,
  setLongitude,
  setMoreRentDetails,
} from "../../../redux/ResponseFromPropertyDetials";
//Imports from Components
import { Header } from "../../Miscellaneous/Header";
import { Spinner } from "../../Miscellaneous/Spinner";
import { PropertyDetailsBottomNav } from "./PropertyDetailsBottomNav";
import { PropertyDetailsMap } from "./PropertyDetailsMap";
import { PropertyDetailContent } from "./PropertyDetailContent";
import { PropertyDetailSlider } from "./PropertyDetailSlider.js";
import ErrorMessage from "../../Miscellaneous/ErrorMessage";
import IdleTimer2 from "../../Miscellaneous/Idletimer2";
import PropertyBidRestricted from "./PropertyBidRestricted";

export const PropertyDetail = () => {
  const { React_App_Base_URL } = process.env;

  //Redux for getting
  const responseFromLogin = useSelector((state) => state.ResponseFromLogin);
  const responseFromPropertyList = useSelector(
    (state) => state.ResponseFromPropertyList
  );
  const partnerId = useSelector((state) => state.PartnerId);

  //Redux for setting
  const dispatch = useDispatch();

  let history = useHistory();

  const onBackArrow = () => {
    // history.push("/HomePage");
    history.goBack();
  };

  //For UrlEncoded data :- params to be passed in body :-
  const params = new URLSearchParams();
  params.append("partnerId", partnerId.Id);
  params.append("applicantId", responseFromLogin.applicantId);
  params.append("sessionId", responseFromLogin.sessionId);
  params.append("isLoggedIn", true);
  params.append("propertyId", responseFromPropertyList.propertyId);
  params.append("options", " ");

  // Setting geoLocatios
  // useEffect(() => {
  //   Geocode.setApiKey("AIzaSyBmrJ3vvZhDX9_KhSibFAUf4u87vDapqUE");
  // }, []);

  let fetchPropertyDetails = async () => {
    let url = `${React_App_Base_URL}/getPropertyDetailExtended`; //~Config

    // This is for headers :-
    const config = {
      headers: {},
    };
    let res = axios.post(url, params, config);

    return res;
  };

  const { error, data, status } = useQuery(
    "keyPropertyDetails",
    fetchPropertyDetails,
    {
      refetchOnWindowFocus: false,
      cacheTime: 0,
    }
  );

  //API calls for rent details

  let fetchRentDetails = async () => {
    let url = `${React_App_Base_URL}/getPropertyRentDetailsExtended`; //~Config

    // This is for headers :-
    const config = {
      headers: {},
    };
    let res = axios.post(url, params, config).then((response) => {
      // console.log(response)
      response.data &&
        dispatch(setMoreRentDetails(response.data.rentDetailsObjectList[0]));
      response.status != 200 && dispatch(setMoreRentDetails(null));
    });
    return res;
  };

  const {
    error: errorRent,
    data: dataRent,
    status: statusRent,
  } = useQuery("keyRentDetails", fetchRentDetails, {
    cacheTime: 0,
  });

  useEffect(() => {
    status === "success" &&
      (data.data.message === "Applicant has already placed bid"
        ? dispatch(setBidStatus("Withdraw bid"))
        : dispatch(setBidStatus("Place bid")));
  }, [status]);

  return (
    <ion-content>
      <IdleTimer2 />
      <div>
        <Header
          backArrow={true}
          hamBurgerMenu={false}
          HeaderTitle="Property details"
          onBackArrow={onBackArrow}
        />

        {navigator.onLine ? (
          <></>
        ) : (
          <>
            <>
              <div style={{ marginTop: "150px" }}>
                <ErrorMessage
                  errorMessage={`We have experienced a connection error. Please check your internet connection and try again`}
                  networkImage={true}
                />
              </div>
            </>
          </>
        )}

        {status === "loading" && navigator.onLine && <Spinner />}

        {status === "error" && navigator.onLine && (
          <>
            <div style={{ marginTop: "150px" }}>
              <ErrorMessage
                errorMessage={`We have experienced a connection error. Please check your internet connection and try again`}
                networkImage={true}
              />
            </div>
          </>
        )}

        {status === "success" &&
          navigator.onLine &&
          statusRent === "success" &&
          dispatch(
            setLongitude(data.data.propertyJsonObjectList[0].longitude)
          ) &&
          dispatch(setLatitude(data.data.propertyJsonObjectList[0].latitude)) &&
          dispatch(setAddress1(data.data.propertyJsonObjectList[0].address1)) &&
          dispatch(setAddress2(data.data.propertyJsonObjectList[0].address2)) &&
          dispatch(setArea(data.data.propertyJsonObjectList[0].area)) &&
          dispatch(setbidPeriodId(data.data.bidPeriodId)) && (
            <>
              <div className="mt-80">
                {(responseFromPropertyList.routingFrom === "PropertyList" ||
                  responseFromPropertyList.routingFrom === "CBids") &&
                data.data.propertyJsonObjectList[0].biddingRestriction ===
                  "Y" ? (
                  <PropertyBidRestricted />
                ) : (
                  <></>
                )}
                <PropertyDetailSlider
                  key={data.data.propertyJsonObjectList[0].propertyId}
                  propertyImageCount={
                    data.data.propertyJsonObjectList[0].propertyImageUrlList
                      .length
                  }
                  propertyImage={
                    data.data.propertyJsonObjectList[0].propertyImageUrlList
                  }
                  advertNumber={data.data.propertyJsonObjectList[0].advertNo}
                />
                <div
                  className={
                    (responseFromPropertyList.routingFrom === "PropertyList" &&
                      data.data.propertyJsonObjectList[0].biddingRestriction ===
                        "Y") ||
                    (responseFromPropertyList.routingFrom != "PropertyList" &&
                      responseFromPropertyList.routingFrom != "CBids")
                      ? `innerM`
                      : `inner`
                  }
                >
                  <PropertyDetailContent
                    //Partner id
                    partnerId={partnerId.Id}
                    //Key :-
                    key={data.data.propertyJsonObjectList[0].propertyId}
                    //Address :-
                    addressPropertyId={
                      data.data.propertyJsonObjectList[0].advertNo
                    }
                    addressArea={data.data.propertyJsonObjectList[0].area}
                    addressPostCode={
                      data.data.propertyJsonObjectList[0].postcode
                    }
                    addressAdminArea={
                      data.data.propertyJsonObjectList[0].adminArea
                    }
                    landlord={data.data.propertyJsonObjectList[0].landlord}
                    address1={data.data.propertyJsonObjectList[0].address1}
                    address2={data.data.propertyJsonObjectList[0].address2}
                    //Read more :-
                    notes={data.data.propertyJsonObjectList[0].note}
                    //Dates
                    dateOpeningDate={
                      data.data.propertyJsonObjectList[0].openingDate
                    }
                    dateClosingDate={
                      data.data.propertyJsonObjectList[0].closingDate
                    }
                    //Property details :-
                    detailType={data.data.propertyJsonObjectList[0].type}
                    detailBedrooms={data.data.propertyJsonObjectList[0].bedroom}
                    detailBedspaces={
                      data.data.propertyJsonObjectList[0].bedspace
                    }
                    deatilFloorLvl={
                      data.data.propertyJsonObjectList[0].floorLevel
                    }
                    detailBuildType={data.data.propertyJsonObjectList[0].type}
                    detailAccessiblityCategory={
                      data.data.propertyJsonObjectList[0].accessibilityCategory
                    }
                    detailAgeRestriciton={
                      data.data.propertyJsonObjectList[0].ageRestrictions
                    }
                    detailMinAge={data.data.propertyJsonObjectList[0].minAge}
                    detailMaxAge={data.data.propertyJsonObjectList[0].maxAge}
                    //Facilities :-
                    facParking={data.data.propertyJsonObjectList[0].parking}
                    facAdapted={data.data.propertyJsonObjectList[0].adapted}
                    facEnergyEfficency={
                      data.data.propertyJsonObjectList[0].energyEfficiency
                    }
                    facPetsAllowed={
                      data.data.propertyJsonObjectList[0].petAllowed
                    }
                    facLift={data.data.propertyJsonObjectList[0].lift}
                    facCentralHeating={
                      data.data.propertyJsonObjectList[0].heatingType
                    }
                    facDoubleGazed={
                      data.data.propertyJsonObjectList[0].doubleGazed
                    }
                    facGarden={data.data.propertyJsonObjectList[0].garden}
                    facSheltered={data.data.propertyJsonObjectList[0].sheltered}
                    // Rent details:-
                    rentServiceCharge={
                      data.data.propertyJsonObjectList[0].serviceCharge
                    }
                    rentRentFreq={
                      data.data.propertyJsonObjectList[0].rentFrequency
                    }
                    rentAmount={data.data.propertyJsonObjectList[0].rentAmount}

                    //Rent details taken from extended API
                    // rentServiceCharge= {dataRent.data.rentDetailsObjectList[0].serviceCharge}
                    // rentRentFreq= {dataRent.data.rentDetailsObjectList[0].rentFrequency}
                    // rentAmount= {dataRent.data.rentDetailsObjectList[0].rentAmount}
                    // rentTotalRent= {dataRent.data.rentDetailsObjectList[0].totalRent}
                    // rentOtherCharges= {dataRent.data.rentDetailsObjectList[0].otherCharges}
                  />
                  <PropertyDetailsMap />
                  {(responseFromPropertyList.routingFrom === "PropertyList" ||
                    responseFromPropertyList.routingFrom === "CBids") &&
                    data.data.propertyJsonObjectList[0].biddingRestriction ===
                      "N" && <PropertyDetailsBottomNav />}
                </div>
              </div>
            </>
          )}
      </div>
    </ion-content>
  );
};
