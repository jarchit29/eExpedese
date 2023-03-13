import React from "react";
import Iframe from 'react-iframe'
import IdleTimer from "../../IdleTimer/IdleTimer";

export const BottomMap = (props) => {

  // let srs ="https://maps.google.com/maps?q=28.7041,77.1025&hl=es;z=14&amp;output=embed"
  return (

    <div>
            <IdleTimer />


     <Iframe 
        url = 'https://maps.google.com/maps?q=28.7041,77.1025&hl=es;z=14&amp;output=embed'
        sandbox=" allow-same-origin allow-scripts "
     />
    </div>
  );
};
