import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Miscellaneous/Header'
import { useHistory } from 'react-router'
import Layout from '../../components/Miscellaneous/Layout';
import { IonCard, IonCardContent, IonCardTitle, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import { chevronDownCircle, chevronForwardCircle, chevronUpCircle, colorPalette, document, globe, addOutline } from 'ionicons/icons';
import Segment from '../../components/Miscellaneous/Segment';

// Import images
import labssSvg from "../../Style/Images/labs.svg"
import CardLabTests from '../../components/CardLayouts/CardLabTests';


const LabTests = () => {

  // hardcoded data for journeys

  const segmentData = [{ label: "Pending" }, { label: "Completed" }]
  const pendingdata = [{ icon: labssSvg, heading: "Diabetes Screesning", subHeading: "Related to Pancreas", downloadLink: "Contains 2 Test", calenderDate: "16", calenderMonth: "April", time: "10:00 Am" }, { icon: labssSvg, heading: "Diabetes Screesning", subHeading: "Related to Pancreas", downloadLink: "Contains 2 Test", calenderDate: "16", calenderMonth: "April", time: "10:00 Am" }, { icon: labssSvg, heading: "Diabetes Screesning", subHeading: "Related to Pancreas", downloadLink: "Contains 2 Test", calenderDate: "16", calenderMonth: "April", time: "10:00 Am" }, { icon: labssSvg, heading: "Diabetes Screesning", subHeading: "Related to Pancreas", downloadLink: "Contains 2 Test", calenderDate: "16", calenderMonth: "April", time: "10:00 Am" }, { icon: labssSvg, heading: "Diabetes Screesning", subHeading: "Related to Pancreas", downloadLink: "Contains 2 Test", calenderDate: "16", calenderMonth: "April", time: "10:00 Am" }, { icon: labssSvg, heading: "Diabetes Screesning", subHeading: "Related to Pancreas", downloadLink: "Contains 2 Test", calenderDate: "16", calenderMonth: "April", time: "10:00 Am" }]
  const completeData = [{ icon: labssSvg, heading: "Diabetes Screesning", subHeading: "Related to Pancreas", downloadLink: "Download report", calenderDate: "16", calenderMonth: "April", time: "10:00 Am" }]

  // Logic to choose segments

  const [segmentt, setSegment] = useState("Pending")

  let data;

  segmentt == "Pending" ? data = [...pendingdata] : data = [...completeData];


  let history = useHistory();

  return (
    <ion-content>

      <div>
        <Header HeaderTitle="Lab Tests" backArrow={true} onBackArrow={() => { history.goBack() }} />

        <Layout>


          <div>
            <Segment data={segmentData} setSegment={setSegment} segment={segmentt} />
          </div>

          <div className='mt-4'>

            <CardLabTests data={data} label={segmentt == "Pending" ? `My Lab Appointments` : `My Lab Tests`} />

          </div>

          <IonFab slot="fixed" vertical="bottom" horizontal="end">
            <IonFabButton onClick={() => { history.push('/AddATest') }}>
              <IonIcon icon={addOutline} ></IonIcon>
            </IonFabButton>
          </IonFab>

        </Layout>

      </div>

    </ion-content>
  )
}

export default LabTests