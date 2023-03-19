//Import from Libraries 
import PropTypes from "prop-types";
//Import from Components 
import { HamBurgerIcon } from "./HamBurgerIcon";
//Imports from Images
import imgBackArrow from "../../Style/Images/arrow.png";
import UserInfoIcon from "./UserInfoIcon";
import { IonCard } from "@ionic/react";

export const DashboardHeader = (props) => {
    return (
        <div>
            {/* Below div is for design of DashboardHeaders */}

            {/* Below is code for banner  */}

            <div className="banner-gr position-relative headerNewHeight hardcodedDashboardHeader">
                <div className="container ps-0">
                    <div className="position-absolute bottom-0">

                        {/* Make it true for back arrow icon */}

                        {props.backArrow ? (
                            <>
                                <img className="pb-2 mx-2" src={imgBackArrow} alt="Back Arrow" onClick={props.onBackArrow} />
                                <span className="ps-3 pt-2 ff-semi font_20 text-white mx-2">
                                    {props.DashboardHeaderTitle}
                                </span>
                            </>
                        ) : (
                            " "
                        )}

                        {/* Make it true for ham icon */}

                        {props.hamBurgerMenu ? (
                            <HamBurgerIcon title={props.DashboardHeaderTitle} />
                        ) : (
                            " "
                        )}

                        {props.userInfo ? (
                            <UserInfoIcon title={props.DashboardHeaderTitle} salutation = {props.salutation} />
                        ) : (
                            " "
                        )}

                        <>

                        </>

                    </div>
                </div>
            </div>
        </div>
    );
};
DashboardHeader.prototypes = {

    // Make props true for responses 

    backArrow: PropTypes.bool,
    hamBurgerMenu: PropTypes.bool,
    userInfo: PropTypes.bool,

};
