
import React from 'react'

export const Alert = ({ type, msg, removeAlert, list }) =>{
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  },[list]);
  return (
    <p className={`alert alert-${type}`}>
        {msg}
    </p>
  )
}

export default Alert;