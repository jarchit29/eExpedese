import React from 'react'

const AreaList = ({areaDescription,cardClick,checked,index}) => {
    return (
        
        <div className="form-check py-3 border-b-gray " onClick={cardClick}> {/*removing float-left css class to make all elments in on line*/}
        <input className="form-check-input" type="radio" value='' id={index} checked={checked} onChange={cardClick}/>
        <label className="form-check-label font_14  ff-reg " htmlFor={index}>{areaDescription==="All Borough"?areaDescription="All borough":areaDescription}</label>
    </div>
    
    )
}

export default AreaList
