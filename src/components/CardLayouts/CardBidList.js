/* eslint-disable jsx-a11y/anchor-is-valid */

import lambeth from "../../Style/Images/lambeth.png";
import imgHomeFinder from "../../Style/Images/homefinder.png";
import moment from 'moment';


export const CardBidList = (props) => {
  const closingDate = moment(props.closingDate,'YYYY/MM/DD HH:mm').format('DD/MM/YYYY HH:mm');
  return (
    <div className="container">
  
      <div className="row px-4 px-md-0">
        <div className=" px-0">
          <div className="border-0 card">
            <div className="bg-transparent shadow-box light-border border-10 mb-3 p-3" onClick={props.clickCardBid}>
              <div className="d-flex">
                <div className="d-block pe-2">
                  { <img alt="property " src = {props.Image}/> ? <img alt="property " src = {props.Image} />: <img src={imgHomeFinder} alt=''/>}
                </div>
                <div className="float-right pe-1">
                  <p className="font_10 mb-0 current-color">{props.advertNumber}</p>
                  <p className="font_14 mb-2 ff-semi">
                    {props.address1} <br/>
                    {props.address2}
                  </p>

                  {
                    props.closingDate?<div>

                  <p className="font_10 mb-0">Closing date</p>
                  <p className="font_14"> <time>{closingDate}</time></p>

                  </div> :<></>
                  }
                </div>
              </div>
              <div className="cont-bg p-2 rounded">
                <div className="row p-1">
                  <div className="col-6">
                    <div className="font_12 color-lb">Bid position</div>
                    <div className="ff-semi current-color pb-0 font_14">
                      {props.bidPosition}/{props.totalBids}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="font_12">Source</div>
                    <div className="ff-semi current-color pb-0 font_14">Web</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
     
    </div>
  );
};

