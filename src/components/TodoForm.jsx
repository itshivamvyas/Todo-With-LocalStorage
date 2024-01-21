import React, {useState} from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
  const [todo, setTodo] = useState("")
  const {addTodo} = useTodo()

  const add = (e) =>{
    e.preventDefault()

    if (!todo) return

    addTodo({todo, completed: false})
    setTodo("")
  }

  return (
      <form  className="flex" onSubmit={add}>
          <input
              type="text"
              placeholder="Write Your Todo Here"
              className="text-black text-bold w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;