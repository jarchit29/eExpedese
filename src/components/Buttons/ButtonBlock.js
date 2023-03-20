import React from 'react'

const ButtonBlock = (props) => {
  return (
    <div>
    <button className='buttonBlock' onClick={props.onButtonClick}>
            {props.label}
        </button>
    </div>
  )
}

export default ButtonBlock