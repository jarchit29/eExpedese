import { IonCard, IonCardContent, IonCardHeader } from '@ionic/react'
import React from 'react'

const SecondMedOpinion = () => {
    return (
        <div>
            <IonCard class='mt-4'>
                <IonCardHeader>
                    <p className='text-danger'>NOT SATISFIED WITH YOUR DOCTOR </p>
                </IonCardHeader>
                <div className='flex-container'>
                    <div>
                        <h5 style={{color:"#161531"}}>Get a second medical opinion</h5>
                    </div>
                    <div>
                        <button className='lastItem buttonBg btn-lg'>
                                Book Now 
                        </button>
                    </div>

                </div>
                <IonCardContent>

                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default SecondMedOpinion