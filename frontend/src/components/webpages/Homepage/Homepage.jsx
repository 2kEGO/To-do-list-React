import React from 'react'
import "./Homepage.css"
import HomepageLeft from '../../component/component-jsx/HomepageLeft'
import HomepageRight from '../../component/component-jsx/HomepageRight'
import TodoList from '../../component/component-jsx/TodoList'

const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="homepage-wrapper">

          {/* THIS IS THE HEADER */}
          <div className="homepage-banner-container">
            {banner()}
          </div>

          {/* THIS IS THE BODY */}
          <div className="homepage-body-container">
            <div className="sidebar-container"></div>

            <div className="content-container">
              <TodoList/>
            </div>
          </div>

        </div>
      </div>
    </>
  )

  function banner() {
    return <div className="homepage-banner-wrapper">
      <HomepageLeft />

      <HomepageRight />

    </div>
  }
}

export default Homepage