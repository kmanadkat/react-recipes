import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './featureTodo/slice'

const store = configureStore({
  reducer: {
    todos: todosReducer
  },
})

export default store