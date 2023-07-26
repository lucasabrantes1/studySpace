import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import { useState, ChangeEvent, FormEvent } from "react";

import styles from "./App.module.css";

import "./global.css";

interface Task {
  title: string;
  completed: boolean;
}

interface TaskListType {
  id: number;
  tasks: Task[];
}



export function App() {
  const [taskList, setTaskList] = useState<TaskListType>({
    id: 1,
    tasks: [],
  });

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
  }

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    if (newTaskTitle !== '') {
        setTaskList({
            id: taskList.id,
            tasks: [...taskList.tasks, { title: newTaskTitle, completed: false }],
        });

        setNewTaskTitle('');
    }
  }

  const handleToggleTaskCompleted = (taskIndex: number) => {
    setTaskList((prevState) => {
      const newTasks = [...prevState.tasks];
      newTasks[taskIndex] = { ...newTasks[taskIndex], completed: !newTasks[taskIndex].completed };
      
      return { ...prevState, tasks: newTasks };
    });
}


const handleDeleteTask = (taskIndex: number) => {
  setTaskList((prevState) => {
    const newTasks = [...prevState.tasks];
    newTasks.splice(taskIndex, 1);

    return { ...prevState, tasks: newTasks };
  });
}

  return (
    <div className={styles.mainContainer}>
      <Header 
        newTaskTitle={newTaskTitle}
        handleNewTaskChange={handleNewTaskChange}
        handleCreateNewTask={handleCreateNewTask}
      />
      <TaskList taskList={taskList} onTaskToggle={handleToggleTaskCompleted} onDeleteTask={handleDeleteTask} />



    </div>
  );
}


