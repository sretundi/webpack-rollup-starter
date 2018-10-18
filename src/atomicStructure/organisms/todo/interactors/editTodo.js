
import EditTodoInLocalStorage from '../../../../api/editTodoInLocalStorage';

export default function EditTodo(text, index) {
    const response = EditTodoInLocalStorage(text, index);

    return response;
}
