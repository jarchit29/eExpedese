//Imports from LIBRARIES
import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router';

// import CurrentBids from './CurrentBids'
// import ShortListedBids from './ShortListedBids'
// import UnderReview from './UnderReview'

function BidList(props) {
  let history = useHistory();
    const [textColor, settextColor] = useState();
    const [arrowStyle,setArrow] = useState();

    // useEffect(() => {
    //     if(props.bidLabel === 'CurrentBids'){
    //         settextColor(`#0076C0`);
    //         setArrow(`current-bid-arrow`);
    //     }
    //     else if(props.bidLabel === 'ShortListedBids'){
    //         settextColor(`#A4195C`);
    //         setArrow(`shortlist-bid-arrow`);
    //     }
    //     else{
    //         settextColor(`#696969`);
    //         setArrow(`bid-arrow`);
    //     }
       
    // }, [])
    useEffect(() => {
      // settextColor(`#0076C0`);
      // setArrow(`current-bid-arrow`);
      settextColor(`#A4195C`);
            setArrow(`shortlist-bid-arrow`);
     
    }, [])

    
  const clickHandler = (bidlabel) =>{
    if(bidlabel === "CurrentBids"){
      history.push('./CurrentBids')
    }
    else if(bidlabel === "ShortListedBids") {
      history.push('./ShortListedBids')

    }
    else if(bidlabel === "OfferedToOthers") {
      history.push('./OfferedToOthers')

    }
    else if(bidlabel === "UnderReview") {
      history.push('./UnderReview')

    }
    else if(bidlabel === "Declined") {
      history.push('./Declined')

    }
    else if(bidlabel === "previousBids") {
      history.push('./PreviousBids')
    }
    else if(bidlabel === "withdrawnBids") {
      history.push('./WithdrawnBids')
    }
    else if(bidlabel === "letBids") {
      history.push('./LetBids')
    }
    else if(bidlabel === "OfferedBids") {
      history.push('./OfferedBids')
    }
  }

  
    return (
        <div>
              <div className="accordion-item border-0">
              <h2 className={`accordion-header bid-arrow ${arrowStyle} `} id="headingTwo">
                {/* ${arrowStyle} */}
          {/* <h2 className="accordion-header bid-arrow current-bid-arrow" id="headingOne"> 
            <h2 className="accordion-header bid-arrow" id="headingThree">
          */}


              <button
              
                className="accordion-button bg-transparent shadow-none border-light border-10 collapsed mb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                onClick={() => clickHandler(props.bidLabel)}
                style={{marginTop:"20px"}}
              >
                <span className="d-block">
                  <p className="regular-color font_14 ff-semi mb-2" style={{color: textColor}}>   
                  {/* style={{color: textColor}} */}
                  {/* {props.bidLabel} */}
                  {/* {console.log(props.bidLabel)} */}
                  See {props.bidLabel==="CurrentBids"?"current bids":props.bidLabel==="ShortListedBids"?"shortlisted bids":props.bidLabel==="OfferedToOthers"?"offered to others":props.bidLabel==="UnderReview"?"under review":props.bidLabel==="previousBids"?"previous bids":props.bidLabel==="withdrawnBids"?"withdrawn bids":props.bidLabel==="letBids"?"let bids":props.bidLabel==="OfferedBids"?"offered bids":props.bidLabel==="Declined"?"declined":props.bidLabel}
                  </p>
                  <p className="font_36 ff-semi mb-0">{props.bidCount}</p>
                </span>
              </button>
            </h2>
          </div>
        </div>
    )
}

export default BidList
