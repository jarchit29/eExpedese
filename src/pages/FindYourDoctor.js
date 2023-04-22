import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router'
import Layout from '../components/Miscellaneous/Layout'
import { Header } from '../components/Miscellaneous/Header'
import { IonCard, IonCardContent, IonSearchbar } from '@ionic/react'

// Import images 

import icon from '../Style/Images/docConsults.svg'
import SearchBar from '../components/Miscellaneous/SearchBar'
import DoctorInfoCard from '../components/CardLayouts/DoctorInfoCard'

const FindYourDoctor = () => {

    let location = useLocation()
    let history = useHistory()

    let tabsData = ['all', ...location.state]

    const [selected, setSelected] = useState('all')

    
    const dentistData = [
        
        { icon: icon, filed: 'Dentist', name: 'Dr.Shirley D. Howard dentist', expierence: '7 years Expierence ', ratings: "5 stars (348)" },
        { icon: icon, filed: 'Dentist', name: 'Dr.Shirley D. Howard dentist', expierence: '7 years Expierence ', ratings: "1 stars (348)" },
        { icon: icon, filed: 'Dentist', name: 'Dr.Shirley D. Howard dentist', expierence: '7 years Expierence ', ratings: "2 stars (348)" },
        { icon: icon, filed: 'Dentist', name: 'Dr.Shirley D. Howard dentist', expierence: '7 years Expierence ', ratings: "3 stars (348)" },
        { icon: icon, filed: 'Dentist', name: 'Dr.Shirley D. Howard dentist', expierence: '7 years Expierence ', ratings: "4 stars (348)" },
        { icon: icon, filed: 'Dentist', name: 'Dr.Shirley D. Howard dentist', expierence: '7 years Expierence ', ratings: "5 stars (348)" },
    ]
    
    let allListdata = [...dentistData]
    
    
    let screendata = allListdata;

    const [searchResults , setSearchresults ] = useState([...screendata])
    
    const handleSearch = (ev) => {
        
        // let query = "";
        // const target = ev;
        // if (target) 
        // {

        //     query = ev.target.value;
        // }
    
    
        // setSearchresults(screendata.filter(d => d.indexOf(query) > -1));

        // console.log(query)
      }


    return (

        <ion-content>



            <div>

                <Header HeaderTitle="Find your doctor " backArrow={true} onBackArrow={() => { history.goBack() }} />

                <Layout>

                    <div className='mx-3'>
                        <SearchBar placeholder='Find Your Doctor' handleSearch={handleSearch}/>
                    
                    <div className='flexNoMarginiContainer row my-2' style={{ justifyContent: 'space-around' }}>

                        {tabsData.map((item) => {
                            return (
                                <div className='myTabs col-3 mx-2 my-2 text-center' style={item == selected ? { backgroundColor: "#083770", color: 'white' } : {}} onClick={() => { setSelected(item) }}>
                                    <p >
                                        {item}
                                    </p>
                                </div>
                            )
                        })}


                    </div>
                    </div>

                    <div className='mx-3'>

                        {
                            searchResults.map((item) => {
                                return (
                                   <DoctorInfoCard item={item}  onCardClick={() =>{ history.push({ pathname:'/KnowYourDoctor', state:item }) }}/>
                                )
                            })
                        }

                    </div>

                </Layout>

            </div>
        </ion-content>
    )
}

export default FindYourDoctor