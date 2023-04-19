import { IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import ButtonBlock from "../components/Buttons/ButtonBlock";
import { Header } from "../components/Miscellaneous/Header";
import { useHistory } from "react-router";
import Layout from "../components/Miscellaneous/Layout";

const GoToHome = () => {
  let history = useHistory();
  return (
    <div>
      <Header backArrow={true} HeaderTitle="Order Success :)" onBackArrow={()=>{history.goBack()}} />
      <Layout>
        <IonCard>
          <IonCardContent>
            You have successfully ordered medicines !
            <div className="text-center mt-5">
              <ButtonBlock
                label="Go To Home"
                onButtonClick={() => {
                  history.push("./HomePage");
                }}
              />
            </div>
          </IonCardContent>
        </IonCard>
      </Layout>
    </div>
  );
};

export default GoToHome;
