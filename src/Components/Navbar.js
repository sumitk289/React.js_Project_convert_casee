import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import img1 from'./image/cc.png'


export default function Navbar(props) {
  return (
    <>
    <nav>
      <img src ={img1} width ="30px"/>
      <h3 className='type'>Convert Case</h3>
      <Link to="/about" className='a'>About</Link><br/>
      <Link to="/" className='b'>Home</Link>
    </nav>
    </>
  )
}
