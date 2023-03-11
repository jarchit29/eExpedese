import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState ,useEffect} from 'react'
import { Redirect, useHistory } from "react-router";
import { Link } from 'react-router-dom';


const Login = () => {

    // Use Navigate 

    let navigate = useHistory();

    

    const [formInput, setFormInput] = useState({
        userName:"",
        password:"",
    })

    
    useEffect(() => {
      
        console.log(formInput);

    }, [formInput])


    let handleClick = () => {

        //  navigate.push("/login");
        console.log("Router ka link ", Link);

    }

    let handleChange = (e:any)=>{

        e.preventDefault();
        setFormInput({ ...formInput, [e.target.name]: e.target.value });
    }

    


    return (

        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login Page </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>

                <IonCard >
                    <IonCardHeader>
                        <IonCardTitle>Welcome ! enter you details below </IonCardTitle>
                        <IonCardSubtitle>Every entered detail is secured </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <form>
                            <IonItem>
                                <IonLabel position='floating'>
                                    User Name
                                </IonLabel>
                                <IonInput type='text' name='userName' value={formInput.userName} required onIonChange={handleChange} >

                                </IonInput>
                            </IonItem>
                            <IonItem>
                                <IonLabel position='floating' >
                                    Password
                                </IonLabel>
                                <IonInput type='password' name='password' value={formInput.password} required  onIonChange={handleChange}>

                                </IonInput>
                            </IonItem>
                            <IonItem type="submit" >
                                {
                                    (formInput.userName && formInput.password) ? <IonButton disabled={false} fill="outline" size='default' onClick={handleClick} routerLink="/DashBoard" routerDirection='forward'>
                                        Login
                                    </IonButton> : <IonButton disabled={true} fill="outline" size='default' onClick={handleClick} routerLink="/DashBoard" routerDirection='forward'>
                                        Login
                                    </IonButton>

                                }
                            </IonItem>

                        </form>
                    </IonCardContent>

                </IonCard>

            </IonContent>
        </IonPage>
    )
}

export default Login