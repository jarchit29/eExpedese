import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router'
import Layout from '../components/Miscellaneous/Layout'
import { Header } from '../components/Miscellaneous/Header'

const FindYourDoctor = () => {

    let location = useLocation()
    let history = useHistory()

    let data = ['all', ...location.state]

    const [selected, setSelected] = useState('all')



    return (

        <div>

            <Header HeaderTitle="Find your doctor " backArrow={true} onBackArrow={() => { history.goBack() }} />

            <Layout>

                <div className='flexNoMarginiContainer row ' style={{ justifyContent: 'space-around' }}>

                    {data.map((item) => {
                        return (
                            <div className='myTabs col-3 mx-2 my-2 text-center' style={item == selected ? { backgroundColor: "#083770", color: 'white' } : {}} onClick={() => { setSelected(item) }}>
                                <p >
                                    {item}
                                </p>
                            </div>
                        )
                    })}


                </div>

            </Layout>

        </div>
    )
}

export default FindYourDoctor