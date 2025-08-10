import AddTodo from './assets/components/AddTodo'
import TodoList from './assets/components/TodoList'
import './App.css'

function App(){
  return (
    <div className="App">
      <h2>📝 Todo List</h2>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App