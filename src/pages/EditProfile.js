import React from 'react'
import { Header } from '../components/Miscellaneous/Header'
import { useHistory } from "react-router-dom";

// Components import 
import ButtonBlock from '../components/Buttons/ButtonBlock';

// Import from images 
import userIcon from '../Style/Images/user.png'
import FormComponent from '../components/Miscellaneous/FormComponent';
import Layout from '../components/Miscellaneous/Layout';


const EditProfile = (props) => {


  let history = useHistory();


  return (
    <>
      <ion-content>

        <Header backArrow={true} HeaderTitle="Edit Profile" onBackArrow={() => { history.goBack() }} />

        <Layout>


          <div className='text-center'>
            <img src={userIcon} />
          </div>


          {props.location.state.map((item) => {
            return (
              <div>
                <FormComponent data={item} />
              </div>
            )

          })}


          <div className='text-center stickToBottom '>
            <ButtonBlock label="SAVE" onButtonClick={() => { console.log("Task pending") }} />
          </div>

        </Layout>

      </ion-content>
    </>
  )
}

export default EditProfile