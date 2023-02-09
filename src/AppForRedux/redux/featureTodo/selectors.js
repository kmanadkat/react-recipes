// Selectors
export const selectAllTodos = state => state.todos
export const selectFetchedTodo = state => {
  const { todos, ...rest } = state.todos
  return rest
}