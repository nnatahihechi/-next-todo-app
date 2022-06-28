import styles from "../../styles/Addtodo.module.css";
import axios from 'axios'

import {
  ChangeEventHandler,
  FormEventHandler,
  useState,
  useEffect
} from 'react'
import Todo from '../../models/todos'

import { nanoid } from "nanoid";
import { useSetRecoilState } from "recoil";
import { todoContentState } from '../../src/state/todoState';
import TodoContent from "../../src/types";
import { useRouter } from 'next/router';





const AddTodo = () => {
  // const router = useRouter()

  const [content, setContent] = useState<Omit<TodoContent, "id">>({ todoId: "", description: "", title: "", isComplete: false});


  {/* //handle input  */ }
  const handleChange: ChangeEventHandler<HTMLInputElement> = e =>
    setContent(prev => ({
      ...prev, [e.target.id]: e.target.value
    }));

  const setTodos = useSetRecoilState(todoContentState);

  useEffect(() => {
    // console.log(content, "content");
    axios.get("http://localhost:3000/api/TodoItem/")
      .then(response => {
        // console.log("ressddddd",response.data[0]._id)
        setTodos(response.data);
      })
  }, []);


  const addTodo: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    content.todoId = nanoid();
    // console.log(content.todoId);
    
    const payload = {todoId: content.todoId, title: content.title, description: content.description, isComplete: false };
    
    axios.post("http://localhost:3000/api/AddTodo", payload)
      .then(response => {
        console.log("response ---", response);
      })
      .catch(err => {
        console.error("error ---", err);
      });

    setTodos((current) => {
      let newObject = { ...content, id: content.todoId }

      let newCurrent = [...current, newObject];
      return newCurrent;
    });

    setContent({ todoId: "", description: "", title: "", isComplete: false });
  }
  

  

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={addTodo}>

        <input
          onChange={handleChange}
          value={content.title}
          placeholder="todo"
          id="title" required
          // defaultValue="Reset"
          className={styles.input} />

        <input onChange={handleChange}
          value={content.description}
          placeholder="Description"
          id="description"
          className={styles.input}
          // defaultValue="Reset"
           />

        <button type="submit"
          disabled={!content.title}
          className={styles.button}>
          Add Todo
        </button>

      </form>
      
    </div>
  )
}

export default AddTodo;