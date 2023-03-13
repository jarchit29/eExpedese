import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Component } from "react";
import { useHistory } from "react-router-dom";
import Geocode from "react-geocode";
// import { GoogleComponent } from 'react-google-location'
import IdleTimer from "../../IdleTimer/IdleTimer";

class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      lat: 27.2046, 
      lng: 77.4977,
    };
  }
  render() {
    // let apiKey = "AIzaSyBmrJ3vvZhDX9_KhSibFAUf4u87vDapqUE";
    let { latitude, longitude } = this.props;

    // console.log("Keyyy "+process.env.React_App_MAP_API_KEY)

    // {(this.props.latitude===" ")?(this.setState={lat :this.state.lat,lng:this.state.lng}&& console.log("Showing default as no latitude and longitude")):this.setState={lat:this.props.latitude,lng:this.props.longitude}}
    // {(this.props.longitude===" ")?(this.setState={lat :this.state.lat,lng:this.state.lng}&&console.log("Showing default as no latitude and longitude")):this.setState={lat:this.props.latitude,lng:this.props.longitude}}

    return (
      <div>
        <IdleTimer />
        <div>
          <Map
            google={this.props.google}
            style={{ width: "100%", height: "100%" }}
            zoom={18}
            initialCenter={{
              lat: this.props.latitude,
              lng: this.props.longitude,
            }}
          >
            <Marker
              position={{ lat: this.props.latitude, lng: this.props.longitude }}
            />
          </Map>
        </div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.React_App_MAP_API_KEY,
})(MapContainer);
