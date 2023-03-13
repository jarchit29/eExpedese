//Import from Libraries 
import PropTypes from "prop-types";

import React from 'react'
//Import from images
import imgNetwrokError from "../../Style/Images/networkerror.png";

const ErrorMessage = (props) => {
  return (
    <div className="container text-center" style={{marginTop:"70px"}}>
    

     {props.networkImage?(<img src={imgNetwrokError} alt="image network error"  className='networkImage'/>):""}
                   
    {" "}
    <p className="text-danger my-3 text-center .font_16" style={{color:"#E00000",fontFamily: "Open Sans bold",margin:"20px"}}> {props.errorMessage} </p>{" "}
  </div>
  )
}

ErrorMessage.prototypes = {

  // Make props true for responses 

  networkImage: PropTypes.bool,
  
  
};

export default ErrorMessage