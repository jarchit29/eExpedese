import React from 'react'
import {
    IonCard,
    IonCardContent,
  } from "@ionic/react";
  import { useHistory } from "react-router";


const HealthUtilCards = (props) => {

let history = useHistory();


  return (
    <div>
      <IonCard style={{ paddingLeft: "4px" }} className="d-flex justify-content-center">
        <div className="row text-center">
          {props.data.map((item) => {
            return (
              <IonCard className="col-3 mt-3 healthUtilCard" color="primary"  onClick={()=>{history.push(`${item.routeTo}`)}}>
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