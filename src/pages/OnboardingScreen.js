import React from "react";
import { IonSlides, IonSlide, IonContent } from "@ionic/react";
import { Welcome } from "../components/Welcome/Welcome";
import SlideOne from "../components/OnBoarding Slides/SlideOne";
import SlideTwo from "../components/OnBoarding Slides/SlideTwo";
import SlideThree from "../components/OnBoarding Slides/SlideThree";

//TODO: Add three slides for user onboarding
//TODO: Add a button to skip onboarding
//TODO: Add a button to go to the next slide
//TODO: Add a button to go to the previous slide
//TODO: This page should only be visible if the user opened the app for the first time

const OnboardingScreen = () => {
  const slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  return (
    <IonContent>
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
          <SlideOne />
        </IonSlide>
        <IonSlide>
          <SlideTwo />
        </IonSlide>
        <IonSlide>
          <SlideThree />
        </IonSlide>
        <IonSlide>
          <Welcome />
        </IonSlide>
      </IonSlides>
    </IonContent>
  );
};

export default OnboardingScreen;
