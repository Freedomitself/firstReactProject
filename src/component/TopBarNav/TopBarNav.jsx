import React from 'react'
import "./TopBarNav.css"
import { FiSearch } from "react-icons/fi";

const TopBarNav = () => {
  return (
    <div className='topbarnavBox'>
        <div className='topbarnav'>
            <div className='logo-div'>
                <h1>net solutions</h1>
            </div>
            <div className='top-ul-li'><ul>
                <li>Services</li>
                <li>Expertise</li>
                <li>Success Stories</li>
                <li>About Us</li>
                <li>Insights</li>
                <li>More</li>
            </ul></div>
            <div className='search'>
                <li><FiSearch/></li>
                <li>Contact Us</li>
            </div>
        </div>

        <div className='subnavbar'>
            <div className="topicsbar">
                <li>All Topics</li><spa>|</spa>
                <li>eCommarce</li><spa>|</spa>
                <li>Product Development</li><spa>|</spa>
                <li>Mobile App Development</li><spa>|</spa>
                <li>User Expriennce</li><spa>|</spa>
                <li>More</li>
            </div>
        </div>

    </div>
  )
}

export default TopBarNav