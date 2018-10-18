
import ApiContants from './constants';
import GetTodosFromLocalStorage from './getTodosFromLocalStorage';

export default function EditTodosInLocalStorage(text, index) {
    const todos = GetTodosFromLocalStorage();

    if(todos) {
        todos[index] = text;
    }

    localStorage.setItem(ApiContants().localStorageKeys.TODOS, JSON.stringify(todos));

    return todos
}


