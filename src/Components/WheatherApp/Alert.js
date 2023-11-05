import React from 'react'

export default function Alert(props) {
  return (

<div class={`alert alert- alert-dismissible fade show`} role="alert" style={{height:"50px",fontSize:"20px"}}>
{props.msg}
</div>
   
  )
}
