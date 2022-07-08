import axios from 'axios'

const SET_TODO = 'SET_TODO';

const setTodo = (todo) => {
  return {
    type: SET_TODO,
    todo
  }
}

export const fetchTodo = (id) => {
  return async (dispatch) => {
    const {data:todo} = await axios.get(`/api/todos/${id}`)
    dispatch(setTodo(todo))
  }
}

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TODO:
      return action.todo;
    default:
      return state;
  }
};
