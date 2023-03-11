import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import Menu from '../components/Menu'
import SideNavMenu from '../components/SideNavMenu'
import Page from './Page'

const DashBoard = () => {
    return (

        <IonPage>
            <SideNavMenu/>

            <div className='ion-page' id='main-content'>


                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>
                            User Dash board
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent className='ion-padding'>
                    Tab the button for making menu functioning
                </IonContent>

            </div>

        </IonPage>
    )
}

export default DashBoard