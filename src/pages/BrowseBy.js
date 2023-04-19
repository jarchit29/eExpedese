import React from 'react'
import { useLocation, useHistory } from 'react-router'
import Layout from '../components/Miscellaneous/Layout';
import { Header } from '../components/Miscellaneous/Header';
import { IonCardContent, IonCard, IonText } from '@ionic/react';
import nextA from '../Style/Images/my-bid-icon-1.png'
import icon from '../Style/Images/docConsults.svg'
import icon2 from '../Style/Images/chronic.svg'
import { help } from 'ionicons/icons';

const BrowseBy = (props) => {

    let location = useLocation();
    let history = useHistory();

    const healthDat = [{ icon: icon, label: "Women Health" }, { icon: icon, label: "Diabetes" }, { icon: icon, label: "Senior Citizen" }, { icon: icon, label: "Preganancy" }, { icon: icon, label: "Fever" }, { icon: icon, label: "Full body check up" },]
    
    const organData = [{icon:icon2 , label:"Thyroid & Parathyroid Gland"},{icon:icon2 , label:"Heart "},{icon:icon2 , label:"Lungs "},{icon:icon2 , label:"Liver and Gall Bladder"},{icon:icon2 , label:"Kidney and Urinary tract "},{icon:icon2 , label:"Pancreas"},]


    let data;

    // console.log(typeof(location.state))
 
     location?.state?.includes('health') ? data = healthDat : data=organData;

    return (
        <ion-content>


            <div>
                <Header HeaderTitle={location.state} backArrow={true} onBackArrow={() => { history.goBack() }} />
                <Layout>
                    {data.map((item) => {
                        return (
                            <IonCard className ='mx-3 my-2'>
                                <IonCardContent className='my-3'>
                                    <div className='flexNoMarginiContainer'>

                                        <div>
                                            <img src={item.icon} />
                                        </div>
                                        <div className='mx-3 my-1'>
                                            <IonText style={{ fontWeight: 'bolder' }}>{item.label}</IonText>
                                        </div>
                                        <div className='lastItem'>
                                            <img src={nextA} />
                                        </div>

                                    </div>
                                </IonCardContent>
                            </IonCard>
                        )
                    })}
                </Layout>

            </div>

        </ion-content>
    )
}

export default BrowseBy