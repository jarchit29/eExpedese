import React from 'react';

const BuildList = ({propertyTypeDesc,cardClick,checked,index}) => {

   
    return (
             <div className="w_100 border-b-1  py-3 border-b-gray "  onClick={cardClick}>
              <div className="form-check  float-left">
                <input
                  className="form-check-input"
                  type="radio"
                  value=" "
                  id={index}
                  checked={checked}
                  onChange={cardClick}
                />
                <label
                  className="form-check-label font_14  ff-reg "
                  htmlFor={index}
                >
                  {propertyTypeDesc} 
                </label>
              </div>
        </div>
    )
}

export default BuildList
