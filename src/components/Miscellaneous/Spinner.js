import { IonBackdrop, IonContent } from "@ionic/react";
export const Spinner = () => {
  return (
    <div className="  text-center Spinner">
      <div className="spinner-border color_Spinnner" role="status">
        <span className="visually-hidden"></span>
      </div>
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
