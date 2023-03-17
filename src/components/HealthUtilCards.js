import React from 'react'
import {
    IonCard,
    IonCardContent,
  } from "@ionic/react";
  import { useHistory } from "react-router";


const HealthUtilCards = (props) => {

let history = useHistory();


  return (
    <div style={{ marginTop: "200px" }}>
      <IonCard style={{ paddingLeft: "4px" }}>
        <div className="row">
          {props.data.map((item) => {
            return (
              <IonCard className="col-3 mt-3 " color="primary" style={{borderStyle:"solid" , borderColor:"black"}} onClick={()=>{history.push(`${item.routeTo}`)}}>
                <img src={item.img} />
                <IonCardContent >{item.title}</IonCardContent>
              </IonCard>
            );
          })}
        </div>
      </IonCard>
    </div>
  )
}

export default HealthUtilCards