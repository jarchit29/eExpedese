import React from 'react'
import { IonCard, IonCardContent, IonCardTitle, IonFab, IonFabButton, IonIcon } from '@ionic/react';

const CardLabTests = (props) => {
    return (
        
        <>

                <IonCard>
                    <IonCardTitle className='mx-2 my-2'>
                       {props.label}
                    </IonCardTitle>

                    {
                        props.data.map((item) => {

                            return (
                                <IonCard className="mt-3 mb-3">
                                    <IonCardContent>
                                        <div className='flexNoMarginiContainer justify-content-around'>


                                            <div>
                                                <img src={item.icon} />
                                            </div>

                                            <div>
                                                <p>
                                                    {item.heading}
                                                </p>
                                                <p>
                                                    {item.subHeading}
                                                </p>
                                                <p className='text-danger'>
                                                    {item.downloadLink}
                                                </p>
                                            </div>

                                          {item.calenderDate?(
                                              <div>
                                              <div className='claenderContDate'>
                                                  <p>
                                                      {item.calenderDate}
                                                  </p>
                                                  <p>
                                                      {item.calenderMonth}
                                                  </p>

                                              </div>

                                              <div className='claenderContTime'>
                                                  <p>
                                                      {item.time}
                                                  </p>
                                              </div>
                                          </div>
                                          ):(<>
                                          <img src={item.secondIcon}/>
                                          </>)}

                                        </div>
                                    </IonCardContent>
                                </IonCard>
                            )

                        })
                    }

                </IonCard>

            </>

        
    )
}

export default CardLabTests