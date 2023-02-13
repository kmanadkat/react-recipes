import { createLogger } from 'redux-logger'

export const timeLogger = (store) => (next) => (action) => {
  console.log(`${action.type}: ${new Date()}`)
  next(action)
};

export const logger = createLogger()