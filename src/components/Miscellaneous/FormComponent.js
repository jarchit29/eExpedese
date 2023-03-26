import React from 'react'
import { useState } from 'react'

const FormComponent = (props) => {

    const [value, setValue] = useState(props.data.value)

    return (

        <div>
            <div className='flex-container'>

                <div>
                    <p>
                        {props.data.label}
                    </p>
                </div>
                <div className='lastItem'>

                    {props.data.type == 'editable' ? (<p contentEditable='true'>{props.data.value}</p>) : props.data.type == 'variable' ? (
                        <>
                            <span className='text-span' onClick={()=>{setValue(value+1)}}>
                                +
                            </span>
                            <span className='mx-2'>
                                {value}
                            </span>
                            <span className='text-span'onClick={()=>{value>0?setValue(value-1):alert("can't be negative")}}>
                                -
                            </span>
                        </>
                    )
                        : (<p>
                            {props.data.value}
                        </p>)}

                </div>

            </div>
            <hr className='solid' />
        </div>
    )
}

export default FormComponent