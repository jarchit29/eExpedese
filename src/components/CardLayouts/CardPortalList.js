//Imports from Images
import imgLambeth from "../../Style/Images/lambeth.png";
export const CardPortalList = (props) => {
  const partnerName = props.partnerName.replaceAll("_", " ");
  const altName = `logo of ${partnerName}`;
  return (
    <>    
          <div className="body" data-testid="cardPortal">
            {/* Below is the design of the card with props  */}
            <div
              aria-label="Card"
              className="container "
              onClick={props.cardClick}
            >
              <div className="row px-4 px-md-0 pb-3">
                <div className="col-12 border bdr-rad mb-3 box-bg d-flex align-items-center">
                  <img
                    className=""
                    style={{ maxHeight: "90%" }}
                    src={props.partnerImage}
                    alt={altName}
                  />
                  <span
                    className="
              ff-semi text-color"
                    style={{ maxWidth: "15em", marginLeft: "16px" }}
                  >
                    {/* {props.partnerName} */}
                    {partnerName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        
    </>
  );
};
