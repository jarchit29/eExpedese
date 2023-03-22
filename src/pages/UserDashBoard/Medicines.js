import React from 'react'
import { Header } from '../../components/Miscellaneous/Header'
import { useHistory } from "react-router";
import SubHeading from '../../components/Miscellaneous/SubHeading';
import SecondMedOpinion from '../../components/CardLayouts/SecondMedOpinion';
import Seperator from '../../components/Miscellaneous/Seperator';
import ButtonBlock from '../../components/Buttons/ButtonBlock';
import { BottomNavBar } from '../Home Page/BottomNavBar';

const Medicines = () => {
  let history = useHistory();
  let content = "Upload a Prescription and Tell Us what you Need. We do the Rest.!"
  return (
    <div>
      <Header HeaderTitle="Medicines" backArrow={true} onBackArrow={() => { history.goBack() }} />
      <div className='mt-185'>
        <SubHeading label="Order Medicine" />
        <SecondMedOpinion buttonLabel="ORDER NOW" content={content} heading="Upload Prescription" color="black" />
        <Seperator label="OR" />

        <div className='text-center stickToBottom '>
          <ButtonBlock label="ORDER" />
        </div>
      </div>
    </div>
  )
}

export default Medicines