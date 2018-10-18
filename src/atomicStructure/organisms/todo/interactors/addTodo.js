
import AddTodoApi from '../../../../api/addTodoToLocalStorage.js';

export default function AddTodo(todo) {
    const response = AddTodoApi(todo);
    if(response.status === 'success') {
        return todo;
    } else {
        console.error('interactor error');
        return 'fail';
    }
}

