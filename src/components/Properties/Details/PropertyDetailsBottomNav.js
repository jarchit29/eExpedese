//Imports from Library

import axios from "axios";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";

import { setBidStatus } from "../../../redux/ResponseFromPropertyDetials";

export const PropertyDetailsBottomNav = (props) => {
  //Base url

  const { React_App_Base_URL } = process.env;

  //Redux

  const dispatch = useDispatch();
  const responseFromLogin = useSelector((state) => state.ResponseFromLogin);
  const responseFromPropertyList = useSelector(
    (state) => state.ResponseFromPropertyList
  );
  const responseFromPropertyDetails = useSelector(
    (state) => state.ResponseFromPropertyDetails
  );
  const partnerId = useSelector((state) => state.PartnerId);

  // const [placeBid, setPlaceBid] = useState("Place Bid");  --> Now using local storage for the same

  //For UrlEncoded data :- params to be passed in body :-
  const params = new URLSearchParams();
  params.append("applicantId", responseFromLogin.applicantId);
  params.append("isLoggedIn", true);
  params.append("sessionId", responseFromLogin.sessionId);
  params.append("propertyId", responseFromPropertyList.propertyId);
  params.append("bidPeriodId", responseFromPropertyDetails.bidPeriodId);
  params.append("options", " ");


  //Bid position :-

  let onCLickBidPosition = () => {
    let url = `${React_App_Base_URL}/getMyEstimatedBidPosition`; //~Config

    // This is for headers :-
    const config = {
      headers: {},
    };

    let resBidPosition = axios
      .post(url, params, config)
      .then((dataBidPosition) => {
        // console.log(dataBidPosition.data);

        dataBidPosition &&
          (dataBidPosition.data.message === "Success"
            ? dataBidPosition.data.myBidPositionJsonList[0].bidMessage ===
              "Applicant has already bid on this property"
              ? swal({
                  text:
                    "Your actual bid position is " +
                    dataBidPosition.data.myBidPositionJsonList[0]
                      .myBidPosition +
                    " .There are " +
                    dataBidPosition.data.myBidPositionJsonList[0].totalBid +
                    " bids on this property",
                })
              : swal({
                  text:
                    "Your estimated bid position is " +
                    dataBidPosition.data.myBidPositionJsonList[0]
                      .myBidPosition +
                    " .There are " +
                    dataBidPosition.data.myBidPositionJsonList[0].totalBid +
                    " bids on this property",
                })
            : swal({
                text:
                  " Bid position can not be estimated as : " +
                  dataBidPosition.data.message,
              }));
      });

    return resBidPosition;
  };

  //Place bid

  let fetchPlaceBid = async () => {
    let url = `${React_App_Base_URL}/placeBid`; //~Config

    // This is for headers :-
    const config = {
      headers: {},
    };

    let resPlaceBid = axios
      .post(url, params, config)
      .then((response) => {
        // console.log(response.data);

        // response.data.message === "Bid placed successfully" ||
        // response.data.message === "applicantAlreadyPlacedBid"

        response.data.message === "Bid placed successfully"
          ? dispatch(setBidStatus("Withdraw bid"))
          : dispatch(setBidStatus("Place bid"));

        response.data.message === "Bid placed successfully"
          ? swal({ text: "Bid has been placed " })
          : response.data.message === "cfeBidLimitExceeds"
          ? swal({
              text: "Bid can not be placed as bid limit is reached",
            })
          : response.data.message === "applicantAlreadyPlacedBid"
          ? swal({
              text: "You have already placed a bid ",
            })
          : response.data.message === "insufficientPointsError"
          ? swal({
              text: "Bid can not be placed due to , insufficient points ",
            })
          : response.data.message === "applicantCategoryCodeError"
          ? swal({
              text: "Bid can not be placed , as this is for certain applicant categories",
            })
          : response.data.message === "suspendedFromBidding"
          ? swal({
              text: "You can not place a bid while suspended",
            })
          : response.data.message === "mobilityCategoryCodeError"
          ? swal({
              text: "For certain mobility needs",
            })
          : response.data.message === "shelteredAccomodationError"
          ? swal({
              text: "Bid not placed as its for ,sheltered accommodation applicants only",
            })
          : response.data.message === "temporaryAccomodationError"
          ? swal({
              text: "Bid not placed as its for ,temporary accommodation applicants only",
            })
          : response.data.message === "numberOfBedroomsError"
          ? swal({
              text: "Bid not placed because of insufficient bedroom need",
            })
            : response.data.message === "applicantAlreadyLetProperty"
            ? swal({
                text: "You have been let a property",
              })
          : response.data.message === "currencyBandErrorMessageCfe"
          ? swal({
              text: "Bid not placed as its for , certain currency bands",
            })
          : swal({
              text: "Bid has not been placed due to : " + response.data.message,
            });
      })
      .catch((error) => {
        console.log("Error api callinng is :-" + error);
      });

    return resPlaceBid;
  };

  let onCLickPlaceBid = () => {
    fetchPlaceBid();
  };

  // Withdraw bid

  let fetchWithdrawBid = async () => {
    let url = `${React_App_Base_URL}/withdrawBid`; //~Config

    // This is for headers :-
    const config = {
      headers: {},
    };
    let resWithdrawBid = axios
      .post(url, params, config)
      .then((response) => {
        // console.log(response);

        response.data.message === "Bid withdrawn successfully" ||
        response.data.message === ""
          ? dispatch(setBidStatus("Place bid"))
          : dispatch(setBidStatus("Withdraw bid"));

        response.data.message === "Bid withdrawn successfully"
          ? swal({ text: "Bid has been withdrawn " })
          : response.data.message === ""
          ? swal({
              text: "Bid does not exist on this property",
            })
          : swal({
              text:
                "Bid can not been withdrawn due to : " + response.data.message,
            });
      })
      .catch((error) => {
        console.log("Error calling api is " + error);
      });

    return resWithdrawBid;
  };

  let onClickWithdrawBid = () => {
    fetchWithdrawBid();
  };

  // placeBidstatus==="success"&& console.log("Bid message ::--"+dataBidPosition.data.myBidPositionJsonList[0].bidMessage)

  return (
    <>
      <div className="bid ">
        {partnerId.Id !== 1019 && partnerId.Id !== 14 && partnerId.Id !== 1004 && (
          <button
            className="bidBg font_14 ff-semi t-d-none shortlist-bg float-start"
            onClick={onCLickBidPosition}
            href=""
          >
            Bid position
          </button>
        )}

        {partnerId.Id === 1019 ||
        partnerId.Id === 14 ||
        partnerId.Id === 1004 ? (
          <button
            id="idPlaceBid"
            className="search font_14 ff-semi t-d-none blue-bg float-end"
            style={{ width: "100%" }}
            onClick={
              responseFromPropertyDetails.bidStatus === "Withdraw bid"
                ? onClickWithdrawBid
                : onCLickPlaceBid
            }
          >
            {responseFromPropertyDetails.bidStatus}
          </button>
        ) : (
          <button
            id="idPlaceBid"
            className="search font_14 ff-semi t-d-none blue-bg float-end"
            onClick={
              responseFromPropertyDetails.bidStatus === "Withdraw bid"
                ? onClickWithdrawBid
                : onCLickPlaceBid
            }
          >
            {responseFromPropertyDetails.bidStatus}
          </button>
        )}
      </div>
    </>
  );
};
