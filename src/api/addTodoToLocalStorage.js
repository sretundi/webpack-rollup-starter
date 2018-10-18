
import ApiConstants from './constants.js';

// refactor to remove the get
export default function(todo) {
    let todos = JSON.parse(localStorage.getItem(ApiConstants().localStorageKeys.TODOS));

    if(todos) {
        todos.push(todo);
    } else {
        todos = [todo];
    }

    localStorage.setItem(ApiConstants().localStorageKeys.TODOS, JSON.stringify(todos));

    return {
        status: 'success'
    };
}

