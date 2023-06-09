import { IonCard, IonCardContent, IonCardHeader } from '@ionic/react'
import React from 'react'

const SecondMedOpinion = (props) => {
    
    return (
        <div>
            <IonCard className='mt-4'>
                {props.heading ? (<IonCardHeader>
                    <p style={{color:`${props.color}`}}>{props.heading} </p>
                </IonCardHeader>) : <></>}
                
                <IonCardContent>    
                <div className='flexNoMarginiContainer justify-content-around mt-2'>
                    <div>
                        <h5 style={{ color: "#161531" }}>{props.content}</h5>
                    </div>
                    <div>
                        <button className='buttonBg btn-lg' onClick={props.onUploadPrescription}>
                            {props.buttonLabel}
                        </button>
                    </div>

                </div>
                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default SecondMedOpinion