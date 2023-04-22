import React from 'react'
import { Header } from '../components/Miscellaneous/Header'
import Layout from '../components/Miscellaneous/Layout'
import { useHistory, useLocation } from 'react-router'
import DoctorInfoCard from '../components/CardLayouts/DoctorInfoCard'
import ButtonBlock from '../components/Buttons/ButtonBlock'
import { IonCard, IonCardContent, IonText, IonTextarea } from '@ionic/react'

const DoctorInfo = (props) => {

    let history = useHistory();
    let location = useLocation();

    return (
        <div>

            <Header HeaderTitle="Know your doctor " backArrow={true} onBackArrow={() => { history.goBack() }} />
            <Layout>



                <div className='mx-2'>
                    <DoctorInfoCard item={location.state} onCardClick={() => { }} />
                    <div className='my-4'> 
                        <IonCard>
                            <IonCardContent>
                                <div>
                                    <IonText className='textBlack'>
                                        Biography :

                                    </IonText>
                                    <p className='my-3'>
                                        Hi there ,  my self doctor {location?.state?.name} with ratings {location?.state?.ratings} working as {location?.state?.filed}
                                    </p>
                                </div>
                                <div>
                                    <IonText className='textBlack'>
                                        Working time :

                                    </IonText>
                                    <p className='my-3'>
                                        Monday 2:00 pm - 3:00Am
                                    </p>
                                </div>
                                <div>
                                    <IonText className='textBlack'>
                                        Location :-

                                    </IonText>
                                    <p className='my-3'>
                                        Max , hospital Rohini delhi - 89
                                    </p>
                                </div>
                            </IonCardContent>
                        </IonCard>
                    </div>

                </div>

                <div className='text-center stickToBottom '>
                    <ButtonBlock label="Book Appointment" onButtonClick={() => { console.log("Task pending") }} />
                </div>

            </Layout>

        </div>
    )
}

export default DoctorInfo