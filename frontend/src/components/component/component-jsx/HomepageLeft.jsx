import React from 'react'
import "../component-css/homepageLeft.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarCheck} from "@fortawesome/free-regular-svg-icons"
import {faBars} from "@fortawesome/free-solid-svg-icons"


const HomepageLeft = () => {
  return (
    <>
    <div className="homepage-banner-left">

        <button className="hamburger-container">
            <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="logo-container">
            <FontAwesomeIcon icon={faCalendarCheck} />
            <h1 className="title">To-Do List</h1>
        </div>

    </div>
    </>
  )
}

export default HomepageLeft