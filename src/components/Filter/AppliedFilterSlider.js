/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  setSearchByText,
  setBuild,
  setArea,
  setBedroom,
  setShowEligibleOnly,
  setGroundFloor,
  setAccesible,
  setSheltered,
  setParking,
  setGarden,
  setAreaList,
  setBuildList,
} from "../../redux/FilterOptions";

export const AppliedFilterSlider = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const [buildName, setbuildName] = useState();
  const [areaName, setareadName] = useState();
  const [bedroomCount, setbedroomCount] = useState([]);
  const {
    searchByText,
    build,
    area,
    bedroom,
    showEligibleOnly,
    groundFloor,
    accesible,
    sheltered,
    parking,
    garden,
  } = useSelector((state) => state.FilterOptions);
  const { buildList, areaList } = useSelector((state) => state.FilterOptions);

  useEffect(() => {
    buildList.propertyTypeJsonList.map((item, index) =>
      item.propertyTypeId === build ? setbuildName(item.propertyTypeDesc) : null
    );

    areaList.areaJsonList.map((item, index) =>
      item.areaId === area ? setareadName(item.areaDescription) : null
    );
    build === null && setbuildName("");
    area === null && setareadName("");
    setbedroomCount(bedroom);
  }, [
    build,
    area,
    bedroom,
    buildList.propertyTypeJsonList,
    areaList.areaJsonList,
  ]);

  const settings = {
    centerMode: false,
    arrows: true,
    centerPadding: "0",
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0",
          slidesToShow: 2,
        },
      },
    ],
  };

  // for multiple bedroom values
  // const handleBedroomItemClick = (value) => {
  //  let values = bedroom.filter((item) => item !== value);
  //  dispatch(setBedroom(values));

  // };

  return (
    <div className="appliedFilterBox" style={props.topBorder}>
      {console.log("in applied filter:", buildName)}

      <h4 className="font_10 ff-reg">{props.sliderTitle}</h4>
      <Slider {...settings}>
        {/* {console.log("bedroom value from store", bedroom)} */}

        {searchByText && (
          <div>
            <span className="fill  font_10 ff-semi">
              Search for: {searchByText}
              {props.sliderButton === "x" && (
                <a
                  onClick={() => {
                    dispatch(setSearchByText(""));
                  }}
                >
                  x
                </a>
              )}
            </span>
          </div>
        )}

        {/* {bedroom && (

          <div>
            <span className="fill  font_10 ff-semi">
              Bedroom: {bedroom}
              {props.sliderButton === "x" && (
                <a
                  onClick={() => {
                    dispatch(setBedroom([]));
                  }}
                >
                  x
                </a>
              )}
            </span>
          </div>
        )} */}
        {bedroom &&
          bedroom.map((item) => {
            return (
              <div>
                <span className="fill  font_10 ff-semi">
                  Bedroom: {item}
                  {console.log("applied ", item)}
                  {props.sliderButton === "x" && (
                    <a
                      onClick={() => {
                        dispatch(
                          setBedroom(bedroom.filter((elem) => item !== elem))
                        );
                      }}
                    >
                      x
                    </a>
                  )}
                </span>
              </div>
            );
          })}

        {buildName && (
          <div>
            <span className="fill font_10 ff-semi">
              Build : {buildName}
              {props.sliderButton === "x" && (
                <a
                  onClick={() => {
                    dispatch(setBuild(null));
                    setbuildName("");
                  }}
                >
                  x
                </a>
              )}
            </span>
          </div>
        )}

        {areaName && (
          <div>
            <span className="fill font_10 ff-semi">
              Area : {areaName}
              {props.sliderButton === "x" && (
                <a
                  onClick={() => {
                    dispatch(setArea(null));
                    setareadName("");
                  }}
                >
                  x
                </a>
              )}
            </span>
          </div>
        )}

        {showEligibleOnly.includes("Y") && (
          <div>
            <span className="fill font_10 ff-semi">
              ShowEligibleOnly
              {props.sliderButton === "x" && (
                <a
                  onClick={() => {
                    dispatch(setShowEligibleOnly("N"));
                  }}
                >
                  x
                </a>
              )}
            </span>
          </div>
        )}
        {groundFloor.includes("Y") && (
          <div>
            <span className="fill font_10 ff-semi">
              GroundFloor
              {props.sliderButton === "x" && (
                <a
                  onClick={() => {
                    dispatch(setGroundFloor("N"));
                  }}
                >
                  x
                </a>
              )}
            </span>
          </div>
        )}
        {accesible.includes("Y") && (
          <div>
            <span className="fill font_10 ff-semi">
              Accessible
              {props.sliderButton === "x" && (
                <a
                  onClick={() => {
                    dispatch(setAccesible("N"));
                  }}
                >
                  x
                </a>
              )}
            </span>
          </div>
        )}
        {sheltered.includes("Y") && (
          <div>
            <span className="fill font_10 ff-semi">
              Sheltered
              {props.sliderButton === "x" && (
                <a
                  onClick={() => {
                    dispatch(setSheltered("N"));
                  }}
                >
                  x
                </a>
              )}
            </span>
          </div>
        )}
        {parking.includes("Y") && (
          <div>
            <span className="fill font_10 ff-semi">
              Parking
              {props.sliderButton === "x" && (
                <a
                  onClick={() => {
                    dispatch(setParking("N"));
                  }}
                >
                  x
                </a>
              )}
            </span>
          </div>
        )}
        {garden.includes("Y") && (
          <div>
            <span className="fill font_10 ff-semi">
              Garden
              {props.sliderButton === "x" && (
                <a
                  onClick={() => {
                    dispatch(setGarden("N"));
                  }}
                >
                  x
                </a>
              )}
            </span>
          </div>
        )}

        {/* <div className="clearfix"></div> */}
      </Slider>
    </div>
  );
};

export default AppliedFilterSlider;
