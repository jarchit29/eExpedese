import imgHome from "../../Style/Images/icon-1.png";
import imgHomeClicked from "../../Style/Images/icon-1clk.png";
import imgMessage from "../../Style/Images/icon-3.png";
import imgMessageClicked from "../../Style/Images/icon-3clk.png";
import imgBids from "../../Style/Images/icon-2.png";
import imgBidsClicked from "../../Style/Images/icon-2-clk.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export const BottomNavBar = (props) => {

  const partnerId  = useSelector(state=> state.PartnerId);

  return (
    <div>
      <div className="bg-white position-fixed bottom-0 w-100 shadow com-height pt-2 d-flex justify-content-around">
        <span className="px-4 text-center" onClick = {()=>{props.setPage("Properties") ;localStorage.setItem("Page","Properties");}}>
          {
            (props.page==="Properties" ?
            <img src={imgHomeClicked} alt="Properties tab active" />
            :<img src={imgHome} alt="Properties tab disabled" />
            ) 
          }
        
          {
             (props.page==="Properties" ?
             (<p className="font_12 my-2 text-primary opacity-1">Properties</p>)
             :(<p className="font_12 my-2 opacity-1 gray">Properties</p>)
             )
          }
        </span>

        <span className="px-4 text-center " onClick = {()=>{props.setPage("My bids");localStorage.setItem("Page","My bids"); }}>
          
          {
            (props.page==="My bids" ?
            <img src={imgBidsClicked} alt="Bids tab active" />
            :<img src={imgBids} alt="Bids tab disabled" />
            ) 
          }
          {
             (props.page==="My bids" ?
             (<p className="font_12 my-2 text-primary opacity-1">My bids</p>)
             :(<p className="font_12 my-2 opacity-1 gray">My bids</p>)
             )
          }

        </span>   
       
        {(partnerId.Id==2||partnerId.Id===1011)&&<span className="px-4 text-center " onClick = {()=>{props.setPage("My messages");localStorage.setItem("Page","My messages"); }}>
        {
            (props.page==="My messages" ?
            <img src={imgMessageClicked} alt="Messages tab active" />
            :<img src={imgMessage} alt="Messages tab disabled" />
            ) 
        }
          {
             (props.page==="My messages" ?
             (<p className="font_12 my-2 text-primary opacity-1">My messages</p>)
             :(<p className="font_12 my-2 opacity-1 gray">My messages</p>)
             )
          }
        </span>
        }

      </div>
    </div>
  );
};
