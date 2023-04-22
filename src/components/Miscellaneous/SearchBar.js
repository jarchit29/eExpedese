import { IonSearchbar } from '@ionic/react'
import React from 'react'

const SearchBar = (props) => {
  return (
    <IonSearchbar placeholder={props.placeholder} onIonInput={props.handleSearch}>

    </IonSearchbar>
    
  )
}

export default SearchBar