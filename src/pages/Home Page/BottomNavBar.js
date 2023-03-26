// Import Images 
import imgHome from "../../Style/Images/icon-1clk.png";
import imgHomeClicked from "../../Style/Images/HomeClicked.svg";

import imgCalender from "../../Style/Images/calendar.svg";
import imgCalenderClicked from "../../Style/Images/calendar.svg";

import imgLeaves from "../../Style/Images/leave.svg"
import imgLeavesClicked from "../../Style/Images/leave.svg"

import imgNotifications from "../../Style/Images/Notification.svg"
import imgNotificationsClicked from "../../Style/Images/Notification.svg"

import imgMenu from "../../Style/Images/menu.svg"
import imgMenuClicked from "../../Style/Images/menu.svg"



export const BottomNavBar = (props) => {

  // This is hardcoded json for rendring bottom nav items
  const bottomNavItems = [
    { label: "Home", icon: imgHome  ,activeIcon:imgHomeClicked},
    { label: "Health Calender", icon: imgCalender ,activeIcon:imgCalenderClicked },
    { label: "My Leave", icon: imgLeaves  ,activeIcon:imgLeavesClicked},
    { label: "Notification", icon: imgNotifications ,activeIcon:imgNotificationsClicked },
    { label: "More", icon: imgMenu  ,activeIcon:imgMenuClicked},
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
