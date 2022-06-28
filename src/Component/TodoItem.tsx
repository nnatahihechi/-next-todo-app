import React, { FormEventHandler, useRef, useState } from 'react'
import TodoContent from "../types"
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoCompleteState, todoContentState } from "../state/todoState";
import styles from "../../styles/TodoItems.module.css";
import Todo from "../../models/todos";
import style from "../../styles/Addtodo.module.css";

import axios from 'axios';



const TodoItem = (props: TodoContent) => {
  const { description, title, isComplete, todoId} = props;
  const [edit, updateEdit] = useState(false);
  const [titleValue, updateTitleValue] = useState(title);
  const [descriptionValue, updateDescriptionValue] = useState(description);

  //intitialize props 
  //intitialize iscomplet state
  const [isCompleted, setIsCompleted] = useState(isComplete);
    // useRecoilState(todoCompleteState(props.todoId));
  const setTodos = useSetRecoilState(todoContentState);

  console.log(setTodos);
  


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
    axios.delete(`http://localhost:3000/api/TodoItem/${todoId}`)
    .then(response => { console.log("response", response) })

  }

  //handle edit todos
  const update: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

   const payload = {
      title: titleValue,
      description: descriptionValue,
      todoId: todoId,
      isComplete: isCompleted
    }
    console.log(payload);

    axios.put(`http://localhost:3000/api/TodoItem/${todoId}`, payload)
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

  if (edit) {

    return (
      <>
        <form
        style={{padding: "3rem 0"}}
        className={styles.form}
        onSubmit={update}>

        <input
          value={titleValue}
          onChange={(e) => { updateTitleValue(e.target.value) }}
          placeholder="todo"
          id="title" required
          className={style.input} />

        <input
          value={descriptionValue}
          onChange={(e) => { updateDescriptionValue(e.target.value) }}
          placeholder="Description"
          id="description"
          className={style.input} />

        <button type="submit"
          className={style.button}>
          Update Todo
        </button>

        <button type="submit"
          className={style.button}
          onClick={() => { 
            updateEdit(false)
          }}>
          Cancel
        </button>

      </form>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.item} onClick={() => {
        console.log(props.todoId);
      }}>
        {isCompleted ? <h2 style={{textDecoration: 'line-through'}}>{title}</h2> : <h2>{title}</h2>}
        {/* <h2>{title}</h2> */}

        {isCompleted ? description && <p style={{textDecoration: 'line-through'}}>{description}</p> : description && <p>{description}</p>}

        {/* {description && <p>{description}</p>} */}
      </div>
      <button
        data-todoid={props.todoId}
        className={styles.button}
        onClick={(e) => {
          updateEdit(true);
        }}
      >
        Edit
      </button>
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


