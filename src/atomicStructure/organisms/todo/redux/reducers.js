
import { ACTION_CONTANTS } from './actions.js';

import GetTodos from '../interactors/getTodos';

const initialState = {
    todoList: GetTodos(),
}

const todoOrganismReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONTANTS.ADD_TODO: 
        // remove logic
            return {
                todoList: state.todoList.concat(action.todo),
            }

        case ACTION_CONTANTS.REMOVE_TODO: 
            return {
                todoList: [...action.todoList],
            }

        case ACTION_CONTANTS.EDIT_TODO: 
            return {
                todoList: action.todoList
            }

        default: return state;
    }
}

export default todoOrganismReducer;


