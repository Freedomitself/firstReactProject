import React from 'react'
import "./TopBar.css"
import TopBarNav from '../TopBarNav/TopBarNav'
import Main from '../Main/Main'
const TopBar = () => {
  return (
    <div>
        <TopBarNav/>
        <Main/>
    </div>
  )
}

export default TopBar