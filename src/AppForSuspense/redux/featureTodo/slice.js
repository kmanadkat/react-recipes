import { createSlice } from "@reduxjs/toolkit";
import { fetchTodo } from "./service";

const initialState = {
  todos: [],
  data: null,
  loading: false,
  loaded: false,
  error: ''
}

// Slice
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state) => {
      if (state.data) {
        state.todos = [state.data, ...state.todos]
      }
    },
    remove: (state, action) => {
      const todoId = action.payload
      state.todos = state.todos.filter(todo => todo.id !== todoId)
    },
    update: (state, action) => {
      const { id, status } = action.payload
      state.todos = state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: status }
        }
        return { ...todo }
      })
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true
        state.loaded = false
        state.data = null
        state.error = ''
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.loading = false
        state.loaded = true
        state.data = action.payload
        state.error = ''
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.loading = false
        state.loaded = true
        state.data = null
        state.error = action.error.message
      })
  }
})

// Actions
export const { add, remove, update } = todosSlice.actions

// Reducer
export default todosSlice.reducer

