import { createAsyncThunk } from "@reduxjs/toolkit"

// Thunked Fetch
export const fetchTodo = createAsyncThunk('todos/fetch', async (todoId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
  if (response.status === 200) {
    return await response.json()
  }
  throw new Error('Todo not found')
})