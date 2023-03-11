import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const SideNavMenu = () => {
    return (

        <IonMenu contentId='main-content'>
            <IonToolbar>
                <IonButtons slot='start'>
                    <IonMenuButton></IonMenuButton>
                </IonButtons>
                <IonTitle>
                    Hi Menu
                </IonTitle>
            </IonToolbar>
            <IonContent>
                Hi menu under content
            </IonContent>
        </IonMenu>
    )
}

export default SideNavMenu