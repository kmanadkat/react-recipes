import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './featureTodo/slice'
import { logger, timeLogger } from './middleware'

const store = configureStore({
  reducer: {
    todos: todosReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(timeLogger)
    .concat(logger)
})

export default store