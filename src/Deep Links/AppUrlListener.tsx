import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { App, URLOpenListenerEvent } from '@capacitor/app';
import { setApplicantId, setSessionId } from '../redux/ResponseFromLogin';
import { setPartnerId } from '../redux/PartnerId';
import { useDispatch } from 'react-redux';


const AppUrlListener: React.FC<any> = () => {

  //Devteach technique 

  useEffect(() => {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      
      // const domain = 'https://pylononline.infoaxon.com'
      const domain = 'https://staging.homeconnections.org.uk'
      // const domain = 'https://cblalpha.homeconnections.org.uk'
      
      const pathArray = event.url.split(domain);
      const appPath = pathArray.pop();
      

      // alert("Path array says "+pathArray)
      // alert("App Path says" + appPath);


      if (appPath) {
        
        window.location.replace(`${appPath}`)

      }

      // alert("Opened from URL @event url is  " + event.url)
      
      
    });

  }, []);

  return null;
};

export default AppUrlListener;