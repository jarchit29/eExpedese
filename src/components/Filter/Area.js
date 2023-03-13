import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AreaList from "./AreaList";
import { useDispatch } from "react-redux";
import { setArea } from "../../redux/FilterOptions";

const Area = () => {
  const dispatch = useDispatch();

  const area = useSelector((state) => state.FilterOptions.area);
  const { areaList } = useSelector((state) => state.FilterOptions);

  // const handleAreaOptionClick = (value) => {
  // let values;
  // if(!area.includes(value)){
  //   values = [...area,value]
  // }
  // else{
  //   values = area.filter(item => item !== value)

  // }
  // dispatch(setArea(values));
  // }

  const handleAreaOptionClick = (value) => {
    dispatch(setArea(value));
  };

  return (
    <div>
      <div id="area" className="tabcontent">
        {/* <div className="form-check pb-1 w_100 border-b-1 pt-3 mb-3">
          <div className="selectAll pb-3">
            <input
              className="form-check-input"
              type="radio"
              value=""
              id="all"
              // onChange={() => handleAreaOptionClick(null)}
              onChange={() => handleAreaOptionClick(999)}
              // checked={area === null ? true:false}
              checked={area === 999 ? true : false}
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="all">
              Select all
            </label>
          </div>
        </div> */}

        {areaList &&
          areaList.areaJsonList.map((item, index) => {
            return (
                <AreaList
                  key={index}
                  index={index}
                  areaDescription={item.areaDescription}
                  // checked={area.some((elem) => elem === item.areaId)}
                  checked={area === item.areaId ? true : false}
                  cardClick={() => {
                    handleAreaOptionClick(item.areaId);
                  }}
                />
              
            );
          })}
      </div>
    </div>
  );
};

export default Area;
