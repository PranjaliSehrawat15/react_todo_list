import { useState ,useEffect} from 'react'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos ,setTodos]= useState([])

  const addTodo = (todo)=> {
    setTodos((prev) => [{id: Date.now(),...todo},...prev])
}

  const updateTodo =(id,todo) =>{
    setTodos((prev)=>prev.map((prevTodo) => (prevTodo.id 
      ===id ? todo : prevTodo)))
  }
  const deleteTodo =(id) => {
    setTodos((prev) =>prev.filter((todo)=> todo.id!==id))
  }

  const toggleComplete=(id) =>{
    setTodos((prev) => 
      prev.map((prevTodo)=>prevTodo.id===
  id ? {...prevTodo, completed:!prevTodo.completed}: prevTodo))
  }
  useEffect(() => {
   const todos =JSON.parse(localStorage.getItem("todos"))

   if (todos && todos.length >0) {
    setTodos(todos)
   }
  }, [])

  useEffect(() =>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  


  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
<div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen py-10 px-4 font-sans">
  <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md shadow-lg rounded-2xl px-6 py-8 text-white">
    <h1 className="text-3xl font-bold text-center mb-8">🎯 Manage Your Todos</h1>
    <div className="mb-6">
      <TodoForm />
    </div>
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  </div>
</div>

    </TodoProvider>
  )
}

export default App
