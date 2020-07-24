import React from 'react'
import {
  Link
} from "react-router-dom";

export default function SideBar() {
  return(
    <div className='side-bar'>
      <div className='side-bar-item'>
        <Link to="/">Home</Link>
      </div>
      <div className='side-bar-item'>
        <Link to="/about/me">About</Link>
      </div>
    </div>
  )
}