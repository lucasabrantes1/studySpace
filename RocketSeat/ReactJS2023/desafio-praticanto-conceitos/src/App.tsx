import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import { useState, ChangeEvent, FormEvent } from "react";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  // Inicia uma lista de tarefas vazia
  const [taskList, setTaskList] = useState({
    id: 1,
    tasks: [],
  });

  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
  }

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();
    // Aqui você deve criar uma nova tarefa e adicioná-la ao taskList
    // Não se esqueça de limpar o campo de texto com setNewTaskTitle('')
  }

  return (
    <div className={styles.mainContainer}>
      <Header 
        newTaskTitle={newTaskTitle}
        handleNewTaskChange={handleNewTaskChange}
        handleCreateNewTask={handleCreateNewTask}
      />

    </div>
  );
}
