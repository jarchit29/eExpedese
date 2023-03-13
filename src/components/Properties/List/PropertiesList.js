//Imports from Libraries
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//Imports from Images
import imgFilter from "../../../Style/Images/filter.png";
//Imports from common files
import {
  setPropertyId,
  setRoutingFrom,
} from "../../../redux/ResponseFromPropertyList";
//Imports from components
import { CardPropertyList } from "../../CardLayouts/CardPropertyList";
import { Spinner } from "../../Miscellaneous/Spinner";
import AppliedFilterSlider from "../../Filter/AppliedFilterSlider";
import PageContainer from "../../Miscellaneous/PageContainer";
//Import from REDUX
import { setFilterFlag } from "../../../redux/FilterOptions";
import ErrorMessage from "../../Miscellaneous/ErrorMessage";
import { setBidStatus } from "../../../redux/ResponseFromPropertyDetials";
import { AlertOnLogout } from "../../Alerts/AlertOnLogout";

import swal from "sweetalert";
import { createGesture, Gesture } from "@ionic/react";
import PartnerId from "../../../redux/PartnerId";

export const PropertiesList = () => {
  const swipeGesture = useRef(createGesture({ onMove: true }));

  //Use States for pagination
  const [startPage, setStartPage] = useState(0);
  const [pageSize, setpageSize] = useState(5);
  const [showAlert, setShowAlert] = useState(false);

  //Redux

  //  a) For getting values
  const responseFromLogin = useSelector((state) => state.ResponseFromLogin);
  const partnerId = useSelector((state) => state.PartnerId);
  const responseFromPartnerId = useSelector((state)=>state.PartnerId)
  const responseFromFilter = useSelector((state) => state.FilterOptions);
  

  //  b) For setting values
  const dispatch = useDispatch();

  //For routes
  let history = useHistory();

  //Use state hooks :-
  const [propertiesCount, setPropertiesCount] = useState(0);

  //For UrlEncoded data :- params to be passed in body :-
  const params = new URLSearchParams();
  

  const str = JSON.parse(localStorage.getItem("LocalApplicantId"))



  params.append("partnerId", partnerId.Id);
  params.append("applicantId", responseFromLogin.applicantId);
  params.append("sessionId", responseFromLogin.sessionId);
  params.append("isLoggedIn", true);
  params.append("start", startPage);
  params.append("pageSize", pageSize);
  params.append("options", " ");
  params.append("subPortalCodeId", "999");

// params.append("partnerId",localStorage.getItem("LocalId"))
//   params.append("applicantId",str.loginResponseJsonList[0].applicantId);
//   params.append("sessionId",str.sessionId)

  //Function for fetching api results

  let fetchPropertyList = async () => {
    const { React_App_Base_URL } = process.env;

    let url = `${React_App_Base_URL}/getPropertyListExtended`; //~Env

    // This is for headers :-
    let configA = {
      headers: {},
    };


    let res = await axios.post(url, params, configA)
    // let res = responseFromPartnerId.isReduxEmpty ===false ?await axios.post(url, params, configA):await axios.post(url, paramsSession, configA)

    // setPropertiesCount(res.data.count);

    responseFromFilter.filterFlag === true
      ? setPropertiesCount(responseFromFilter.advanceFilter.count)
      : setPropertiesCount(res.data.count);

    // console.log("Properties count from filter "+responseFromFilter.advanceFilter.count);
    // console.log("Status from filter "+responseFromFilter.advanceFilter.message);

    return res;
  };

  //Use Query for optimization

  const { error, data, status, refetch } = useQuery(
    "keyProperty",
    fetchPropertyList,
    {
      enabled:responseFromLogin.applicantId!=null,
      cacheTime: 0,
    
    }
  );

  return (
    <div className="container pb-5 mt-80 ">
      <div className="row px-4 px-md-0 propArea">
        <p className="font_10 gray mb-0 mt-3 ps-0">Showing</p>
        <p className="font_12 ps-0">
          {responseFromFilter.filterFlag === true
            ? responseFromFilter.advanceFilter.count
            : propertiesCount}{" "}
          Properties
          {/* <a onClick={() => {history.push('./Filter') ;dispatch(setFilterFlag(false))}} className="bg-icon"><img src={imgFilter} alt="Filter Icon"/></a> */}
          <button
            onClick={() => {
              history.push("./Filter");
              dispatch(setFilterFlag(false));
            }}
            className="bg-icon bg-trans"
            aria-label="Filter button"
          >
            <img src={imgFilter} alt="Filter Icon" />
          </button>
        </p>
      </div>

      {responseFromFilter.filterFlag === true && (
        <AppliedFilterSlider
          topBorder={{ borderTop: "0px", marginBottom: "0px" }}
        />
      )}

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
      {(status === "success" && data.data.totalRecords === 0) ||
      (responseFromFilter.advanceFilter.count === 0 &&
        responseFromFilter.filterFlag === true) ? (
        <ErrorMessage errorMessage={"No record found"} />
      ) : null}
      {/* {responseFromFilter.advanceFilter.count == 0 &&
      responseFromFilter.filterFlag === true ? (
        <ErrorMessage errorMessage="No record found" />
      ) : null} */}

      {status === "loading" ||
        (responseFromFilter.filterFlag === true &&
          responseFromFilter.advanceFilter.length == 0 && <Spinner />)}

      {/* Filter slider  */}

      {/* Below code says :- if we dont get success as a response from filter api , map the card list without advance filter 
                            but if we get success as message , then mount it with applied filter's api 
     
     */}
      {responseFromFilter.filterFlag === false ? (
        status === "success" &&
        navigator.onLine &&
        data.data.propertyJsonList.map((element) => {
          // console.table(element)
          return (
            <CardPropertyList
              imgProperty={element.propertyImageUrl}
              key={element.propertyId}
              propertyID={element.advertNo}
              address={element.address1}
              address2={element.address2}
              area={element.area}
              // rent="5k --> Hardcoded"
              rent={element.rentAmount}
              // landlord="Archit--> Hardcoded"
              landlord={element.landlord}
              type={element.type}
              bedrooms={element.bedroom}
              bedSpace={element.bedspace}
              clickCardProperty={() => {
                // console.log("Hey you clicked me ");
                history.push("/PropertyDetail");
                element.alreadyHasBid === "Y"
                  ? dispatch(setBidStatus("Withdraw bid"))
                  : dispatch(setBidStatus("Place bid"));
                dispatch(setPropertyId(element.propertyId));
                dispatch(setRoutingFrom("PropertyList"));
              }}
            />
          );
        })
      ) : responseFromFilter.advanceFilter.length == 0 ? (
        <></>
      ) : (
        responseFromFilter.advanceFilter.propertyJsonList.map((element) => {
          // console.table(element)
          return (
            <>
              <CardPropertyList
                imgProperty={element.propertyImageUrl}
                key={element.propertyId}
                propertyID={element.advertNo}
                address={element.address1}
                address2={element.address2}
                area={element.area}
                // rent="5k --> Hardcoded"
                rent={element.rentAmount}
                // landlord="Archit--> Hardcoded"
                landlord={element.landlord}
                type={element.type}
                bedrooms={element.bedroom}
                bedSpace={element.bedspace}
                clickCardProperty={() => {
                  // console.log("Hey you clicked me ");
                  history.push("/PropertyDetail");
                  element.alreadyHasBid === "Y" &&
                    dispatch(setBidStatus("Withdraw bid"));
                  element.alreadyHasBid === "N" &&
                    dispatch(setBidStatus("Place bid"));
                  // dispatch(setBidStatus("Place bid"))
                  dispatch(setPropertyId(element.propertyId));
                  dispatch(setRoutingFrom("PropertyList"));
                }}
              />
            </>
          );
        })
      )}

      {showAlert && (
        <AlertOnLogout showAlert={showAlert} setShowAlert={setShowAlert} />
      )}
      {/* {status==="success"&&data.data.count>0 &&<PageContainer clickPrevious={clickPrevious} clickNext={clickNext} count={startPage}/>} */}
    </div>
  );
};
