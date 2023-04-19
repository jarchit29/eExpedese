import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Miscellaneous/Header'
import { useHistory } from 'react-router'
import Layout from '../../components/Miscellaneous/Layout';
import ButtonBlock from '../../components/Buttons/ButtonBlock';
import { IonCard, IonCardContent, IonText } from '@ionic/react';

import icon from '../../Style/Images/docConsults.svg'

const DoctorConsults = () => {

  let history = useHistory();

  const list = [{ label: 'Cardiology', icon: icon }, { label: 'Pyscology', icon: icon }, { label: 'Dentist', icon: icon }, { label: 'Lungs', icon: icon }, { label: 'Neurology', icon: icon }, { label: 'Blood test', icon: icon },]

  const [selectedList, setSelectedList] = useState([])
  const [selectedOne, setSelectedOne] = useState(false)

  useEffect(() => {

    console.log(selectedList.length)

    selectedList.length >=1 ? setSelectedOne(true) : setSelectedOne(false)


  }, [selectedList])


  return (
    <div>

      <Header HeaderTitle="Doctor Consult" backArrow={true} onBackArrow={() => { history.goBack() }} />
      <Layout>
        <div >
          <div className='mx-3' >
            <p style={{ fontWeight: 'bolder', fontSize: '15px' }}>
              What do you want to consult for ?
            </p>
            <p style={{ fontSize: '12px' }}>
              You can choose more than one
            </p>

          </div>

          <div>
            <div className="d-flex justify-content-center p-2">
              <div className="row text-center justify-content-around">
                {list.map((element) => {
                  return (
                    <IonCard className="col-3 mt-3 healthUtilCard" style={selectedList.includes(element.label) ? { backgroundColor: 'pink' } : { backgroundColor: 'white' }} onClick={() => {

                      !selectedList.includes(element.label) ? setSelectedList([...selectedList, element.label]) : setSelectedList(selectedList.filter(item => item != element.label))

                    }}>
                      <img src={element.icon} className="mt-2" />
                      <IonCardContent >
                        <IonText className="font_12" text-wrap>
                          {element.label}
                        </IonText>
                      </IonCardContent>
                    </IonCard>
                  )
                })}
              </div>
            </div>
          </div>

          <div className='text-center mx-5 mt-4 '>

            <ButtonBlock label='Continue' onButtonClick={() => {

              selectedOne ? history.push({pathname:'/FindYourDoctor', state:selectedList}) : alert('Please select any one of the above to continue ')
            }}
            />
          </div>
        </div>

      </Layout>

    </div>
  )
}

export default DoctorConsults