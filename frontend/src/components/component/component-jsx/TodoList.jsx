import React, {useState, useEffect} from 'react'
import "../component-css/TodoList.css"
import "../../webpages/Homepage/Homepage.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisVertical, faCalendarDays, faRepeat} from '@fortawesome/free-solid-svg-icons'
import {faCircleCheck} from "@fortawesome/free-regular-svg-icons"
import emptyTask from '../../../assets/taskimg.png'
import Checkbox from './Checkbox'

const TodoList = () => {
    
    const [task, setTask] = useState('')
    const [note, setNote] = useState('')

    const [displayTask, setDisplayTask] = useState([])

    useEffect(() => {
        const data = localStorage.getItem("myTask");
        if (data) {
          setDisplayTask(JSON.parse(data));
        }
      }, []);

    const addTask = () => {
        if (task.trim() !== "" || note.trim() !== "") {
          const newTask = { task, note };
          
          setDisplayTask(prevTasks => {
            const updatedTasks = [...prevTasks, newTask];
            localStorage.setItem("myTask", JSON.stringify(updatedTasks));
            return updatedTasks;
          });
    
          setTask("");
          setNote("");
        }
    };

    const deleteTask = (index) => {
        setDisplayTask(prevTasks => {
          const updatedTasks = prevTasks.filter((_, i) => i !== index);
          localStorage.setItem("myTask", JSON.stringify(updatedTasks)); 
          return updatedTasks;
        });
      };



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

            <div className="todolist-item" id='newtask-section'>
                
                <div className="addtask-section">
                    
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

                        {/* <div className="button-selection">
                            <div className="tempdate-section">
                                <button>Today</button>
                                <button>Tomorrow</button>
                                <button><FontAwesomeIcon icon={faCalendarDays} /></button>
                            </div>

                            <div className="repeat-section">
                                <button>Add Task</button>
                            </div>
                            
                        </div> */}
                    
                    </div>

                    
                </div>

                {/* <div className="addtask-section">
                    <div className="add-date-section">
                        <button>Today</button>
                        <button>Tomorrow</button>

                        <span className="datepicker-toggle">
                            <span className="datepicker-toggle-button">
                                <FontAwesomeIcon icon={faCalendarDays}/>
                            </span>
                            <input type="date" className="datepicker-input"/>
                        </span>
                    </div>
                </div> */}

                {/* DISPLAY TASK STARTS HERE */}
                {displayTask.map((task, index) =>
                <div className="displaytask-section" key={index}>
                    
                    <div className="addtask-checkbox">
                        <Checkbox onClick={() => deleteTask(index)}/>
                    </div>

                    <div className="tasknote-display">
                        <p>{task.task}</p>
                        <p>{task.note}</p>
                        
                    </div>
                </div>
                )}

            </div>

        </div>
    </>
  )
}

export default TodoList
