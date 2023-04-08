import React from 'react'
import {
    IonCard,
    IonCardContent,
    IonText,
  } from "@ionic/react";
  import { useHistory } from "react-router";


const HealthUtilCards = (props) => {

let history = useHistory();


  return (
    <div>
      <IonCard className="d-flex justify-content-center p-2">
        <div className="row text-center justify-content-around">
          {props.data.map((item) => {
            return (
              <IonCard className="col-3 mt-3 healthUtilCard"  onClick={()=>{history.push(`${item.routeTo}`)}}>
                <img src={item.img}  className="mt-2"/>
                <IonCardContent >
                  <IonText className="font_12" text-wrap>
                  {item.title}
                  </IonText>
                  </IonCardContent>
              </IonCard>
            );
          })}
        </div>
      </IonCard>
    </div>
  )
}

export default HealthUtilCards