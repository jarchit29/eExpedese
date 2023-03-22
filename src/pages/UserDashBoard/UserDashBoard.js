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

import HealthUtilCards from "../../components/CardLayouts/HealthUtilCards";
import SecondMedOpinion from "../../components/CardLayouts/SecondMedOpinion";
import UpcomingReminders from "../../components/CardLayouts/UpcomingReminders";

// Images
import imgHomeClicked from "../../Style/Images/user.png";

const UserDashBoard = () => {

  const userCardsData = [
    { title: "Medicines", img: imgHomeClicked, routeTo: "/Medicines" },
    { title: "Lab Tests", img: imgHomeClicked, routeTo: "/LabTests" },
    { title: "Doctor Consults", img: imgHomeClicked, routeTo: "/DoctorConsults" },
    { title: "Pill Reminder", img: imgHomeClicked, routeTo: "/PillReminder" },
    { title: "Heatlh Records", img: imgHomeClicked, routeTo: "/HealthRecords" },
    { title: "Chronic Disease", img: imgHomeClicked, routeTo: "/ChronicDisease" },
  ];

  const upcomingRemindersdata = [

    { Diagnostic: "Sugar test 9:00 AM", Medicine: "8:00 Am - 12:00 pm - 4:00pm - 8:00 pm", date: "15", month: "March", DocAppointment: "Dr.Raman" },
    { Diagnostic: "CBC-Test 10:00 Am", Medicine: "8:00 Am - 12:00 pm - 4:00pm - 8:00 pm", date: "25", month: "March", DocAppointment: "Dr.Abdul Rehman" },
    { Diagnostic: "medicine", Medicine: "8:00 Am - 12:00 pm - 4:00pm - 8:00 pm", date: "15", month: "March", DocAppointment: "Dr.Raman" },

  ]





  return (

    
      <>

        <div className="mt-200">
          
          <HealthUtilCards data={userCardsData} />
          <SecondMedOpinion buttonLabel="BOOK NOW" content="Get a Medical Second Opinion" heading="NOT SATISFIED WITH YOUR DOCTOR" color="red" />
          <UpcomingReminders data={upcomingRemindersdata} />

        </div>

      </>

  );
};

export default UserDashBoard;
