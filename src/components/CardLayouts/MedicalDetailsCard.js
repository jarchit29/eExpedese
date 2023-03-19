import { IonCard, IonCardContent } from '@ionic/react'
import React from 'react'

const MedicalDetailsCard = () => {
    return (

        <IonCard>
            <IonCardContent>
                <div className='flexNoMarginiContainer'>

                    <div>
                        <span className='text-primary'>
                            66
                        </span>
                        <span>
                            Kg
                        </span>
                    </div>
                    <div className='mx-4'>
                        Icon
                    </div>

                </div>
                <div className='flexNoMarginiContainer'>

                    <div>
                        <p className='text-primary'>
                            Weight
                        </p>
                        <p>
                            10/03/2023
                        </p>
                    </div>
 

                </div>
            </IonCardContent>
        </IonCard>


    )
}

export default MedicalDetailsCard