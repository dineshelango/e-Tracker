/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:45:56+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T12:06:56+05:30
 */
import config from '../config';
import {
  REQUEST_ALL_TASKS,
  RESPONSE_ALL_TASKS,
  REQUEST_ADD_TASK,
  RESPONSE_ADD_TASK,
  REQUEST_UPDATE_TASK,
  RESPONSE_UPDATE_TASK,
  REQUEST_DELETE_TASK,
  RESPONSE_DELETE_TASK,
} from '../actions/types';

const initialState = { ...config.tasks };
export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_ALL_TASKS:
      return { ...state, isFetching: true };
    case RESPONSE_ALL_TASKS:
      return { ...state, isFetching: false, lists: [...action.payload] };
    case REQUEST_ADD_TASK:
      return { ...state, isAdding: true };
    case RESPONSE_ADD_TASK:
      return { ...state, isAdding: false, lists: [...state.lists, action.payload] };
    case REQUEST_UPDATE_TASK:
      return { ...state, isUpdating: true };
    case RESPONSE_UPDATE_TASK:
      return { ...state, isUpdating: false };
    case REQUEST_DELETE_TASK:
      return { ...state, isDeleting: true };
    case RESPONSE_DELETE_TASK:
      return { ...state, isDeleting: false };
    default: return state;
  }
}
