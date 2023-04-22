import React from 'react'
import { IonCard, IonCardContent, IonSearchbar } from '@ionic/react'
import { useHistory } from 'react-router'

const DoctorInfo = (props) => {

    let history = useHistory();

    return (
        <div>
            <IonCard onClick={props.onCardClick}>
                <IonCardContent>
                    <div className='flexNoMarginiContainer '>

                        <div className='addRed'>
                            <img src={props.item.icon} />
                        </div>

                        <div className='mx-3'>

                            <p className='text-danger' style={{ fontWeight: 'bold', 'textTransform': 'uppercase' }}>
                                {props.item.filed}
                            </p>
                            <p className='textBlack'>
                                {props.item.name}
                            </p>

                            <p className='textFade'>
                                {props.item.expierence}
                            </p>

                            <p className='textBlack'>
                                {props.item.ratings}
                            </p>

                        </div>

                    </div>
                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default DoctorInfo