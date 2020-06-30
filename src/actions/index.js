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
