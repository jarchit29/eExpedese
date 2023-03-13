import React from 'react'
import ReactPaginate from 'react-paginate';

const PageContainer = (props) => {
  return (
    <div className="" style={{marginBottom:"20px"}} >

    <button type="button" class="btn btn-outline-primary search font_14 ff-semi t-d-none  " onClick={props.clickPrevious} disabled={props.count<=0}>Previous</button>
    <button type="button" class="btn btn-outline-primary search font_14 ff-semi t-d-none float-right" onClick={props.clickNext}>Next Page </button>
   
    </div>
  )
}

export default PageContainer