import styles from "../../styles/Addtodo.module.css";
import axios from "axios";

import {
  ChangeEventHandler,
  FormEventHandler,
  useState,
  useEffect,
} from "react";
import Todo from "../../models/todos";

import { nanoid } from "nanoid";
import { useSetRecoilState } from "recoil";
import { todoContentState } from "../../src/state/todoState";
import TodoContent from "../../src/types";
import { useUserContext } from "../../src/content/userContext";

const AddTodo = () => {
  const { user, createorGetUser } = useUserContext();

  const [content, setContent] = useState<Omit<TodoContent, "id">>({
    todoId: "",
    description: "",
    title: "",
    isComplete: false,
  });
  {
    /* //handle input  */
  }
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setContent((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

  const setTodos = useSetRecoilState(todoContentState);

  useEffect(() => {
    axios.get(`/api/TodoItem/`).then((response) => {
      console.log("GET called");
      console.log("RESPONSE", response);
      setTodos(response.data);
    });
  }, []);

  const addTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    content.todoId = nanoid();

    const payload = {
      todoId: content.todoId,
      title: content.title,
      description: content.description,
      isComplete: false,
    };

    axios
      .post(`/api/AddTodo/`, payload)
      .then((response) => {
        console.log("POST called");
        console.log("response ---", response);
      })
      .catch((err) => {
        console.error("error ---", err);
      });

    setTodos((current) => {
      let newObject = { ...content, id: content.todoId };

      let newCurrent = [...current, newObject];
      return newCurrent;
    });

    setContent({ todoId: "", description: "", title: "", isComplete: false });
  };

  return (
    <div className={styles.container}>
      <p>{user.name}</p>
      <img
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        src={user.picture}
        alt="my_picture"
      />
      <form className={styles.form} onSubmit={addTodo}>
        <input
          onChange={handleChange}
          value={content.title}
          placeholder="todo"
          id="title"
          required
          className={styles.input}
        />

        <input
          onChange={handleChange}
          type="textarea"
          value={content.description}
          placeholder="Description"
          id="description"
          className={styles.input}
        />

        <button
          type="submit"
          disabled={!content.title}
          className={styles.button}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
