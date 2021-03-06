import { createStore } from 'redux';
import dayjs from 'dayjs';

const initData = {
  data: [],
  message: 'Please type message',
  mode: 'default',
  fdata: [],
};

// Reducer

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const FIND = 'FIND';

export const Reducer = (state = initData, action) => {
  switch (action.type) {
    case ADD:
      return addReduce(state, action);
    case DELETE:
      return deleteReduce(state, action);
    case FIND:
      return findReduce(state, action);
    default:
      return state;
  }
};

// Reduce Action

const addReduce = (state, action) => {
  const createdAt = dayjs().format('MM/DD h:mm');
  const data = {
    message: action.message,
    created: createdAt,
  };

  return {
    data: [...state.data, data],
    message: `Added "${data.message}"`,
    mode: 'default',
    fdata: [],
  };
};

const findReduce = (state, action) => {
  let f = action.find;
  let fdata = [];
  state.data.forEach((value) => {
    if (value.message.indexOf(f) >= 0) {
      fdata.push(value);
    }
  });

  return {
    data: state.data,
    message: 'Find "' + f + '"',
    mode: 'find',
    fdata: fdata,
  };
};

const deleteReduce = (state, action) => {
  let _newdata = state.data.slice();
  let newdata = _newdata.filter((x) => x !== _newdata[action.index]);
  return {
    data: newdata,
    message: `Deleted "${action.message}"`,
    mode: 'delete',
    fdata: [],
  };
};

export default createStore(Reducer);
