import React,{useState} from 'react'
import { useTodo } from '../context';
function TodoForm() {
  const[todo,setTodo] =useState("")
  const {addTodo}= useTodo()
  
  const add= (e)=>{
    e.preventDefault()
    if(!todo) return

    addTodo({todo, completed :false})
    setTodo("")
  }
  return (
     <form onSubmit={add} className="flex items-center gap-2">
  <input
    type="text"
    placeholder="What do you need to do?"
    className="flex-1 bg-white/20 placeholder:text-white/70 text-white px-4 py-2 rounded-lg border border-white/30 focus:ring-2 focus:ring-cyan-300 outline-none"
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
  />
  <button
    type="submit"
    className="bg-[#5dac8c] hover:bg-[#4c7e6f] text-white font-medium px-4 py-2 rounded-lg transition"
  >
    ➕ Add
  </button>
</form>

  );
}

export default TodoForm;