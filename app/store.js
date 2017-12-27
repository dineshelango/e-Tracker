/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:45:16+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T10:36:09+05:30
 */
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

const loggerMiddleware = createLogger();

const configureStore = (preloadedState) => {
  return createStore(
    reducers,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
const store = configureStore();
export default store;
