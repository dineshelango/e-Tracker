/**
 * @Author: GVEDAS
 * @Date:   2017-12-23T16:59:00+05:30
 * @Email:  gvedas@gvedas.com
 * @Last modified by:   GVEDAS
 * @Last modified time: 2017-12-27T12:25:13+05:30
 */
import {
  REQUEST_ALL_TASKS,
  RESPONSE_ALL_TASKS,
  REQUEST_ADD_TASK,
  RESPONSE_ADD_TASK,
  REQUEST_UPDATE_TASK,
  RESPONSE_UPDATE_TASK,
  REQUEST_DELETE_TASK,
  RESPONSE_DELETE_TASK,
} from './types';
import settings from '../config/api';

export const requestFetchAllTasks = () => {
  return {
    type: REQUEST_ALL_TASKS,
    payload: true,
  };
};

export const responseFetchAllTasks = (tasks) => {
  return {
    type: RESPONSE_ALL_TASKS,
    payload: tasks,
  };
};

export const requestAddTask = () => {
  return {
    type: REQUEST_ADD_TASK,
    payload: true,
  };
};

export const responseAddTask = (task) => {
  return {
    type: RESPONSE_ADD_TASK,
    payload: task,
  };
};

export const requestUpdateTask = () => {
  return {
    type: REQUEST_UPDATE_TASK,
    payload: true,
  };
};

export const responseUpdateTask = () => {
  return {
    type: RESPONSE_UPDATE_TASK,
    payload: false,
  };
};

export const requestDeleteTask = () => {
  return {
    type: REQUEST_DELETE_TASK,
    payload: true,
  };
};

export const responseDeleteTask = () => {
  return {
    type: RESPONSE_DELETE_TASK,
    payload: false,
  };
};

export function addTask(data) {
  return (dispatch, getState) => {
    dispatch(requestAddTask());
    return fetch(settings.url, {
      ...settings,
      body: JSON.stringify({ name: data }),
    })
      .then(response => response.json())
      .then((json) => {
        dispatch(responseAddTask(json));
      });
  }
}

export function fetchAllTasks(data) {
  return (dispatch, getState) => {
    dispatch(requestFetchAllTasks());
    return fetch(settings.url, {
      ...settings,
      method: 'GET',
    })
      .then(response => response.json())
      .then((json) => {
        dispatch(responseFetchAllTasks(json));
      });
  }
}
