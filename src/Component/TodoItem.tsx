import React, { FormEventHandler, useRef, useState } from 'react'
import TodoContent from "../types"
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoCompleteState, todoContentState } from "../state/todoState";
import styles from "../../styles/TodoItems.module.css";
import Todo from "../../models/todos";
import style from "../../styles/Addtodo.module.css";
import axios from 'axios';

// const {NEXT_PUBLIC_BASE_URL} = process.env


const TodoItem = (props: TodoContent) => {
  const { description, title, isComplete, todoId } = props;
  const [newDescription, setnewDescription] = useState(description);
  const [newTitle, setnewTitle] = useState(title);
  const [edit, setEdit] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [isCompleted, setIsCompleted] = useState(isComplete);
  const [isImportant, setisImportant] = useState(false);

  // useRecoilState(todoCompleteState(props.todoId));
  const setTodos = useSetRecoilState(todoContentState);
  //  https://next-todo-app-nine.vercel.app/

  //handle the complete status
  const completedTodos = () => {
    const payload = { isComplete: !isCompleted };
    setIsCompleted(!isCompleted);

    axios
      .put(`/api/TodoItem/${todoId}`, payload)
      .catch((err) => console.error(err));
  };

  //handle isImportant todos
  const isImportantTodos = () => {
    const payload = { isImportant: !isImportant };
     setisImportant(!isImportant);
    console.log("isImportant",payload);

    if (payload.isImportant) {
      axios
        .get(`/api/TodoItem/`, {
          params: { userId: localStorage.getItem("sub") },
        })
        .then((response) => {
          console.log("RESPONSE", response);
          setTodos(response.data);

        });
       
    }
  };



  //handle delete todos
  const removeTodo = () => {
    setTodos((todos) => todos.filter((todos) => todos.todoId !== todoId));
    axios.delete(`/api/TodoItem/${todoId}`).then((response) => {
      console.log("response", response);
    });
  };


  //handle edit todos
  const editTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const payload = {
      title: titleValue,
      description: descriptionValue,
      todoId: todoId,
      isComplete: isCompleted,
      isImportant: isImportant,
    };

    await axios
      .put(`/api/TodoItem/${todoId}`, payload)
      .then((response) => {
        if (response.status === 200) {
          setnewDescription(descriptionValue);
          setnewTitle(titleValue);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (edit) {
    return (
      <>
        <form
          style={{ padding: "3rem 0" }}
          className={styles.form}
          onSubmit={editTodo}
        >
          <input
            value={titleValue}
            onChange={(e) => {
              setTitleValue(e.target.value);
            }}
            placeholder="todo"
            id="title"
            required
            className={style.input}
          />
          <input
            value={descriptionValue}
            onChange={(e) => {
              setDescriptionValue(e.target.value);
            }}
            placeholder="Description"
            id="description"
            className={style.input}
          />

          <div className={style.button}>
            <button type="submit" className={style.button}>
              Update
            </button>

            <button
              type="submit"
              className={style.button}
              onClick={() => {
                setEdit(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.item}
        onClick={() => {
          console.log(props.todoId);
        }}
      >
        {isCompleted ? (
          <h2 style={{ textDecoration: "line-through" }}>{newTitle}</h2>
        ) : (
          <h2>{newTitle}</h2>
        )}
        {/* <h2>{title}</h2> */}

        {isCompleted
          ? newDescription && (
              <p style={{ textDecoration: "line-through" }}>{newDescription}</p>
            )
          : newDescription && <p>{newDescription}</p>}

        {/* {description && <p>{description}</p>} */}
      </div>
      <button
        data-todoid={props.todoId}
        className={styles.button}
        onClick={(e) => {
          setEdit(true);
        }}
      >
        Edit ✏️
      </button>
      <button className={styles.button} onClick={completedTodos}>
        {isCompleted ? "Done ✅" : "Not Done 🚫"}
      </button>

      <button className={styles.button} onClick={removeTodo}>
        Remove ❌
      </button>

      <button className={styles.button} onClick={isImportantTodos}>
       isImportant
      </button>
    </div>
  );
}


export default TodoItem


