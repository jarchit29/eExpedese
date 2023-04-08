import { IonBackdrop, IonCard, IonCardContent } from '@ionic/react'
import React from 'react'

const UploadFrom = (props) => {
    return (
        <div className='backdropBox'>

         
           <div id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            
                <div class="modal-dialog " role="document" >
                    <div class="modal-content">

                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">UPLOAD PRESCRIPTION</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>{props.setOpenModal(false)}}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        
                        <div class="modal-body">
                            <div class="flex-container">
                             <IonCard>
                                <IonCardContent onClick={props.onCamClick}>
                                  
                                    Camera
                                </IonCardContent>
                             </IonCard>
                             <IonCard className='lastItem' >
                                <IonCardContent >
                                    Gallery
                                </IonCardContent>
                             </IonCard>
                            </div>
                            <IonCard>
                                <IonCardContent>
                                    My Prescription
                                </IonCardContent>
                             </IonCard>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadFrom