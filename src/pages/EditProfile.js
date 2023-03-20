import React from 'react'
import { Header } from '../components/Miscellaneous/Header'
import { useHistory } from "react-router-dom";

const EditProfile = () => {
    let history = useHistory();
  return (
    <>
    <Header backArrow={true} HeaderTitle="Edit Profile" onBackArrow={()=>{history.goBack()}}/>
    </>
  )
}

export default EditProfile