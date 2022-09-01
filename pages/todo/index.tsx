import React, {
  useState,
  useEffect,
  ChangeEventHandler,
  FormEventHandler,
} from "react";

 const index = () => {
    let todoId = 0
    todoId = todoId + 1

  interface Todo {
    text: string;
    //   complete: boolean;
  }
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<{ id: string, value: string}[]>([])
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodo((todo) => e.target.value);
    console.log(todo);
  };

  const addTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (todo) {
        const id = Date.now().toString();
        let todoObj = { 
            id, value: todo
        }
        setTodoList([ ...todoList, todoObj])

    }


    setTodo("")
    console.log(todo);
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input onChange={handleChange} type="text" placeholder="todo" value={todo}/>
      <div>
        <button type="submit">add todo</button>
        <button>delete todo</button>
      </div>
      </form>
      {
        todoList.map(todo => <p key={todo.id}>{todo.value}</p>)
      }
    </div>
  );
};

export default index;
