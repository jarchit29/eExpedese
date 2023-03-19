import React from 'react'
import imgUser from "../../Style/Images/user.png"
import MedicalDetailsCard from '../CardLayouts/MedicalDetailsCard'

const UserInfoIcon = (props) => {
    return (
        <div>


            <div className='flexNoMarginiContainer mt-4' >

                <button
                    className="btn float-start ps-4 ps-md-0"

                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas"
                    role="button"
                >
                    <a data-bs-toggle="offcanvas" data-bs-target="#offcanvas">
                        <img
                            src={imgUser}
                            className="invt pb-1"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvas"
                            alt=''
                        />
                    </a>

                </button>

                <div>
                    <span className="ps-3 ff-semi font_20 text-white">{props.title}</span>
                    <br />
                    <span className="ps-3 ff-semi font_20 text-white">{props.salutation}</span>
                </div>

            </div>
            <div className='flexNoMarginiContainer'>

             {
                props.data.map((item)=>{

                    return(
                        <MedicalDetailsCard/>
                        
                    )
                })
             }  


            </div>
        </div>
    )   
}

export default UserInfoIcon