import React from 'react'
import { Header } from '../../components/Miscellaneous/Header'
import Layout from '../../components/Miscellaneous/Layout'
import { useHistory } from 'react-router'
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText } from '@ionic/react'
import CardLabTests from '../../components/CardLayouts/CardLabTests'
import { addOutline } from 'ionicons/icons'

// Images
import labssSvg from "../../Style/Images/labs.svg"

const AddALabTest = (props) => {

    // Harcoded journey traverse jsons

    const category = [{ label: "Browse by health category ", routeTo: "/BrowseBy" }, { label: "Browse by organs", routeTo: "/BrowseBy" }]
    const addLabTest = [{ icon: labssSvg, heading: "Diabetes Screesning", subHeading: "Related to Pancreas", downloadLink: "Contains 2 Tests ", secondIcon: labssSvg }, { icon: labssSvg, heading: "Diabetes Screesning", subHeading: "Related to Pancreas", downloadLink: "Contains 2 Tests ", secondIcon: labssSvg }, { icon: labssSvg, heading: "Diabetes Screesning", subHeading: "Related to Pancreas", downloadLink: "Contains 2 Tests ", secondIcon: labssSvg }, { icon: labssSvg, heading: "Diabetes Screesning", subHeading: "Related to Pancreas", downloadLink: "Contains 2 Tests ", secondIcon: labssSvg }]


    let history = useHistory();


    return (
        <ion-content>


            <div>
                <Header HeaderTitle="Add a lab test " backArrow={true} onBackArrow={() => { history.goBack() }} />

                <Layout>



                    <div className='flexNoMarginiContainer justify-content-around'>
                        {
                            category.map((item) => {

                                return (
                                    <IonCard onClick={() => { history.push({ pathname: item.routeTo, state: item.label }) }}>
                                        <div className='p-2'>
                                            <IonCardContent>
                                                {item.label}
                                            </IonCardContent>
                                        </div>
                                    </IonCard>
                                )


                            })
                        }
                    </div>
                    <div className='mt-4'>

                        <CardLabTests data={addLabTest} label="Popular Tests" />

                    </div>

                    <div className='mt-4'>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>
                                    Not Sure Which test to choose ?
                                </IonCardTitle>

                            </IonCardHeader>
                            <IonCardContent>

                                <div className='flexNoMarginiContainer justify-content-around'>

                                    <div>
                                        <div>
                                            <IonText style={{ color: "#617C9D" }}>
                                                Talk to qualified doctor to know the right test for your condition
                                            </IonText>
                                        </div>
                                        <button className='buttonBg btn-lg mt-2' style={{ fontSize: "20px" }}>
                                            Consult Now
                                        </button>

                                    </div>

                                    <img src={labssSvg} />
                                </div>
                                <div>

                                </div>
                            </IonCardContent>
                        </IonCard>

                    </div>
                </Layout>

            </div>
        </ion-content>
    )
}

export default AddALabTest