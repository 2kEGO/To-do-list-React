import React from 'react'
import "./Homepage.css"
import HomepageLeft from '../../component/component-jsx/HomepageLeft'
import HomepageRight from '../../component/component-jsx/HomepageRight'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisVertical, faCalendarDays, faRepeat} from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons"
import emptyTask from '../../../assets/taskimg.png'

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
              <div className="todolist-container">

                <div className="todolist-item" id='todolist-title'>
                  <p>My list</p>
                  <button>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
                </div>

                <div className="todolist-item" id='todolist-addtask'>
                  <button>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p>Add a task</p>
                  </button>
                </div>

                <div className="todolist-item">
                  <div className="empty-task-display">
                    <img src={emptyTask} alt="" />
                    <p>No tasks yet</p>                   
                  </div>

                  <div className="addtask-section">
                    <div className="addtask-checkbox">
                      <input type="checkbox" id='checkbox' />
                      
                    </div>
                    
                    <div className="addtask-input-section">
                      <div className="addtask-input">
                        <input type="text" placeholder='title'/>
                        <input type="text" placeholder='details'/>
                      </div>

                      <div className="button-selection">
                        <div className="tempdate-section">
                          <button>Today</button>
                          <button>Tomorrow</button>
                          <button><FontAwesomeIcon icon={faCalendarDays} /></button>
                        </div>
                        <div className="repeat-section">
                          <button><FontAwesomeIcon icon={faRepeat} /></button>
                        </div>
                        
                      </div>
                      
                    </div>
                  
                  </div>
                
                </div>

                <div className="todolist-item">

                </div>

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

      <HomepageRight />

    </div>
  }
}

export default Homepage