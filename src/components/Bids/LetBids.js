import React, { useState, useRef } from "react";
import { Header } from "../Miscellaneous/Header";
import { useSelector } from "react-redux";
import axios from "axios";
import qs from "qs";
import { CardBidList } from "../CardLayouts/CardBidList";
import { useHistory } from "react-router";
import { useQuery } from "react-query";
import { Spinner } from "../Miscellaneous/Spinner";
import ErrorMessage from "../Miscellaneous/ErrorMessage";
import ReactPaginate from "react-paginate";
import NextIcon from "../../Style/Images/next.png";
import previousIcon from "../../Style/Images/prev.png";
import SessionTimeOut from "../Miscellaneous/SessionTimeOut";
import IdleTimer2 from "../Miscellaneous/Idletimer2";
import { useDispatch } from "react-redux";
import {
  setPropertyId,
  setRoutingFrom,
} from "../../redux/ResponseFromPropertyList";

function LetBids() {
  const contentRef = useRef(null);

  const [allProperties, setAllProperties] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalRecords, setTotalRecord] = useState(0);
  const propertiesPerPage = 10;
  const pageVisited = pageNumber * propertiesPerPage;
  let history = useHistory();

  const { Id } = useSelector((state) => state.PartnerId);
  const ResponseFromLogin = useSelector((state) => state.ResponseFromLogin);

  const userData = {
    partnerId: Id,
    applicantId: ResponseFromLogin.applicantId,
    sessionId: ResponseFromLogin.sessionId,
    isLoggedIn: true,
    options: "",
  };

  const { React_App_Base_URL } = process.env;
  let fetchDeclinedBids = async () => {
    let url = `${React_App_Base_URL}/getApplicantLetBids`; //~Staging

    let res = await axios({
      method: "post",
      url,
      data: qs.stringify(userData),
    });
    setTotalRecord(res.data.totalRecords);
    setAllProperties(res.data.propertyJsonList);

    return res;
  };

  //using react-query, useQuery api
  const { error, data, status } = useQuery(
    "getDeclinedBids",
    fetchDeclinedBids,
    {
      cacheTime: 0,
    }
  );

  //For setting to redux
  const dispatch = useDispatch();

  // console.log("all properties", allProperties);
  // console.log("pageVisited", pageVisited);

  const displayProperties = allProperties.slice(
    pageVisited,
    pageVisited + propertiesPerPage
  );

  const pageCount = Math.ceil(totalRecords / propertiesPerPage);
  const handlePageClick = ({ selected }) => {
    contentRef.current && contentRef.current.scrollToTop(600);
    // console.log("prop from react paginate", selected);
    setPageNumber(selected);
  };

  return (
    <ion-content ref={contentRef} scrollEvents={true}>
      <IdleTimer2 />
      <div>
        <Header
          HeaderTitle={"Let bids"}
          backArrow={true}
          onBackArrow={() => history.goBack()}
        />
        <div className="row mt-5  px-4 px-md-0 propArea">
          {/* <p className="font_10 gray mb-0 mt-3 ps-0">Showing</p> */}
          <p className="font_12 ps-0 mt-5" style={{ marginLeft: "22px" }}>
            Showing {displayProperties.length} of{" "}
            {status === "success" && data ? totalRecords : null} bids
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
        {status === "success" && data && data.data.count === 0 && (
          <ErrorMessage errorMessage={"No record found"} />
        )}

        {status === "error" && navigator.onLine && (
          <>
            <ErrorMessage
              errorMessage={`We have experienced a connection error. Please check your internet connection and try again`}
              networkImage={true}
            />
          </>
        )}

        {status === "success" &&
          data.data.message === "Applicant is not logged in" && (
            <SessionTimeOut />
          )}

        {status === "success" && navigator.onLine && data ? (
          displayProperties.map((item, index) => {
            return (
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
                  dispatch(setRoutingFrom("Bids"));
                }}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
      <div className="mt-5 pt-3">
        <div className="paginateContainer">
          <ReactPaginate
            previousLabel={<img src={previousIcon} alt="next icon btton" />}
            breakLabel="..."
            nextLabel={<img src={NextIcon} alt="next icon btton" />}
            onPageChange={handlePageClick}
            pageCount={pageCount}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            renderOnZeroPageCount={null}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            breakClassName={"breakBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </ion-content>
  );
}

export default LetBids;
