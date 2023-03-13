import React from 'react'

const useLogin = () => {
    const clickme = () =>{
        console.log('click me')
    }
  return {
    clickme
  }
}

export default useLogin



