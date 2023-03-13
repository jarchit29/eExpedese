import { React, useEffect ,useState} from "react";
import $ from "jquery";
import imgMaskGrp from "../../../Style/Images/Mask Group 1611.png";
import MoreRentDetails from "../../PopUps/MoreRentDetails";
import { useSelector } from "react-redux";
import swal from "sweetalert";



export const PropertyDetailContent = (props) => {
  useEffect(() => {
    $(document).ready(function () {
      $(".read-more").click(function () {
        $(".text-box p").css("max-height", "inherit");
        $(this).hide();
      });
    });
  }, []);
  
  

  let createMarkup = () => {
    return { __html: props.notes };
  };

  // For popups

const [openModal, setOpenModal] = useState(false)
const rentDetails = useSelector((state) => state.ResponseFromPropertyDetails);

  return (
    <div>
      <div className="locationBox mt-4">
        <p className="font_10 mb-0">{props.addressPropertyId}</p>
        <p className="font_14 mb-2 ff-semi">
          {props.addressArea} ({props.landlord}) 
        </p>
        <p className="font_14 mb-2 ff-semi">{props.addressAdminArea}</p>

        <div className="location">
          <div className="left">
            <img src={imgMaskGrp} alt="Icon of Location Pin" />
          </div>
          <div className="right">
            <p className="font_14 mb-2 ff-reg">
              {props.address1} , {props.address2}, {props.addressPostCode}
            </p>
          </div>
        </div>
        {/* <p className="font_12 mb-0">Post code : {props.addressPostCode}</p> */}
      </div>

      {/* Closing and opening date */}
      <div className="cont-bg p-2 container border-10" style={{marginBottom:"10px"}}>
        <div className="row p-1">
          <p className="col-6">
            Opening date 
          </p>
          <p className="ff-semi current-color pb-0 font_14 col-6">
             <time> {props.dateOpeningDate} </time>
          </p>
          
        </div>
        <div className="row p-1">
          <p className="col-6">
            Closing date 
          </p>
          <p className="ff-semi current-color pb-0 font_14 col-6">
             <time> {props.dateClosingDate} </time>
          </p>
        </div>
      </div>
      <div className="cont-bg p-2 container border-10">
        <div className="row p-1">
          <div className="col-4">
            <div className="font_12">Type</div>
            <div className="ff-semi current-color pb-0 font_14">
              {props.detailType}
            </div>
          </div>
          <div className="col-4">
            <div className="font_12">Bedrooms</div>
            <div className="ff-semi current-color pb-0 font_14">
              {props.detailBedrooms}
            </div>
          </div>
          <div className="col-4">
            <div className="font_12">Bedspaces</div>
            <div className="ff-semi current-color pb-0 font_14">
              {props.detailBedspaces}
            </div>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-4">
            <div className="font_12">Floor level</div>
            <div className="ff-semi current-color pb-0 font_14">
              {props.deatilFloorLvl}
            </div>
          </div>
          <div className="col-4">
            <div className="font_12">Build type</div>
            <div className="ff-semi current-color pb-0 font_14">
              {props.detailBuildType}
            </div>
          </div>
          <div className="col-4">
            <div className="font_12">Accessiblity Category</div>
            <div className="ff-semi current-color pb-0 font_14">
              {props.detailAccessiblityCategory}
            </div>
          </div>
        </div>
        {/* Age restrictions below  */}
        <div className="row p-1">
          <div className="col-4">
            <div className="font_12">Age restrictions</div>
            <div className="ff-semi current-color pb-0 font_14">
              {props.detailAgeRestriciton === "N"
                ? "No"
                : props.detailAgeRestriciton === "Y"
                ? "Yes"
                : props.detailAgeRestriciton}
            </div>
          </div>
          <div className="col-4">
            <div className="font_12">Minimum age </div>
            <div className="ff-semi current-color pb-0 font_14">
              {props.detailMinAge===""?"-":props.detailMinAge}
            </div>
          </div>
          <div className="col-4">
            <div className="font_12">Maximum age</div>
            <div className="ff-semi current-color pb-0 font_14">
            {props.detailMaxAge===""?"-":props.detailMaxAge}
            </div>
          </div>
        </div>
      </div>

      {props.notes != "" ? (
        <div className="bg-transparent shadow-none border-light border-10 mb-3 p-15 text-box my-3">
          <p className="ff-reg font_14 m-0">
            <span dangerouslySetInnerHTML={createMarkup()} />
            <a
              href="javascript:void(0);"
              className="font_14 ff-semi current-color text-decoration-none read-more read_all white-bg"
            >
              <small className="font_14 ff-reg text-color">...</small>Read more
            </a>
          </p>
        </div>
      ) : (
        <></>
      )}

      <div className="p-2 container">
        <div className="row p-1">
          <div className="col-12">
            <h4 className="ff-semi pb-0 font_14">Facilities</h4>
          </div>
          <div className="col-6">
            <div className="font_12">Parking</div>
            <div className="ff-semi pb-0 font_14">
              {props.facParking === "N"
                ? "No"
                : props.facParking === "Y"
                ? "Yes"
                : props.facParking}
            </div>
          </div>
          <div className="col-6">
            <div className="font_12">Adapted</div>
            <div className="ff-semi pb-0 font_14">
              {props.facAdapted === "N"
                ? "No"
                : props.facAdapted === "Y"
                ? "Yes"
                : props.facAdapted}
            </div>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-6">
            <div className="font_12">Energy efficiency</div>
            <div className="ff-semi pb-0 font_14">
              {props.facEnergyEfficency === "N"
                ? "No"
                : props.facEnergyEfficency === "Y"
                ? "Yes"
                : props.facEnergyEfficency}
            </div>
          </div>
          <div className="col-6">
            <div className="font_12">Pets allowed</div>
            <div className="ff-semi pb-0 font_14">
              {props.facPetsAllowed === "N"
                ? "No"
                : props.facPetsAllowed === "Y"
                ? "Yes"
                : props.facPetsAllowed}
            </div>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-6">
            <div className="font_12">Lift</div>
            <div className="ff-semi pb-0 font_14">
              {props.facLift === "N"
                ? "No"
                : props.facLift === "Y"
                ? "Yes"
                : props.facLift}
            </div>
          </div>
          <div className="col-6">
            <div className="font_12">Heating type</div>
            <div className="ff-semi pb-0 font_14">
              {props.facCentralHeating === "N"
                ? "No"
                : props.facCentralHeating === "Y"
                ? "Yes"
                : props.facCentralHeating}
            </div>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-6">
            <div className="font_12">Double glazed</div>
            <div className="ff-semi pb-0 font_14">
              {props.facDoubleGazed === "N"
                ? "No"
                : props.facDoubleGazed === "Y"
                ? "Yes"
                : props.facDoubleGazed}
            </div>
          </div>
          <div className="col-6">
            <div className="font_12">Garden</div>
            <div className="ff-semi pb-0 font_14">
              {props.facGarden === "N"
                ? "No"
                : props.facGarden === "Y"
                ? "Yes"
                : props.facGarden}
            </div>
          </div>
        </div>
        <div className="row p-1">
          <div className="col-6">
            <div className="font_12">Sheltered</div>
            <div className="ff-semi pb-0 font_14">
              {props.facSheltered === "N"
                ? "No"
                : props.facSheltered === "Y"
                ? "Yes"
                : props.facSheltered}
            </div>
          </div>
        </div>
      </div>

      
        <div className="cont-bg p-2 container border-10">
          <div className="row p-1">
            <div className="col-6">
              <h3 className="ff-semi font_14 border-b-1 pb-2 mt-1">
                Rent details
              </h3>
             
            </div>
            {props.partnerId != 1034 &&(<div className="col-6">

              <h3 className="ff-semi font_14 border-b-1 pb-2 mt-1 float-end colorBlue" onClick={()=>{rentDetails.moreRentDetails ? setOpenModal(true) :  swal({
              text: "More rent details are not available",
            });}}>
                More details
              </h3>
              
             
            </div>)
           } 
            <div className="w-100 border-t-1">

            </div>

           
          </div>
          <div className="row p-1">
            <div className="col-12">
              <div className="row p-1">
                <div className="col-6">
                  <p className="font_14 ff_reg">Service charge</p>
                </div>
                <div className="col-6">
                  <p className="ff-reg pb-0 font_14 float-end">
                  £ {props.rentServiceCharge}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row p-1">
                <div className="col-6">
                  <p className="font_14 ff_reg">Rent frequency</p>
                </div>
                <div className="col-6">
                  <p className="ff-reg pb-0 font_14 float-end">
                  {props.rentRentFreq}
                  </p>
                </div>
              </div>
            </div>
           
            
            <div className="col-12">
              <div className="w-100 border-t-1">
                <div className="row p-1">
                  <div className="col-6">
                    <p
                      className="font_16 ff_semi current-color"
                      style={{
                        color: "#000",
                        fontWeight: "600",
                        fontSize: "inherit",
                      }}
                    >
                      Total amount
                    </p>
                  </div>
                  <div className="col-6">
                    <p
                      className="font_16 ff_semi current-color float-end"
                      style={{
                        color: "#000",
                        fontWeight: "600",
                        fontSize: "inherit",
                      }}
                    >
                      £ {props.rentAmount}
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        { 
          openModal && <MoreRentDetails openModal={openModal} setOpenModal={setOpenModal}/>

        }
    </div>
  );
};
