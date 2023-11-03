import React from 'react'
import "./Main.css"
import Profil from "../../assets/imagesTS.png"
import Land from "../../assets/landJJK.jpg"
import { FaCalendar, FaGreaterThan } from 'react-icons/fa';
import { BiTime } from "react-icons/bi";
const Main = () => {
    return (
        <div className='main'>
            <div className="left-m">
                <div className='insightsHead'>
                    <span>INSIGHTS</span>
                    <span><FaGreaterThan /></span>
                    <span>ECOMMERCE</span>
                </div>

                <div className='article'>
                    How To Create Amazing eCommerce Landing Page That Convert (With Examples)
                </div>

                <div className='authorbox'>
                    <img src={Profil} alt="" />
                    <div>
                        <span>BY AMINU BILAL | <FaCalendar/> 2 MIN READ</span>
                        <span><BiTime/> UPDATED: NOV 1, 2023</span>
                    </div>
                </div>
            </div>
            <div className="right-m">
                <img src={Land} alt="" />
            </div>
        </div>
    )
}

export default Main