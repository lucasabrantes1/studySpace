import styles from './TaskList.module.css'
import { FormEvent, useState, ChangeEvent } from 'react'

interface Task {
  title: string;
  completed: boolean;
}

export interface TaskListType {
  id: number;
  tasks: Task[];
}

interface TaskListProps {
  taskList: TaskListType;
}

export function TaskList({taskList}:TaskListProps){
    const [newTaskTitle, setNewTaskTitle] = useState('')

    function handleCreateNewTask(event: FormEvent){
      event.preventDefault()

      taskList.tasks.push({
        title: newTaskTitle,
        completed: false
      });

      setNewTaskTitle('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
      event.target.setCustomValidity('')
      setNewTaskTitle(event.target.value)
    }

    function handleToggleTaskCompleted(taskToToggle: Task){
      taskToToggle.completed = !taskToToggle.completed
    }

// ...

return (
  <article className={styles.taskList}>
    <div className={styles.taskInputBackground}>
      <div className={styles.taskInputForm}>
        <form onSubmit={handleCreateNewTask}>
          <input 
            type="text" 
            value={newTaskTitle}
            onChange={handleNewTaskChange}
            required
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
    <ul>
      {taskList.tasks.map((task, index) => (
        <li key={index}>
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={() => handleToggleTaskCompleted(task)}
          />
          {task.title}
        </li>
      ))}
    </ul>
  </article>
)
// ...

}
