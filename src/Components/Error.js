import React from 'react'

export default function Error() {
    let errorStyle={
        color:'red',
        textAlign:'center',
    }
  return (
    <div style={errorStyle}>
    <h1>Sorry :( 404 Page Not Found )</h1>
    </div>
  )
}
