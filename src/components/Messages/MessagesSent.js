export const MessagesSent = (props) => {
  return (
    <div onClick={props.onCardClick}>
      <div className="AllBox pb-3 w_100 border-b-1 pt-3 p_15 cont-bg ">
        <h3 className="ff-semi pb-0 font_16 dotted-line">
          {props.messageFrom}
        </h3>
        <div className="font_14 pb-1">{props.messageBody}</div>
        <small className="font_10 float-left">{props.messageTime}</small>
        {/* <em className="font_10 float-left">-</em> */}
        {/* <small className="font_10 float-left">{props.messageTime}</small> */}
      </div>
    </div>
  );
};
