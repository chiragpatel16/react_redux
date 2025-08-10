import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo, updateTodo } from '../features/todoSlice'

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const handleEdit = (todo) => {
    setEditId(todo.id)
    setEditText(todo.text)
  }

  const handleUpdate = (id) => {
    if (editText.trim() !== '') {
      dispatch(updateTodo({ id, newText: editText }))
      setEditId(null)
      setEditText('')
    }
  }

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleUpdate(todo.id)}>Save</button>
           
            </>
          ) : (
            <>
              <span onClick={() => dispatch(toggleTodo(todo.id))}>
                {todo.text}
              </span>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>x</button>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TodoList