
import ApiConstants from './constants.js';

export default function GetTodosFromLocalStorage() {
    const todos = JSON.parse(localStorage.getItem(ApiConstants().localStorageKeys.TODOS));

    if(!todos) {
        return [];
    }

    return todos;
}
