//Import from libraries

import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useQuery } from "react-query";
import qs from "qs";
import { useHistory } from "react-router";
import { Draggable, Droppable, DragDropContext } from "react-beautiful-dnd";
import swal from "sweetalert";
import { useDispatch } from "react-redux";

//Import from components

import { Header } from "../Miscellaneous/Header";
import { CardBidList } from "../CardLayouts/CardBidList";
import { Spinner } from "../Miscellaneous/Spinner";
import ErrorMessage from "../Miscellaneous/ErrorMessage";
import { CardAfterSetBidPref } from "../CardLayouts/CardAfterSetBidPref";
import SessionTimeOut from "../Miscellaneous/SessionTimeOut";
import IdleTimer2 from "../Miscellaneous/Idletimer2";
import {
  setPropertyId,
  setRoutingFrom,
} from "../../redux/ResponseFromPropertyList";

function CurrentBids() {
  //for idle timer
  //Arrays and variables for bid preference :-

  let arrayOfIds = [];
  const [setPref, setSetPref] = useState("Set");
  const [bidsArray, setBidsArray] = useState([]);

  //On clicks for bid preference

  let onSetPref = () => {
    refetch();
    localStorage.setItem("afterDragArray", " ");
    setSetPref("Save");
  };

  //For getting url from env files
  const { React_App_Base_URL } = process.env;

  //Use history for routes
  let history = useHistory();

  // Below is for getting response from REDUX

  const { Id } = useSelector((state) => state.PartnerId);
  const ResponseFromLogin = useSelector((state) => state.ResponseFromLogin);

  //For setting to redux
  const dispatch = useDispatch();

  //Below is for use query

  //A~ For bid list

  const userData = {
    partnerId: Id,
    applicantId: ResponseFromLogin.applicantId,
    sessionId: ResponseFromLogin.sessionId,
    isLoggedIn: true,
    options: "",
  };

  let fetchCurrentBids = async () => {
    let url = `${React_App_Base_URL}/getApplicantCurrentBidsExtended`; //~Staging

    let res = await axios({
      method: "post",
      url,
      data: qs.stringify(userData),
    });
    // setBidsArray(res.data.propertyJsonList);

    let comparee = (a, b) => {
      let valA = valuesStore(a);
      let valB = valuesStore(b);

      return valA - valB;
    };

    let valuesStore = (element) => {
      return element.bidPreferenceCount;
    };
    setBidsArray(res.data.propertyJsonList.sort(comparee));

    return res;
  };

  //using react-query, useQuery api

  const { error, data, status, refetch } = useQuery(
    "getCurrentBids",
    fetchCurrentBids
  );

  //B ~ Api calls for aet bid prefernce

  let apiCallSetBidPref = async () => {
    const params = new URLSearchParams();

    params.append("partnerId", Id);
    params.append("applicantId", ResponseFromLogin.applicantId);
    // params.append("bidPeriodIdsStr",arrayOfIds);
    params.append("bidPeriodIdsStr", localStorage.getItem("afterDragArray"));
    params.append("sessionId", ResponseFromLogin.sessionId);
    params.append("isLoggedIn", true);
    params.append("options", " ");

    let url = `${React_App_Base_URL}/saveBidPreferences`; //~Staging;

    // This is for headers :-
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "*/*",
      },
    };

    //Axios

    await axios
      .post(url, params, config)
      .then((response) => {
        // console.log("success", response.data);
        // console.log(response.data.message);

        response.data.message === "preferenceSavedSuccessfully" &&
          swal({ text: "Preference saved successfully" });

        // alert("Saved successfully");

        response.data.message === "Wrong Bid period Id." &&
          swal({ text: "Preference order remains same" });

        // alert("Preference order remains same ");
      })
      .catch((error) => {
        console.log("Error calling save bid pref api is :- " + error);
      });
  };

  let onSavePref = () => {
    refetch();
    apiCallSetBidPref();
    setSetPref("Set");
  };

  //Drag functions and styles

  const onDragEnd = (results) => {
    //? This is for making a new array on every drag.

    let tempBidArray = [...bidsArray];
    let [selectedRow] = tempBidArray.splice(results.source.index, 1);
    tempBidArray.splice(results.destination.index, 0, selectedRow);
    setBidsArray(tempBidArray);
    // console.log("Results ", results);

    // ?This is for saving bid period ids in order and checking it in console.

    tempBidArray.map((items, index) => {
      // !Check these consoles in case of failure.!

      // console.log("Iteams yeh " + index );

      // console.log("Bid period IDS :- "+ items.bidPeriodId)

      // console.log("Final array becomes " + arrayOfIds)

      arrayOfIds.push(items.bidPeriodId);
      localStorage.setItem("afterDragArray", arrayOfIds);
    });
  };

  return (
    <ion-content>
      <IdleTimer2 />
      <div>
        <Header
          HeaderTitle={"Current bids"}
          backArrow={true}
          onBackArrow={() => history.goBack()}
        />
        <div className="row mt-5  px-4 px-md-0 propArea">
          {/* <p className="font_10 gray mb-0 mt-3 ps-0">showing</p> */}
          <p className="font_12 ps-0 mt-5" style={{ marginLeft: "22px" }}>
            Showing {status === "success" && data ? data.data.count : null} of{" "}
            {status === "success" && data ? data.data.totalRecords : null} bids
          </p>
        </div>

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
        {status === "success" && data && data.data.count === 0 && (
          <ErrorMessage errorMessage={"No record found"} />
        )}
        {/* For session time out  */}

        {status === "success" &&
          data.data.message === "Applicant is not logged in" && (
            <SessionTimeOut />
          )}

        {/* //?This is the normal case ~ without bid pref  */}

        {status === "success" &&
          navigator.onLine &&
          setPref === "Set" &&
          data.data.propertyJsonList.map((item, index) => {
            // console.log(item.propertyId + "-" + index);
            return (
              status === "success" && (
                <CardBidList
                  key={item.propertyId}
                  advertNumber={item.advertNo}
                  address1={item.address1}
                  address2={item.address2}
                  area={item.area}
                  closingDate={item.closingDate}
                  bidPosition={item.bidPosition}
                  totalBids={item.totalBids}
                  Image={item.propertyImageUrl}
                  count={item.count}
                  clickCardBid={() => {
                    history.push("/PropertyDetail");
                    dispatch(setPropertyId(item.propertyId));
                    dispatch(setRoutingFrom("CBids"));
                  }}
                />
              )
            );
          })}

        {/* //TODO:-We have to implement drag and drop on the below element  */}

        {status === "success" && setPref === "Save" && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {bidsArray.map((item, index) => {
                    return (
                      <>
                        <Draggable
                          key={`${item.propertyId}-${index}`}
                          draggableId={`${item.propertyId}-${index}`}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <>
                              <div
                                key={item.propertyId}
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <CardAfterSetBidPref
                                  key={item.propertyId}
                                  advertNumber={item.advertNo}
                                  address1={item.address1}
                                  address2={item.address2}
                                  area={item.area}
                                  closingDate={item.closingDate}
                                  bidPosition={item.bidPosition}
                                  totalBids={item.totalBids}
                                  Image={item.propertyImageUrl}
                                  count={item.count}
                                  // indexx={index + 1}
                                  indexx={item.bidPreferenceCount}
                                  setTo={index + 1}
                                />
                              </div>
                            </>
                          )}
                        </Draggable>
                      </>
                    );
                  })}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}

        {/* Bottom navigation , in case of portals which use bid preference */}
        {/* //! Below logic should be only distrubed in case of changing bottom navigation */}

        {
          //  &&status === "success" && data.data.count >1
          (Id == 1008 ||
            Id == 1011 ||
            Id == 3 ||
            Id == 1034 ||
            Id == 1032 ||
            Id == 1050) &&
          status === "success" &&
          data.data.count > 1 &&
          setPref === "Set" ? (
            <div className="mt-5 pt-3">
              <div className="bid ">
                <a
                  id="idPlaceBid"
                  className="search font_14 ff-semi t-d-none shortlist-bg float-end"
                  style={{ width: "100%" }}
                  onClick={onSetPref}
                >
                  Set bid preference
                </a>
              </div>
            </div>
          ) : (
            (Id == 1008 ||
              Id == 1011 ||
              Id == 3 ||
              Id == 1034 ||
              Id == 1032 ||
              Id == 1050) &&
            status === "success" &&
            data.data.count > 1 &&
            setPref === "Save" && (
              <div className="mt-5 pt-3">
                <div className="bid ">
                  <a
                    id="idPlaceBid"
                    className="search font_14 ff-semi t-d-none blue-bg float-end"
                    style={{ width: "100%" }}
                    onClick={onSavePref}
                  >
                    Save bid preference
                  </a>
                </div>
              </div>
            )
          )
        }
      </div>
    </ion-content>
  );
}

export default CurrentBids;
