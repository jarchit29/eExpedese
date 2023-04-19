import React from 'react'
import { Header } from './Header'

const Layout = (props) => {
  return (

    <div className='mt-130'>

        {props.children}
        
    </div>
  )
}

export default Layout