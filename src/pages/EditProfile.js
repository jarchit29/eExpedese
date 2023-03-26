import React from 'react'
import { Header } from '../components/Miscellaneous/Header'
import { useHistory } from "react-router-dom";

// Components import 
import ButtonBlock from '../components/Buttons/ButtonBlock';

// Import from images 
import userIcon from '../Style/Images/user.png'


const EditProfile = (props) => {


  let history = useHistory();


  return (
    <>
      <ion-content>

        <Header backArrow={true} HeaderTitle="Edit Profile" onBackArrow={() => { history.goBack() }} />

        <div className='mt-185 text-center'>
          <img src={userIcon} />
        </div>

       
       {props.location.state.map((item) => {
          return (
            <div>
              <div className='flex-container'>

                <div>
                  <p>
                    {item.label}
                  </p>
                </div>
                <div className='lastItem'>
                  <p contentEditable='true'>
                    {item.value}
                  </p>
                </div>

              </div>
              <hr className='solid' />
            </div>
          )

        })}


        <div className='text-center stickToBottom '>
          <ButtonBlock label="SAVE" onButtonClick={() => { console.log("Task pending") }} />
        </div>

      </ion-content>
    </>
  )
}

export default EditProfile