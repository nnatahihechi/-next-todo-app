import styles from "../../styles/TodoList.module.css";
import { SpinnerCircular } from 'spinners-react';

import {useRecoilValue} from 'recoil'
import { todoContentState } from '../state/todoState'
import TodoItem from './TodoItem'
interface todolistProps {
  // todos: Array<Todo>
}
const TodoList = () => {
  // const { todolist } = props
    
  const todos = useRecoilValue(todoContentState);
  if (!todos.length){
    return <SpinnerCircular className={styles.spinner}   />
  }

  return (
    <div className={styles.container}>
   
      <div className={styles.todos}>
          {todos.map(todoProps =>(
            <>
              <TodoItem {...todoProps} key={todoProps.todoId}/>
            </>
            
          ))}
          
      </div>
    </div>
  )
}

// export async function getServerSideProps() {
//   // get todo data from API
//   const res = await fetch(process.env.`API_URL/TodoItem`as string)
//   const todos = await res.json()

//   // return props
//   return {
//     props: { TodoList },
//   }
// }
export default TodoList