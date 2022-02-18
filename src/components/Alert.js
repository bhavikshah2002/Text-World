import React from 'react'
export default function Alert(props) {
  return (
    // props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
    //     <strong>{props.alert.msg}</strong>
    // </div>
    props.alert &&  <div className={`alert alert-${props.alert.type} d-flex align-items-center`} role="alert">
  <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"></svg>
  <div>
  <strong>{props.alert.msg}</strong>
  </div>
</div>
  )
}
