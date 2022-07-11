import styles from "../../styles/TodoList.module.css";
import { SpinnerCircular } from 'spinners-react';
import { useState } from "react";
import {useRecoilValue} from 'recoil'
import { todoContentState } from '../state/todoState'
import TodoItem from './TodoItem'

const TodoList = () => {

  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 6000);
    
  const todos = useRecoilValue(todoContentState);
  if (!todos.length){
    return (
      <>
    <SpinnerCircular className={styles.spinner} enabled={isLoading}  />
    {isLoading? <p>Searching for todos</p> : <p>No todos found</p>}
    </>
    )

  }

  return (
    <div className={styles.container}>
   
      <div className={styles.todos}>
          {todos.map(todoProps =>(
            <>
              <TodoItem {...todoProps} key={todoProps.todoId}
              />
            </>
            
          ))}
          
      </div>
    </div>
  )
}

export default TodoList