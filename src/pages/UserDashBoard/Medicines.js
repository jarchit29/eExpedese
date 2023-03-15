import React from 'react'
import { Header } from '../../components/Miscellaneous/Header'
import { useHistory } from "react-router";

const Medicines = () => {
  let history = useHistory();
  return (
    <div>
      <Header HeaderTitle="Medicines" backArrow={true} onBackArrow={()=>{history.goBack()}}/>
      <p className='mt-80'>This is component</p>
    </div>
  )
}

export default Medicines