import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addTodo: ['text'],
  toogleTodo: ['id'],
  removeTodo: ['id'],
});

const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => {
  return [
    ...state,
    { id: Math.random(), text: action.text, complete: false }
  ];
}

const toogle = (state = INITIAL_STATE, action) => {
  return state.map(todo =>
    todo.id === action.id
      ? { ...todo, complete: !todo.complete }
      : todo
  );
}

const remove = (state = INITIAL_STATE, action) => {
  return state.filter(todo => todo.id !== action.id);
}

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: add,
  [Types.TOOGLE_TODO]: toogle,
  [Types.REMOVE_TODO]: remove,
});