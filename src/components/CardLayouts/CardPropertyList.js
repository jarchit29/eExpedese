//Imports from images

import imgHomeFinder from "../../Style/Images/homefinder.png";

export const CardPropertyList = (props) => {
    return (
        <div>
            <div className="container pb-5">
                <div className="row px-4 px-md-0">
                    <div className=" px-0">
                        <div className="border-0 card">
                            <div className="bg-transparent shadow-box light-border border-10 mb-3 p-3" onClick ={props.clickCardProperty}>
                                <div className="d-flex">
                                    <div className="d-block pe-2">
                                        { <img src = {props.imgProperty ? props.imgProperty:imgHomeFinder} alt={`Image for ${props.address} property`}/>  }
                                       
                                    </div>
                                    <div className="float-right pe-1">
                                        <p className="font_10 mb-0">{props.propertyID}</p>
                                        <p className="font_14 mb-2 ff-semi">{props.address}</p>
                                        <p className="font_14 mb-2 ff-semi">{props.address2}</p>
                                        <p className="font_10 mb-0">Area</p>
                                        <p className="font_14">{props.area}</p>
                                    </div>
                                </div>
                                <div className="cont-bg p-2 rounded">
                                    <div className="row p-1">
                                        <div className="col-6">
                                            <div className="font_12 color-lb">Rent</div>
                                            <div className="ff-semi current-color pb-0 font_14">{props.rent}</div>
                                        </div>
                                        <div className="col-6">
                                            <div className="font_12 color-lb">Landlord</div>
                                            <div className="ff-semi current-color pb-0 font_14">{props.landlord}</div>
                                        </div>
                                    </div>
                                    <div className="row p-1">
                                        <div className="col-6">
                                            <div className="font_12 color-lb">Type</div>
                                            <div className="ff-semi current-color pb-0 font_14">{props.type}</div>
                                        </div>
                                        <div className="col-6">
                                            <div className="font_12 color-lb">Bedrooms/Bedspaces</div>
                                            <div className="ff-semi current-color pb-0 font_14">{props.bedrooms}/{props.bedSpace}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )
}
