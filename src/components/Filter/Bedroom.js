import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBedroom } from "../../redux/FilterOptions";

const Bedroom = () => {
  const dispatch = useDispatch();
  const { bedroom } = useSelector((state) => state.FilterOptions);

  const handleBedroomOptionClick = (value) => {
    let values;
    if (!bedroom.includes(value)) {
      values = [...bedroom, value];
    } else {
      values = bedroom.filter((item) => item !== value);
    }
    dispatch(setBedroom(values));
  };

  // const handleBedroomOptionClick = (value) => {
  //   dispatch(setBedroom(value));
  // };

  return (
    <div>
      <div id="bedroom" className="tabcontent">
        <div className="form-check w_100 border-b-1 pt-3 mb-3">
          <div className="selectAll ">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="all"
              checked={bedroom.length === 9 ? true : false}
              onChange={() =>
                bedroom.length < 9
                  ? dispatch(setBedroom([0, 1, 2, 3, 4, 5, 6, 7, 8]))
                  : dispatch(setBedroom([]))
              }
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="all">
              Select all
            </label>
          </div>
        </div>

        <div className="w_100 pt-3">
          <div className="form-check pb-3 float-left">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              checked={bedroom.includes(0)}
              // checked={bedroom.some((elem) => elem === 0)}
              onChange={() => handleBedroomOptionClick(0)}
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="0">
              0
            </label>
          </div>

          <div className="form-check pb-3 float-right">
            <input
             className="form-check-input"
              type="checkbox"
              value=""
              id="1"
              checked={bedroom.includes(1)}
              // checked={bedroom.some((elem) => elem === 1)}
              onChange={() => handleBedroomOptionClick(1)}
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="1">
              1
            </label>
          </div>
        </div>
        <div className="w_100">
          <div className="form-check pb-3 float-left">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="2"
              checked={bedroom.includes(2)}
              // checked={bedroom.some((elem) => elem === 2)}
              onChange={() => handleBedroomOptionClick(2)}
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="2">
              2
            </label>
          </div>
          <div className="form-check pb-3 float-right">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="3"
              checked={bedroom.includes(3)}
              // checked={bedroom.some((elem) => elem === 3)}
              onChange={() => handleBedroomOptionClick(3)}
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="3">
              3
            </label>
          </div>
        </div>

        <div className="w_100">
          <div className="form-check pb-3 float-left">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="4"
              checked={bedroom.includes(4)}
              // checked={bedroom.some((elem) => elem === 4)}
              onChange={() => handleBedroomOptionClick(4)}
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="4">
              4
            </label>
          </div>
          <div className="form-check pb-3 float-right">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="5"
              checked={bedroom.includes(5)}
              // checked={bedroom.some((elem) => elem === 5)}
              onChange={() => handleBedroomOptionClick(5)}
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="5">
              5
            </label>
          </div>
        </div>

        <div className="w_100">
          <div className="form-check pb-3 float-left">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="6"
              checked={bedroom.includes(6)}
              // checked={bedroom.some((elem) => elem === 6)}
              onChange={() => handleBedroomOptionClick(6)}
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="6">
              6
            </label>
          </div>
          <div className="form-check pb-3 float-right">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="7"
              checked={bedroom.includes(7)}
              // checked={bedroom.some((elem) => elem === 7)}
              onChange={() => handleBedroomOptionClick(7)}
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="7">
              7
            </label>
          </div>
        </div>
        <div className="w_100">
          <div className="form-check pb-3 float-left">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="8"
              checked={bedroom.includes(8)}
              // checked={bedroom.some((elem) => elem === 8)}
              onChange={() => handleBedroomOptionClick(8)}
            />
            <label className="form-check-label font_14  ff-reg " htmlFor="8">
              8
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bedroom;
