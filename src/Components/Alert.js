import React from 'react'



export default function Alert(props) {
  return (
 
    props.alert && <div class="alert-msg" role="alert">
  <strong>{props.alert.type}</strong>: {props.alert.msg}  
    </div>

  )
}
