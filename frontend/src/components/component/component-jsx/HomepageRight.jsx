import React from 'react'
import "../component-css/homepageRight.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarCheck, faCircleCheck, faUser} from "@fortawesome/free-regular-svg-icons"
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from 'react-router-dom'
const HomepageRight = () => {

    const navigate = useNavigate();

    const getProfile = () => {
        navigate("/profile")
    }

  return (
    <>
        <div className="homepage-banner-right">           
            
            <div className="switch-calendar-button-container">
                <button id='calendar-button'>
                    <FontAwesomeIcon icon={faCalendarDays} />
                </button>

                <button>
                <FontAwesomeIcon icon={faCircleCheck} />
                </button>
            </div>

            <div className="profile-button-container">
                <button onClick={getProfile}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
            </div>

        </div>
    </>
  )
}

export default HomepageRight