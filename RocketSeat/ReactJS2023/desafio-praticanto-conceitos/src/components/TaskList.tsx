import styles from "./TaskList.module.css";
import { FormEvent, useState, ChangeEvent } from "react";

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
  onTaskToggle: (taskIndex: number) => void;
  onDeleteTask: (taskIndex: number) => void;
}
export function TaskList({
  taskList,
  onTaskToggle,
  onDeleteTask,
}: TaskListProps) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    taskList.tasks.push({
      title: newTaskTitle,
      completed: false,
    });

    setNewTaskTitle("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskTitle(event.target.value);
  }

  function handleToggleTaskCompleted(taskToToggle: Task) {
    taskToToggle.completed = !taskToToggle.completed;
  }

  return (
    <article className={styles.taskList}>
      <div className={styles.taskCount}>
        <div className={styles.taskCreated}>
          <span className={styles.createdTasks}>
            Tarefas criadas{" "}
            <span className={styles.numberHighlight}>
              {taskList.tasks.length}
            </span>
          </span>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.taskCompleted}>
          <span className={styles.completedTasks}>
            Concluídas{" "}
            <span className={styles.numberHighlight}>
              {taskList.tasks.filter((task) => task.completed).length}
            {" "}

            de {taskList.tasks.length}
            </span>
          </span>
        </div>
      </div>

      <ul>
        {taskList.tasks.map((task, index) => (
          <li key={index} className={styles.taskItemContainer}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onTaskToggle(index)}
            />
            <div className={styles.taskContent}>
              <span className={task.completed ? styles.completedTask : ""}>
                {task.title}
              </span>
              <div className={styles.spacer}></div>
            </div>
            <button onClick={() => onDeleteTask(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </article>
  );
}
