//Import from LIBRARIES

import axios from "axios";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import swal from "sweetalert";

//Import from COMPONENTS
import { Header } from "../Miscellaneous/Header";
import { Spinner } from "../Miscellaneous/Spinner";
import ErrorMessage from "../Miscellaneous/ErrorMessage";
import SessionTimeOut from "../Miscellaneous/SessionTimeOut";

export const MessagesDetail = () => {

  //
  let {React_App_Base_URL}=process.env;

  //Redux
  //  a) For getting values
  const responseFromLogin = useSelector((state) => state.ResponseFromLogin);
  const responseFromMessages = useSelector((state) => state.ResponseFromMessages);
  const partnerId = useSelector((state) => state.PartnerId);
  

  //For routes
  let history = useHistory();
  let onBackArrow = () => {
    history.goBack();
  };

  //For UrlEncoded data :- params to be passed in body :-
  const params = new URLSearchParams();

  params.append("partnerId", partnerId.Id);
  params.append("messageId", responseFromMessages.messageId);
  params.append("applicantId", responseFromLogin.applicantId);
  params.append("isLoggedIn", true);
  params.append("sessionId", responseFromLogin.sessionId);
  params.append("options", " ");

  //For Api calling message detail..!

  let fetchDetailMessage = async () => {

    let url = `${React_App_Base_URL}/getWIMMessageDetail`; //~Config
    

    // This is for headers :-
    var config = {
      headers: {},
    };

    let res = await axios.post(url, params, config);
    return res;
  };

  //Use Query for optimization

  const { error,data, status } = useQuery("keyMessageDetails", fetchDetailMessage);

  //For Api calling messsage delete 

  let fetchDeleteMessage = async () => {

    const paramsForDeleteMessage = new URLSearchParams();

    paramsForDeleteMessage.append("partnerId", partnerId.Id);
    paramsForDeleteMessage.append("WIMMessageId", responseFromMessages.messageId);
    paramsForDeleteMessage.append("applicantId", responseFromLogin.applicantId);
    paramsForDeleteMessage.append("isLoggedIn", true);
    paramsForDeleteMessage.append("sessionId", responseFromLogin.sessionId);
    paramsForDeleteMessage.append("options", " ");

    let url = `${React_App_Base_URL}/deleteWIMMessage`; //~Config

    // This is for headers :-
    var config = {
      headers: {},
    };

    await axios.post(url, paramsForDeleteMessage, config)
    .then((response)=>{
    
      // console.log(response.data);
     
      response.data.message==="deleteMessageSuccess" ?swal({
    
        icon:"success",
        text:"Message deleted successfully",
        closeOnClickOutside:false,

      }).then(()=>{
        history.goBack();
      }):swal({
        icon:"error",
        text:`Message can not be deleted due to ${response.data.messaage} `,
        closeOnClickOutside:false,
      }).then(()=>{
        history.goBack();
      })
       
    
         
    }).catch((error)=>{
 
       console.log(error.data);


    })
    
  };




  return (
    <ion-content>
      <>
        <div className="body">
          <Header
            HeaderTitle="Message details"
            backArrow={true}
            hamBurgerMenu={false}
            onBackArrow={onBackArrow}
          />
        </div>
        {status ==="loading"&&<Spinner/>}
        {status === "error" && (
          <>
          <ErrorMessage errorMessage="Error Fetching results "/>
          <ErrorMessage errorMessage= {error.message} />
          </>
      )}
           {
             status==="success"&&data.data.message==="Applicant is not logged in" && <SessionTimeOut/>
            
            }
        {/* put mt-80 if required */}
        {status==="success"&&   
        <div className="filterBox msg mt-80 ">
          <div id="all" className="tabcontent cont-bg">
            <div className="AllBox pb-3 w_100 border-b-1 pt-3 p-24">
              <h3 className="ff-semi current-color pb-0 font_16 line-height-20">
                <span className="text-color d_i_block">From:</span> {data.data.wimMessageJsonList[0].messageFrom}
              </h3>
              <div className="sub pb-1 text-color ff-semi">
                <span className="float-left font_14 ff-semi">
                  Subject: &nbsp;
                </span>{" "}
                <span className="details font_14 text-color float-left ff-reg">
                {data.data.wimMessageJsonList[0].subject}
                </span>
              </div>
              <small className="font_10 float-left">{data.data.wimMessageJsonList[0].creationTime}</small>
              <em className="font_10 float-left"></em>
              <small className="font_10 float-left"></small>
            </div>

            <div className="font_14 w_100 border-t-1 p-24 ff-reg">
            <div dangerouslySetInnerHTML= {{__html: data.data.wimMessageJsonList[0].messageBody}} />
            <div className="clearfix"></div>
            </div>
            <div className="p-24 over-hidden cont-bg border-t-1 delArea">
              <a className="btn-delete ff-semi" onClick={fetchDeleteMessage}>
                Delete
              </a>
            </div>
          </div>

          <div className="clearfix"></div>
        </div>}
      </>
    </ion-content>
  );
};
