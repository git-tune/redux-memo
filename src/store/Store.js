import { createStore } from 'redux';

const initData = {
  data: [],
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
  let d = new Date();
  let f =
    d.getMonth() +
    1 +
    '/' +
    d.getDate() +
    ' ' +
    d.getHours() +
    ':' +
    d.getMinutes();

  let data = {
    message: action.message,
    created: f,
  };

  let _newdata = state.data.slice();
  let newdata = [..._newdata, data];

  return {
    data: newdata,
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
    message: 'find "' + f + '":',
    mode: 'find',
    fdata: fdata,
  };
};

const deleteReduce = (state, action) => {
  let _newdata = state.data.slice();
  let newdata = _newdata.filter((x) => x !== _newdata[action.index]);
  return {
    data: newdata,
    message: `deleted "${action.message}"`,
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

export const deleteMemo = (text, num) => {
  return {
    type: 'DELETE',
    message: text,
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
