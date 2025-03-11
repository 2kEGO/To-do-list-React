import {useState} from 'react'
import "../component-css/homepageRight.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarCheck, faCircleCheck, faUser} from "@fortawesome/free-regular-svg-icons"
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons'

import Cookies from 'js-cookie'


import { useNavigate } from 'react-router-dom'
const HomepageRight = () => {

    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate();

    const Logout = () => {
        Cookies.remove("token");
        navigate("/login");
    }

    const ToggleDropDown = () => {
        setToggle(!toggle)
    }

  return (
    <>
        <div className="homepage-banner-right">           
            
            {/* <div className="switch-calendar-button-container">
                <button id='calendar-button'>
                    <FontAwesomeIcon icon={faCalendarDays} />
                </button>

                <button>
                <FontAwesomeIcon icon={faCircleCheck} />
                </button>
            </div> */}

            <div className="profile-button-container">
                <button onClick={ToggleDropDown} id='profile-button'>
                    <FontAwesomeIcon icon={faUser} />
                </button>

                <div className={toggle? 'show': 'hidden'} id='profile-menu'>
                    <ul>
                        <li><button onClick={Logout}>Profile</button></li>
                        <li><button>Logout</button></li>
                    </ul>
                </div>
            </div>

        </div>
    </>
  )
}

export default HomepageRight