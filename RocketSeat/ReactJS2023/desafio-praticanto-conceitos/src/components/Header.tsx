import styles from "./Header.module.css";
import todoLogo from "../assets/logos/todo-logo.svg";
import { ChangeEvent, FormEvent } from "react";
import { PlusCircle } from "phosphor-react";
interface HeaderProps {
  newTaskTitle: string;
  handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleCreateNewTask: (event: FormEvent) => void;
}

export function Header({
  newTaskTitle,
  handleNewTaskChange,
  handleCreateNewTask,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logotipo do Ignite" />
      <div className={styles.taskInputForm}>
        <form onSubmit={handleCreateNewTask}>
          <input
            type="text"
            value={newTaskTitle}
            onChange={handleNewTaskChange}
            required
          />

          <button type="submit">
            <span className={styles.createButton}>
              Criar
              <PlusCircle size={16} />
            </span>
          </button>
        </form>
      </div>
    </header>
  );
}
