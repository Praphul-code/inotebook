import React from 'react'

 export const Alert = (props) => {
  return (
    <div>
    <div className="alert alert-secondary" role="alert">
   {props.message}
  </div>
  </div>
  )
}

export default Alert;

