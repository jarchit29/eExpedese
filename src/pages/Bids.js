import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import qs from "qs";
import BidList from "../components/Bids/BidList";
import { Spinner } from "../components/Miscellaneous/Spinner";
import ErrorMessage from "../components/Miscellaneous/ErrorMessage";
import swal from "sweetalert";
import SessionTimeOut from "../components/Miscellaneous/SessionTimeOut";


export const Bids = () => {
 

  const { Id } = useSelector((state) => state.PartnerId);
  const ResponseFromLogin = useSelector((state) => state.ResponseFromLogin);

  const userData = {
    partnerId: Id,
    applicantId: ResponseFromLogin.applicantId,
    sessionId: ResponseFromLogin.sessionId,
    isLoggedIn: true,
    options: "",
  };

  const {React_App_Base_URL} = process.env
  let fetchBids = async () => {

    let url =`${React_App_Base_URL}/getApplicantBidsExtended`; //~Staging
     
    

    let res = await axios({
      method: "post",    
      url,
      data: qs.stringify(userData),
    });
    return res;
  };

  //using react-query, useQuery api
  const {error, data, status } = useQuery("getBids", fetchBids);

 

  return (
    <>
    <div className="container pb-5 mt-80">
      <div className="row px-4 px-md-0 pb-3 bidArea">
        <div className="accordion px-0" id="accordionExample">

        {navigator.onLine ?<></>:(<>
              <ErrorMessage
                errorMessage={`We have experienced a connection error. Please check your internet connection and try again`}
                networkImage={true}
              />
            </>)}

          {status === "loading" && navigator.onLine && <Spinner/>}


          {status === "error" && navigator.onLine && (
            <>
              <ErrorMessage
                errorMessage={`We have experienced a connection error. Please check your internet connection and try again`}
                networkImage={true}
              />
            </>
          )}
      

          {status === "success"&& navigator.onLine && data.data.message !=="Applicant is not logged in"&&data
            ? data.data.myBidJsonList.map((item, index) => (
                <BidList
                  key={index}
                  bidLabel={item.bidlabel}
                  // headingColor={() => {
                  //   if (item.bidlabel === "CurrentBids") {
                  //     return `#0076C0`;
                  //   } else if (item.bidlabel === "ShortListedBids") {
                  //     return `#A4195C`;
                  //   }
                  // }}
                  bidCount={item.bidcount}
                 
                />
              ))
            : <ErrorMessage />}
            {
             status==="success"&&data.data.message==="Applicant is not logged in" && <SessionTimeOut/>
            
            }
        </div>
      </div>
    </div>
    </>
  );
};
