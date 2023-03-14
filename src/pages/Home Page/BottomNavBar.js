// Import Images 
import imgHome from "../../Style/Images/icon-1.png";
import imgHomeClicked from "../../Style/Images/icon-1clk.png";


export const BottomNavBar = (props) => {

  // This is hardcoded json for rendring bottom nav items
  const bottomNavItems = [
    { label: "Home", icon: imgHome  ,activeIcon:imgHomeClicked},
    { label: "Health Calender", icon: imgHome ,activeIcon:imgHomeClicked },
    { label: "My Leave", icon: imgHome  ,activeIcon:imgHomeClicked},
    { label: "Notification", icon: imgHome ,activeIcon:imgHomeClicked },
    { label: "More", icon: imgHome  ,activeIcon:imgHomeClicked},
  ];

  return (
    <div>
      <div className="bg-white position-fixed bottom-0 w-100 shadow com-height pt-2 d-flex justify-content-around">

        {bottomNavItems.map((item) => {
          return (
            <>
              <span
                className="px-2 text-center "
                onClick={() => {
                  props.setPage(item.label);
                  localStorage.setItem("Page", item.label);
                }}
              >
                {props.page === item.label ? (
                  <>
                   <img src={item.activeIcon} alt={`${item.label} , tab active`} />
                  <p className="font_12 my-2 text-danger opacity-1">
                    {item.label}
                  </p>
                  </>
                ) : (
                  <>
                   <img src={item.icon} alt={`${item.label} , tab disabled`} />
                  <p className="font_12 my-2 opacity-1 gray">{item.label}</p>
                  </>
                )}
              </span>
            </>
          );

        })}
      </div>
    </div>
  );
};
