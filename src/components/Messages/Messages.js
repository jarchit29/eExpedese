//Imports from LIBRARIES
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

//Imports from Components

import { MessagesAll } from "./MessagesAll";
import { MessagesRead } from "./MessagesRead";
import { MessagesSent } from "./MessagesSent";
import { MessagesUnread } from "./MessagesUnread";

//Imports from common files
import {
  setmessageId,
  setmessageAll,
  setmessageRead,
  setmessageUnread,
  setmessageSent,
} from "../../redux/ResponseFromMessages";
import SessionTimeOut from "../Miscellaneous/SessionTimeOut";

export const Messages = () => {
  //Redux

  //  a) For getting values

  const responseFromLogin = useSelector((state) => state.ResponseFromLogin);
  const partnerId = useSelector((state) => state.PartnerId);
  const resposeFromMessages = useSelector(
    (state) => state.ResponseFromMessages
  );

  // b) For setting values
  const dispatch = useDispatch();

  const [messageTab, setMessageTab] = useState("All");
  const [messagesArray, setMessagesArray] = useState([]);

  let sentMessageCount = 0;
  let readMessageCount = 0;
  let unreadMessageCount = 0;

  let history = useHistory();



  //For UrlEncoded data :- params to be passed in body :-
  const params = new URLSearchParams();

  params.append("partnerId", partnerId.Id);
  params.append("applicantId", responseFromLogin.applicantId);
  params.append("isLoggedIn", true);
  params.append("sessionId", responseFromLogin.sessionId);
  params.append("start", "0");
  params.append("pageSize", "50");
  params.append("options", " ");

  let fetchMessages = async () => {
    const { React_App_Base_URL } = process.env;

    let url = `${React_App_Base_URL}/getWIMMessagesList`;

    // This is for headers :-
    var config = {
      headers: {},
    };

    let res = await axios.post(url, params, config);

    //Sorting AlGO for messages , sort for basis of read and unread

    let comparee = (a, b) => {
      let valA = valuesStore(a).toLowerCase();
      let valB = valuesStore(b).toLowerCase();

      if (valA > valB) {
        return 1;
      } else if (valB > valA) {
        return -1;
      }

      return 0;
    };

    let valuesStore = (element) => {
      return element.readStatus;
    };

    setMessagesArray(res.data.wimMessageJsonList.sort(comparee).reverse());

    return res;
  };

  //Use Query for optimization

  const { data, status } = useQuery("keyMessages", fetchMessages);

  //This is for fixing the count from api and segregate to read , unread and sent.

  status === "success" &&
  data.data.count != 0 &&
  data.data.message != "Applicant is not logged in" &&
  data ? (
    data.data.wimMessageJsonList.map((element) => {
      // {console.table(element)}
      if (element.readStatus === "Read") {
        readMessageCount++;
        // console.log("Read status in if :- "+element.readStatus +" Count " +readMessageCount);
      } else if (element.readStatus === "Unread") {
        unreadMessageCount++;
      } else if (element.readStatus === "Sent") {
        sentMessageCount++;
      }
    })
  ) : (
    <></>
  );
  //This is dispatching count to store on getting satus as success

  status === "success" && data.data.message != "Applicant is not logged in" ? (
    dispatch(setmessageAll(data.data.count)) &&
    dispatch(setmessageRead(readMessageCount)) &&
    dispatch(setmessageUnread(unreadMessageCount)) &&
    dispatch(setmessageSent(sentMessageCount))
  ) : (
    <></>
  );

  return (
    <div>
      <div className="filterBox msg mt-80">
        <div className="tab">
          <span
            onClick={() => {
              setMessageTab("All");
            }}
          >
            {messageTab === "All" ? (
              <button className="tablinks font_12 ff-reg active ">
                All <span>({resposeFromMessages.messageAll})</span>
              </button>
            ) : (
              <button className="tablinks font_12 ff-reg ">
                All <span>({resposeFromMessages.messageAll})</span>
              </button>
            )}
          </span>

          <span
            onClick={() => {
              setMessageTab("Unread");
            }}
          >
            {messageTab === "Unread" ? (
              <button className="tablinks font_12 ff-reg active">
                Unread <span>({resposeFromMessages.messageUnread})</span>
              </button>
            ) : (
              <button className="tablinks font_12 ff-reg">
                Unread <span>({resposeFromMessages.messageUnread})</span>
              </button>
            )}
          </span>
          <span
            onClick={() => {
              setMessageTab("Read");
            }}
          >
            {messageTab === "Read" ? (
              <button className="tablinks font_12 ff-reg active">
                Read <span>({resposeFromMessages.messageRead})</span>
              </button>
            ) : (
              <button className="tablinks font_12 ff-reg">
                Read <span>({resposeFromMessages.messageRead})</span>
              </button>
            )}
          </span>
          <span
            onClick={() => {
              setMessageTab("Sent");
            }}
          >
            {messageTab == "Sent" ? (
              <button className="tablinks font_12 ff-reg active">
                Sent <span>(0)</span>
              </button>
            ) : (
              <button className="tablinks font_12 ff-reg">
                Sent <span>(0)</span>
              </button>
            )}
          </span>
        </div>

        <div className="msg-cont"></div>

        {status === "success" &&
          data.data.message === "Applicant is not logged in" && (
            <SessionTimeOut />
          )}

        {status === "success" &&
        data.data.message != "Applicant is not logged in" ? (
          messagesArray.map((element) => {
            return (
              messageTab === "All" && (
                <MessagesAll
                  onCardClick={() => {
                    history.push("/MessagesDetail");
                    dispatch(setmessageId(element.messageId));
                  }}
                  key={element.messageId}
                  messageFrom={element.messageFrom}
                  messageBody={element.subject}
                  messageTime={element.creationTime}
                  messageStatus={element.readStatus}
                />
              )
            );
          })
        ) : (
          <></>
        )}

        {status === "success" &&
        data.data.message != "Applicant is not logged in" &&
        data ? (
          data.data.wimMessageJsonList.map((element) => {
            return (
              messageTab === "Unread" &&
              element.readStatus === "Unread" && (
                <MessagesUnread
                  onCardClick={() => {
                    history.push("/MessagesDetail");
                    dispatch(setmessageId(element.messageId));
                  }}
                  key={element.messageId}
                  messageFrom={element.messageFrom}
                  messageBody={element.subject}
                  messageTime={element.creationTime}
                />
              )
            );
          })
        ) : (
          <></>
        )}

        {status === "success" &&
        data.data.message != "Applicant is not logged in" &&
        data ? (
          data.data.wimMessageJsonList.map((element) => {
            return (
              messageTab == "Read" &&
              element.readStatus === "Read" && (
                <MessagesRead
                  onCardClick={() => {
                    history.push("/MessagesDetail");
                    dispatch(setmessageId(element.messageId));
                  }}
                  key={element.messageId}
                  messageFrom={element.messageFrom}
                  messageBody={element.subject}
                  messageTime={element.creationTime}
                />
              )
            );
          })
        ) : (
          <></>
        )}

        {status === "success" &&
        data.data.message != "Applicant is not logged in" &&
        data ? (
          data.data.wimMessageJsonList.map((element) => {
            return (
              messageTab === "Sent" &&
              element.readStatus === "Sent" && (
                <MessagesSent
                  onCardClick={() => {
                    history.push("/MessagesDetail");
                    dispatch(setmessageId(element.messageId));
                  }}
                  key={element.messageId}
                  messageFrom={element.messageFrom}
                  messageBody={element.subject}
                  messageTime={element.creationTime}
                />
              )
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
