import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import BuildList from "./BuildList";
import { setBuild } from "../../redux/FilterOptions";

const Build = () => {
  const build = useSelector((state) => state.FilterOptions.build);

  const dispatch = useDispatch();
  const { buildList } = useSelector((state) => state.FilterOptions);

  // const handleBuildOptionClick = (value) => {
  //   let values;

  //   if (!build.includes(value)) {
  //     values = [...build, value];
  //   } else {
  //     values = build.filter((item) => item !== value);
  //   }
  //   dispatch(setBuild(values));

  //   console.log(values);
  // };

  const handleBuildOptionClick = (value) => {
    dispatch(setBuild(value));
  };

  return (
    <>
      <div id="build" className="tabcontent">
        {/* <div className="form-check pb-1 w_100 border-b-1 pt-3 mb-3">
          <div className="selectAll pb-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="all"
              name="allSelect"
              checked={build.length === buildList.propertyTypeJsonList.length}
              onChange={() =>
                handleBuildOptionClick(
                  buildList.propertyTypeJsonList.propertyTypeId
                )
              }
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="all">
              Select all
            </label>
          </div>
        </div> */}

        {buildList !== ""
          ? buildList.propertyTypeJsonList.map((item, index) => {
              return (
                <>
                  {item.propertyTypeDesc === " " ? (
                    <></>
                  ) : (
                    <BuildList
                      key={item.propertyTypeId}
                      name={item.propertyTypeDesc}
                      propertyTypeDesc={item.propertyTypeDesc}
                      propertyTypeId={item.propertyTypeId}
                      index={index}
                      // checked={build.some((elem) => elem === item.propertyTypeId)}
                      checked={build === item.propertyTypeId ? true : false}
                      cardClick={(e) => {
                        handleBuildOptionClick(item.propertyTypeId);
                      }}
                      // cardClick={() =>{
                      //    handleBuildOptionClick(item.propertyTypeDesc,item.propertyTypeId)
                      // }}
                    />
                  )}
                </>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Build;
