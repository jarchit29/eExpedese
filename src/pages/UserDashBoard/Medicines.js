import React from 'react'
import { Header } from '../../components/Miscellaneous/Header'
import { useHistory } from "react-router";
import SubHeading from '../../components/Miscellaneous/SubHeading';
import SecondMedOpinion from '../../components/CardLayouts/SecondMedOpinion';
import Seperator from '../../components/Miscellaneous/Seperator';
import ButtonBlock from '../../components/Buttons/ButtonBlock';
import { BottomNavBar } from '../Home Page/BottomNavBar';
import { IonCard, IonCardContent } from '@ionic/react';
import FormComponent from '../../components/Miscellaneous/FormComponent';
import { useState } from 'react';
import UploadFrom from '../../components/Modals/UploadFrom';
import Layout from '../../components/Miscellaneous/Layout';

const Medicines = (props) => {

  // Hardcoded jsons
  const editabledata = [

    { label: "Medicine Name ", value: "Dolo", type: "text" },
    { label: "Type  ", value: "Tablets", type: "text" },
    { label: "Quantitiy ", value: 1, type: "variable" },

  ]

  let history = useHistory();
  let content = "Upload a Prescription and Tell Us what you Need. We do the Rest.!"

  // Manage use states

  const [totalCards, setTotalCards] = useState([])


  // Define on CLicks
  let onPresicriptionOrder = () => {

    history.push('./UploadPrescription')

  }

  let handleDelete = () => {

  }

  return (
    <ion-content>

      <div>
        <Header HeaderTitle="Medicines" backArrow={true} onBackArrow={() => { history.goBack() }} />
        <Layout>
          <div>
            <SubHeading label="Order Medicine" />
            <SecondMedOpinion buttonLabel="ORDER NOW" content={content} heading="Upload Prescription" color="black" onUploadPrescription={onPresicriptionOrder} />
            <Seperator label="OR" />

            <div>

              {totalCards.map((item, index) => {
                return (
                  <ion-chip color='secondary'>
                    <ion-label>To be done</ion-label>
                    <ion-icon name="close" color='danger' onClick={handleDelete()}></ion-icon>
                  </ion-chip>
                )
              })}

              <IonCard>



                <IonCardContent>
                  {editabledata.map((item) => {
                    return (
                      <FormComponent data={item} />
                    )

                  })}
                </IonCardContent>

              </IonCard>

              <p className='text-danger text-center mt-2' onClick={() => { setTotalCards([...totalCards, {}]) }}>
                + Add More
              </p>

            </div>

            <div className='text-center stickToBottom '>
              <ButtonBlock label="ORDER" onButtonClick={() => { console.log("Task pending") }} />
            </div>
          </div>
        </Layout>
      </div>
    </ion-content>
  )
}

export default Medicines