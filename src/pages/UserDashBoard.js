import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonHeader,
  IonTitle,
} from "@ionic/react";
import React from "react";

// Components imports

import HealthUtilCards from "../components/HealthUtilCards";

// Images
import imgHomeClicked from "../Style/Images/user.png";

const UserDashBoard = () => {

  const userCardsData = [
    { title: "Medicines", img: imgHomeClicked ,routeTo:"/Medicines"},
    { title: "Lab Tests", img: imgHomeClicked,routeTo:"/LabTests"},
    { title: "Doctor Consults", img: imgHomeClicked, routeTo:"/DoctorConsults"},
    { title: "Pill Reminder", img: imgHomeClicked ,routeTo:"/PillReminder" },
    { title: "Heatlh Records", img: imgHomeClicked ,routeTo:"/HealthRecords"},
    { title: "Chronic Disease", img: imgHomeClicked ,routeTo:"/ChronicDisease"},
  ];

  return (
    <>
      <HealthUtilCards data={userCardsData}/>
    </>
  );
};

export default UserDashBoard;
