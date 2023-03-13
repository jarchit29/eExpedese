import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccesible,
  setGarden,
  setGroundFloor,
  setParking,
  setSheltered,
  setShowEligibleOnly,
} from "../../redux/FilterOptions";

const MoreDetails = () => {
  const {
    showEligibleOnly,
    groundFloor,
    accesible,
    sheltered,
    parking,
    garden,
  } = useSelector((state) => state.FilterOptions);
  const dispatch = useDispatch();

  const handleAccesible = (value) => {
    if (!accesible.includes(value)) {
      dispatch(setAccesible("Y"));
    } else {
      dispatch(setAccesible("N"));
    }
  };

  const handleGarden = (value) => {
    if (!garden.includes(value)) {
      dispatch(setGarden("Y"));
    } else {
      dispatch(setGarden("N"));
    }
  };

  const handleGroundFloor = (value) => {
    if (!groundFloor.includes(value)) {
      dispatch(setGroundFloor("Y"));
    } else {
      dispatch(setGroundFloor("N"));
    }
  };

  const handleParking = (value) => {
    if (!parking.includes(value)) {
      dispatch(setParking("Y"));
    } else {
      dispatch(setParking("N"));
    }
  };

  const handleSheltered = (value) => {
    if (!sheltered.includes(value)) {
      dispatch(setSheltered("Y"));
    } else {
      dispatch(setSheltered("N"));
    }
  };
  const handleShowEligible = (value) => {
    if (!showEligibleOnly.includes(value)) {
      dispatch(setShowEligibleOnly("Y"));
    } else {
      dispatch(setShowEligibleOnly("N"));
    }
  };

  return (
    <div id="details" className="tabcontent">
      <div className="form-check pb-1 w_100 border-b-1 mb-4">
        <div className="w_100 border-b-1 py-3 border-b-gray">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="all"
            checked={showEligibleOnly === "Y"}
            onChange={() => handleShowEligible("Y")} 
          />
          <label className="form-check-label font_14  ff-reg " htmlFor="all">
            Show Eligible Only
          </label>
        </div>

        <div
          className="w_100 border-b-1 py-3 border-b-gray"
          onClick={() => handleGroundFloor("Y")}
        >
          <div className="form-check  float-left">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="0"
              checked={groundFloor === "Y"}
              onChange={() => handleGroundFloor("Y")}
            />
            <label className="form-check-label font_14  ff-reg ">
              Ground Floor
            </label>
          </div>
        </div>

        <div
          className="w_100 border-b-1 py-3 border-b-gray"
          onClick={() => handleAccesible("Y")}
        >
          <div className="form-check  float-left">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="1"
              checked={accesible === "Y"}
              onChange={() => handleAccesible("Y")}
            />
            <label className="form-check-label font_14  ff-reg ">
              Accessible
            </label>
          </div>
        </div>

        <div
          className="w_100 border-b-1 py-3 border-b-gray"
          onClick={() => handleSheltered("Y")}
        >
          <div className="form-check  float-left">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="2"
              checked={sheltered === "Y"}
              onChange={() => handleSheltered("Y")}
            />
            <label className="form-check-label font_14  ff-reg ">
              Sheltered
            </label>
          </div>
        </div>

        <div
          className="w_100 border-b-1 py-3 border-b-gray"
          onClick={() => handleParking("Y")}
        >
          <div className="form-check  float-left">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="3"
              checked={parking === "Y"}
              onChange={() => handleParking("Y")}
            />
            <label className="form-check-label font_14  ff-reg ">Parking</label>
          </div>
        </div>

        <div
          className="w_100 border-b-1 py-3 border-b-gray"
          onClick={() => handleGarden("Y")}
        >
          <div className="form-check  float-left">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="4"
              checked={garden === "Y"}
              onChange={() => handleGarden("Y")}
            />
            <label className="form-check-label font_14  ff-reg ">Garden</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
