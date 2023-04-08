import React from "react";
import ButtonBlock from "../components/Buttons/ButtonBlock";
import { Header } from "../components/Miscellaneous/Header";
import Seperator from "../components/Miscellaneous/Seperator";

// From modules
import { useHistory } from "react-router";
import { useState } from "react";
import UploadFrom from "../components/Modals/UploadFrom";
import { IonBackdrop } from "@ionic/react";
import { Camera, CameraResultType , CameraSource} from '@capacitor/camera';

const UploadPrescription = () => {
  let history = useHistory();
  const [openModal, setOpenModal] = useState(false)

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
  };

  let onCamClick = ()=>{
  
    takePhoto();
    console.log("path",takePhoto.webPath);

  }
  return (
    <div>

      {openModal?<IonBackdrop visible={false} tappable={false} stopPropagation={false} />:<></>}

      <Header backArrow={true} HeaderTitle="Upload Prescription" onBackArrow={() => { history.goBack() }} />


      <div className="mt-185 ">
        <h5 className="mx-3"> Have a Prescription ?</h5>
        <div className="text-center mt-4">
          <ButtonBlock label="Upload Prescription" onButtonClick={() => { setOpenModal(true) }} />
        </div>
        <p className="mx-3 mt-4">
          Your Attached Prescription would be secured and private
        </p>
        <div className="mt-4">

          <Seperator label="Know More" />
        </div>
        <div className="mx-3 mt-4">
          <h3>Why upload a prescripiton ?</h3>
          <div className="mt-4">
            <p>
              Never lose the Digital of your prescription. It wil be with you
              whereever you go

            </p>
            <p className="mt-2">
              Details in your prescription are not shared with any third paty
            </p>
          </div>
        </div>


        <div className="text-center stickToBottom ">
          <ButtonBlock
            label="CONTINUE"
            onButtonClick={() => {
              history.push("./Success")
            }}
          />
        </div>
        {openModal && <UploadFrom setOpenModal={setOpenModal} onCamClick = {onCamClick} />}
      </div>

    </div>
  );
};

export default UploadPrescription;
