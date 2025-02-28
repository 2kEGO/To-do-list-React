import React, {useState, useEffect} from 'react'
import "../component-css/TodoList.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisVertical, faCalendarDays, faRepeat} from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons"
import emptyTask from '../../../assets/taskimg.png'

const TodoList = () => {
    
    const [task, setTask] = useState('')
    const [newTask, setNewTask] = useState('')

    const [note, setNote] = useState('')
    const [newNote, setNewNote] = useState('')

    const addTask = () => {
    
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
                <button>
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
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            
                            />

                    <input type="text" 
                            placeholder='Details'
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}

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

                <div className="display-task-section">
                    {}
                </div>
            
            </div>

            </div>

            <div className="todolist-item">

            </div>

            </div>
    </>
  )
}

export default TodoList
