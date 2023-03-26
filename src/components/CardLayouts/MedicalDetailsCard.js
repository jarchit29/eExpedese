import { IonCard, IonCardContent } from '@ionic/react'
import React from 'react'

const MedicalDetailsCard = (props) => {
    return (

        <IonCard>
            <IonCardContent>
                <div className='flexNoMarginiContainer'>

                    <div>
                        <span className='text-primary'>
                            {props.data.Value}
                        </span>
                        <span>
                            {props.data.Unit}
                        </span>
                    </div>
                    <div className='mx-2'>
                        {/* {props.data.icon} */}
                        <img src={props.data.icon}/>
                    </div>

                </div>
                <div className='flexNoMarginiContainer'>

                    <div>
                        <p className='text-primary'>
                            {props.data.Attribute}
                        </p>
                        <p>
                            {props.data.Date}
                        </p>
                    </div>
 

                </div>
            </IonCardContent>
        </IonCard>


    )
}

export default MedicalDetailsCard