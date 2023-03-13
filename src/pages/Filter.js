/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-restricted-globals */
import { IonPage } from "@ionic/react";
import { useState, useEffect } from "react";
import AppliedFilterSlider from "../components/Filter/AppliedFilterSlider";
import { useQuery } from "react-query";
import axios from "axios";
import qs from "qs";
import backarrow from "../Style/Images/arrow.png";
import { useHistory } from "react-router-dom";
import Area from "../components/Filter/Area";
import MoreDetails from "../components/Filter/MoreDetails";
import Build from "../components/Filter/Build";
import Bedroom from "../components/Filter/Bedroom";
import SearchByText from "../components/Filter/SearchByText";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import { IonBackdrop, IonContent } from "@ionic/react";

import {
  setArea,
  setBuild,
  setBedroom,
  setShowEligibleOnly,
  setGroundFloor,
  setAccesible,
  setSheltered,
  setParking,
  setGarden,
  setAreaList,
  setBuildList,
  setAdvanceFilter,
  setFilterFlag,
  setSearchByText,
} from "../redux/FilterOptions";

const Filter = () => {
  const { React_App_Base_URL } = process.env;

  let history = useHistory();
  const ResponseFromLogin = useSelector((state) => state.ResponseFromLogin);
  const { Id } = useSelector((state) => state.PartnerId);
  const FilterOptions = useSelector((state) => state.FilterOptions);
  const [btn, setBtn] = useState("bedroom");
  const dispatch = useDispatch();

  // const disable = () =>{

  // }

  //get  build list
  var Data = {
    partnerId: Id,
    options: "",
  };

  // useEffect(() => {
  //   async function fetchAreaTypes() {
  //     let url =`${React_App_Base_URL}/getAreaList`; //~Env file
  //     const res = await axios({
  //       method: "post",
  //       url,
  //       data: qs.stringify(Data),
  //     });
  //     dispatch(setAreaList(res.data));
  //   }
  //   fetchAreaTypes();
  // }, [Id]);

  // //get build list
  // useEffect(() => {
  //   async function fetchBuildTypes() {
  //     let url =`${React_App_Base_URL}/getPropertyBuildType` //~Env File
  //     const res = await axios({
  //       method: "post",
  //       url,
  //       data: qs.stringify(Data),
  //     });
  //     dispatch(setBuildList(res.data));
  //   }
  //   fetchBuildTypes();
  // }, []);

  //Function htmlFor Api call using axios
  let fetchOnAdvanceFilter = async () => {
    let url = `${React_App_Base_URL}/getPropertyListOnAdvanceFilter`; //~Env file
   
    const userSelectedOptions = {
      bedRoomId:
        FilterOptions.bedroom.length === 0
          ? ResponseFromLogin.bedroom
          : FilterOptions.bedroom.toString(),
      partnerId: Id,
      applicantId: ResponseFromLogin.applicantId,
      subPortalCodeId: 999,
      areaId: FilterOptions.area === null ? 999 : FilterOptions.area,
      propertyTypeId: FilterOptions.build === null ? 999 : FilterOptions.build,
      accessible: FilterOptions.accesible,
      adapted: "N",
      isShalter: FilterOptions.sheltered,
      isParking: FilterOptions.parking,
      isGarden: FilterOptions.garden,
      isGroundFloor: FilterOptions.groundFloor,
      showEligibleOnly: FilterOptions.showEligibleOnly,
      searchString: FilterOptions.searchByText,
      availableFlag: "Y",
      tenureId: 999,
      ahCategoryIdStr: 999,
      propertyAllocationTypeId: 999,
      adminAreaId: 999,
      lowestWeeklyRent: 0,
      highestWeeklyRent: 2000,
      advertisedBand: 999,
      start: 0,
      pageSize: 73,
      sessionId: ResponseFromLogin.sessionId,
      isLoggedIn: true,
      options: "",
    };

    let res = await axios({
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      url,
      data: qs.stringify(userSelectedOptions),
    });
    dispatch(setAdvanceFilter(res.data));
    return res;
  };

  const handleSearch = () => {
    dispatch(setAdvanceFilter("")); // This is done to have a loader after advance filter
    fetchOnAdvanceFilter();
    dispatch(setFilterFlag(true));
    history.push("/HomePage");
    // console.log("handle search on filter page in clicked");
  };

  const handleAllClear = () => {
    dispatch(setArea(null));
    dispatch(setBuild(null));
    dispatch(setBedroom([]));
    dispatch(setShowEligibleOnly("N"));
    dispatch(setGroundFloor("N"));
    dispatch(setAccesible("N"));
    dispatch(setSheltered("N"));
    dispatch(setParking("N"));
    dispatch(setGarden("N"));
    dispatch(setSearchByText(""));
  };
  return (
    <IonPage>
      <div className="banner-gr position-relative h-5  ">
        <div className="container ps-0">
          <div className="position-absolute bottom-0">
            <button
              className="btn float-end ps-1 ps-md-0"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
              // role="button"
            >
              <img
                onClick={() => history.goBack()}
                src={backarrow}
                alt=""
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas"
                className="m-3"
              />
              <span className="ff-semi font_20 text-white ps-1">Filter</span>
            </button>
          </div>
          <button
            className="fill font_16 ff-semi m-3 color-l-gray bg-trans"
            onClick={() => handleAllClear()}
          >
            Clear all
          </button>
        </div>
      </div>

      <SearchByText />

      <IonContent>
        <div
          className={`filterBox ${
            FilterOptions.searchByText !== "" ? "filterBoxDisabled" : null
          }`}
        >
          {/* {FilterOptions.searchByText !== ""?  <IonBackdrop visible={true} /> : null} */}
          <div className="tab">
            {btn === "bedroom" ? (
              <button
                className="tablinks font_14 ff-semi active"
                onClick={() => setBtn("bedroom")}
                id="defaultOpen"
                aria-label="Bedroom tab active"
              >
                Bedroom
              </button>
            ) : (
              <button
                className="tablinks font_14 ff-semi "
                onClick={() => setBtn("bedroom")}
                id="defaultOpen"
                aria-label="Bedroom tab disabled"
              >
                Bedroom
              </button>
            )}

            {btn === "build" ? (
              <button
                className="tablinks font_14 ff-semi active"
                onClick={() => setBtn("build")}
                aria-label="Build tab active"
              >
                Build
              </button>
            ) : (
              <button
                className="tablinks font_14 ff-semi"
                onClick={() => setBtn("build")}
                aria-label="Build tab disabled"
              >
                Build
              </button>
            )}
            {btn === "area" ? (
              <button
                className="tablinks font_14 ff-semi active"
                onClick={() => setBtn("area")}
                aria-label="Area tab active"
              >
                Area
              </button>
            ) : (
              <button
                className="tablinks font_14 ff-semi"
                onClick={() => setBtn("area")}
                aria-label="Area tab disabled"
              >
                Area
              </button>
            )}
            {btn === "moreDetails" ? (
              <button
                className="tablinks font_14 ff-semi active"
                onClick={() => setBtn("moreDetails")}
                aria-label="More details tab active"
              >
                More details
              </button>
            ) : (
              <button
                className="tablinks font_14 ff-semi"
                onClick={() => setBtn("moreDetails")}
                aria-label="More details tab disabled"
              >
                More details
              </button>
            )}
          </div>

          {btn && btn === "bedroom" ? (
            <Bedroom />
          ) : "" || btn === "build" ? (
            <Build />
          ) : "" || btn === "area" ? (
            <Area />
          ) : "" || btn === "moreDetails" ? (
            <MoreDetails />
          ) : (
            ""
          )}
        </div>
      </IonContent>

      {(FilterOptions.build ||
        FilterOptions.area ||
        FilterOptions.bedroom ||
        FilterOptions.showEligibleOnly.includes("Y") ||
        FilterOptions.groundFloor.includes("Y") ||
        FilterOptions.accesible.includes("Y") ||
        FilterOptions.sheltered.includes("Y") ||
        FilterOptions.parking.includes("Y") ||
        FilterOptions.garden.includes("Y")) && (
        <AppliedFilterSlider sliderTitle="Applied filters" sliderButton="x" />
      )}

      <div className="bottomBox">
        <button
          onClick={() => history.goBack()}
          className="close font_14 ff-semi t-d-none bg-trans"
        >
          Close
        </button>
        {(FilterOptions.searchByText ||
          FilterOptions.build ||
          FilterOptions.area ||
          FilterOptions.bedroom) != null ||
        FilterOptions.showEligibleOnly.includes("Y") ||
        FilterOptions.groundFloor.includes("Y") ||
        FilterOptions.accesible.includes("Y") ||
        FilterOptions.sheltered.includes("Y") ||
        FilterOptions.parking.includes("Y") ||
        FilterOptions.garden.includes("Y") ? (
          <button
            className="search font_14 ff-semi t-d-none sk "
            onClick={() => handleSearch()}
            style={{ background: "#0276C0", color: "#ffffff" }}
            aria-label="Search Active "
          >
            Search
          </button>
        ) : (
          <button
            onClick={() => swal({ text: "Enter filter options" })}
            className="search font_14 ff-semi t-d-none sk "
            style={{ background: "#E6EBEF", color: "#5D6892" }}
            aria-label="Search Disabled"
          >
            Search
          </button>
        )}
      </div>
    </IonPage>
  );
};

export default Filter;
