import React, { useState } from 'react'

const TodoList = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleInput = (event) => {
        setTask(event.target.value);
        //  console.log(task);
    }

    const submitTask = () => {
        const newTask = {
            id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
            taskName: task,
        }
        setTaskList([ ...taskList, newTask]); // added new task at the end of list
        // console.log(taskList);
    }

    const deleteTask = (id) => {
        const deletedTask =  taskList.filter((task) => {
            if(task.id === id) {
                return false;
            }

            else {
                return true;
            }
        })

        setTaskList(deletedTask);
    }

  return (
    <div className='todo-list'>
        <div className="task-input">
            <input onChange={handleInput} type="text" />
            &nbsp;&nbsp;
            <button onClick={submitTask} className="submit-task">Add Task</button>
        </div>

        <ul className="task-list" style={{width: 'fit-content', margin: '0 auto'}}>
            {
                taskList.map((eachTask, key) => {
                    return(
                    //  {{ console.log(key) }}
                        <li style={{display: "flex", alignItems: 'center'}} key={key}>
                            <h2>{eachTask.taskName}</h2>
                            <button onClick={() => deleteTask(eachTask.id)} className='removeTask'>x</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default TodoList
