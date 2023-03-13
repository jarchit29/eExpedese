import { IonBackdrop, IonContent } from "@ionic/react";
export const SpinnerForLogin = () => {
  return (
    <div className="  text-center SpinnerForLogin">
      <div className="spinner-border color_SpinnnerForLogin " role="status">
        <span className="visually-hidden"></span>
      </div>
      <IonBackdrop tappable={true} visible={true} stopPropagation={true} />
      {/* <IonBackdrop tappable={true} visible={true} stopPropagation={true} /> */}
      {/* <div className="spinner-border color_SpinnnerTwo " role="status">
        <span className="visually-hidden"></span>
      </div>
      <div className="spinner-border color_SpinnnerTwo " role="status">
        <span className="visually-hidden"></span>
      </div>
      <div className="spinner-border color_Spinnner" role="status">
        <span className="visually-hidden"></span>
      </div>
      <div className="spinner-border color_SpinnnerTwo " role="status">
        <span className="visually-hidden"></span>
      </div>
      <div className="spinner-border color_Spinnner" role="status">
        <span className="visually-hidden"></span>
      </div> */}
    </div>
  );
};

// .color_Spinnner{
//   color: #A4195C;
// } //CSS for spinner color
