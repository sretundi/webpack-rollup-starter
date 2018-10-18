
import ApiConstants from './constants.js';

export default function(index) {
    let todos = JSON.parse(localStorage.getItem(ApiConstants().localStorageKeys.TODOS));

    todos.splice(index, 1);

    localStorage.setItem(ApiConstants().localStorageKeys.TODOS, JSON.stringify(todos));

    return todos;
}
