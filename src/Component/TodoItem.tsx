import React, { FormEventHandler, useState } from 'react'
import TodoContent from "../types"
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoCompleteState, todoContentState } from "../state/todoState";
import styles from "../../styles/TodoItems.module.css";
import Todo from "../../models/todos";

import axios from 'axios';



const TodoItem = (props: TodoContent) => {
  //intitialize props 
  const { description, title, isComplete, todoId } = props;
  //intitialize iscomplet state
  const [isCompleted, setIsCompleted] = useState(isComplete);
    // useRecoilState(todoCompleteState(props.todoId));
  const setTodos = useSetRecoilState(todoContentState);


  //handle the complete status 
  const completedTodos = () => {
    const payload = { isComplete: !isCompleted };
    setIsCompleted(!isCompleted);

    axios.put(`http://localhost:3000/api/TodoItem/${todoId}`, payload)
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  //handle delete todos
  const removeTodo = () => {
    setTodos(todos => todos.filter(todos => todos.todoId !== todoId));
    axios.delete(`http://localhost:3000/api/TodoItem/${todoId}`).then(response => { console.log(response) })
  }


 

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        {isCompleted ? <h2 style={{textDecoration: 'line-through'}}>{title}</h2> : <h2>{title}</h2>}
        {/* <h2>{title}</h2> */}

        {isCompleted ? description && <p style={{textDecoration: 'line-through'}}>{description}</p> : description && <p>{description}</p>}

        {/* {description && <p>{description}</p>} */}
      </div>
      <button
        className={styles.button}
        onClick={completedTodos}
      >
        {isCompleted ? "Done ✅" : "Not Done 🚫"}
      </button>

      <button
        className={styles.button}
        onClick={removeTodo}
      >Remove␥</button>
    </div>

  );

}

export default TodoItem


