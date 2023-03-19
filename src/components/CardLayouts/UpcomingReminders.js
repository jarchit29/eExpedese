import { IonCard, IonCardContent } from '@ionic/react'
import React from 'react'

const UpcomingReminders = (props) => {

    return (
        <div>

            <div className="mt-4 mx-3" style={{ color: "gray" }}>
                Upcoming reminders
            </div>
            <IonCard>
                <IonCardContent>

                    {
                        props.data.map((item) => {


                            return (
                                <IonCard>
                                    <IonCardContent>
                                        <div className='flex-container'>
                                            <div>
                                                <div>
                                                    {item.date}
                                                </div>
                                                <div>
                                                    {item.month}
                                                </div>
                                            </div>
                                            <div className='lineSeperator'>

                                            </div>

                                            <div>

                                                <div>
                                                    <span>
                                                        Medicine :
                                                    </span>
                                                    <span style={{ color: "green" }}>
                                                        {item.Medicine}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>
                                                        Diagnostic :
                                                    </span>
                                                    <span style={{ color: "red" }}>
                                                        {item.Diagnostic}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span>
                                                        Medicine :
                                                    </span>
                                                    <span style={{ color: "blue" }}>
                                                        {item.DocAppointment}
                                                    </span>
                                                </div>
                                                <div>

                                                </div>
                                            </div>
                                        </div>

                                    </IonCardContent>
                                </IonCard>
                            )



                        })
                    }

                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default UpcomingReminders