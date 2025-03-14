import React, {use, useState, useContext} from 'react'
import "./Homepage.css"
import "./HomepageMedia.css"
import HomepageLeft from '../../component/component-jsx/HomepageLeft'
import HomepageRight from '../../component/component-jsx/HomepageRight'
import TodoList from '../../component/component-jsx/TodoList'
import Profile from '../Profile/Profile'

import AuthContext from '../../../context/authContext.js'

const Homepage = () => {
  
  const {profile, setProfile} = useContext(AuthContext)

  return (
    <>
      <div className="homepage-container">
        <div className="homepage-wrapper">

          {/* THIS IS THE HEADER */}
          <nav className="homepage-banner-container">
            {banner()}
          </nav>

          {/* THIS IS THE BODY */}
          <div className="homepage-body-container">
            <div className="sidebar-container"></div>

            <div className="content-container">
              <div className="content-wrapper">
                {profile ? <Profile /> : <TodoList />}
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )

  function banner() {
    return <div className="homepage-banner-wrapper">
      <HomepageLeft />

      <HomepageRight setProfile={() => setProfile(!profile)}/>

    </div>
  }
}

export default Homepage