//Import from Libraries 
import PropTypes from "prop-types";
//Import from Components 
import { HamBurgerIcon } from "./HamBurgerIcon";
//Imports from Images
import imgBackArrow from "../../Style/Images/arrow.png";

export const Header = (props) => {
  return (
    <div>
      {/* Below div is for design of headers */}

      {/* Below is code for banner  */}

      <div className="banner-gr position-relative h-5 hardcodedHeader">
        <div className="container ps-0">
          <div className="position-absolute bottom-0 pb-3">

            {/* Make it true for back arrow icon */}

            {props.backArrow ? (
              <>
                <img className="pb-2 mx-2" src={imgBackArrow} alt="Back Arrow" onClick={props.onBackArrow} />
                <span className="ps-3 pt-2 ff-semi font_20 text-white mx-2">
                  {props.HeaderTitle}
                </span>
              </>
            ) : (
              " "
            )}

            {/* Make it true for ham icon */}

            {props.hamBurgerMenu ? (
              <HamBurgerIcon title={props.HeaderTitle} />
            ) : (
              " "
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
Header.prototypes = {

  // Make props true for responses 

  backArrow: PropTypes.bool,
  hamBurgerMenu: PropTypes.bool,
  
};
