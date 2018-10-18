

import AddTodo from '../interactors/addTodo.js';
import RemoveTodo from '../interactors/removeTodo.js';
import EditTodo from '../interactors/editTodo.js';

export const ACTION_CONTANTS = {
    ADD_TODO: 'ADD_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    EDIT_TODO: 'EDIT_TODO'
}

const addTodo = (todo) => {
    return {
        type: ACTION_CONTANTS.ADD_TODO,
        todo: AddTodo(todo),
    }
}

const removeTodo = (index) => {
    return {
        type: ACTION_CONTANTS.REMOVE_TODO,
        todoList: RemoveTodo(index) 
    }
}

const editTodo = (text, index) => {
    return {
        type: ACTION_CONTANTS.EDIT_TODO,
        todoList: EditTodo(text, index)
    }
}

export default { addTodo, removeTodo, editTodo };

