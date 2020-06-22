import { createStore } from 'redux';

const initData = {
  data: [{ message: 'Studying React, Redux', created: new Date() }],
  message: 'please type message:',
  mode: 'default',
  fdata: [],
};

// Reducer

export const memoReducer = (state = initData, action) => {
  switch (action.type) {
    case 'ADD':
      return addReduce(state, action);
    case 'DELETE':
      return deleteReduce(state, action);
    case 'FIND':
      return findReduce(state, action);
    default:
      return state;
  }
};

// Reduce Action

const addReduce = (state, action) => {
  let data = {
    message: action.message,
    created: new Date(),
  };

  let newdata = state.data.slice();
  newdata.unshift(data);

  return {
    data: newdata,
    message: 'Added!',
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
    message: 'find "' + f + '":',
    mode: 'find',
    fdata: fdata,
  };
};

const deleteReduce = (state, action) => {
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);
  return {
    data: newdata,
    message: 'delete "' + action.index + '":',
    mode: 'delete',
    fdata: [],
  };
};

// Action Creater

export const addMemo = (text) => {
  return {
    type: 'ADD',
    message: text,
  };
};

export const deleteMemo = (num) => {
  return {
    type: 'DELETE',
    index: num,
  };
};

export const findMemo = (text) => {
  return {
    type: 'FIND',
    find: text,
  };
};

export default createStore(memoReducer);
