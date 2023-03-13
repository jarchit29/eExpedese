//Imports from Images
import imgHamMenu from "../../Style/Images/menu.png";

export const HamBurgerIcon = (props) => {
  
  return (
    <>
      {/* This div is for ham icon  */}
      <div>
        <button
          className="btn float-start ps-4 ps-md-0"
          
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          role="button"
          >
            <a data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
          <img
            src={imgHamMenu}
            className="invt pb-1"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
            alt=''
            />
            </a>
          <span className="ps-3 ff-semi font_20 text-white">{props.title}</span>
        </button>
         
      </div>
   


    
    </>
  );
};
