import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react'
import React from 'react'

const Segment = (props) => {
    return (
        <div>
            <IonSegment value={props.segment}>

                {
                    props.data.map((item) => {
                        return (

                            <IonSegmentButton value={item.label} onClick={()=>{props.setSegment(item.label)}}>
                                <IonLabel>{item.label}</IonLabel>
                            </IonSegmentButton>
                        )
                    })
                }


            </IonSegment>

        </div>
    )
}

export default Segment