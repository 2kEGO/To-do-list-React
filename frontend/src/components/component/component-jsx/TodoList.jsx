import React, {useState, useEffect} from 'react'
import "../component-css/TodoList.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisVertical, faCalendarDays, faRepeat} from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons"
import emptyTask from '../../../assets/taskimg.png'

const TodoList = () => {
    
    const [task, setTask] = useState('')
    const [note, setNote] = useState('')

    const [displayTask, setDisplayTask] = useState([])

    const addTask = () => {
        const newTask = {task: task,
                        note: note};
        setDisplayTask([...displayTask, newTask]);
    }

    const deleteTask = () => {
    
    }

    const handleBlur = () => {

    }



  return (
    <>
        <div className="todolist-container">

            <div className="todolist-item" id='todolist-title'>
                <p>My list</p>
                <button>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
            </div>

            <div className="todolist-item" id='todolist-addtask'>
                <button onClick={addTask}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                    <p>Add a task</p>
                </button>
            </div>

            <div className="todolist-item">
            
            {/* DISPLAY IF NO TASK */}
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
                    <input type="text" 
                            placeholder='Title'
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            
                            />

                    <input type="text" 
                            placeholder='Details'
                            value={note}
                            onChange={(e) => setNote(e.target.value)}

                            />
                </div>

                <div className="button-selection">
                    <div className="tempdate-section">
                        <button>Today</button>
                        <button>Tomorrow</button>
                        <button><FontAwesomeIcon icon={faCalendarDays} /></button>
                    </div>

                    {/* <div className="repeat-section">
                        <button>Add Task</button>
                    </div> */}
                    
                </div>
                
                </div>

                
            
            </div>

            <div className="display-task-section">
                    <ul>
                        {displayTask.map((tasks, index) => 
                        <li key={index}>
                            {tasks.task} {tasks.note}
                        </li>
                        )}
                    </ul>
                </div>

            </div>

            <div className="todolist-item">

            </div>

            </div>
    </>
  )
}

export default TodoList
