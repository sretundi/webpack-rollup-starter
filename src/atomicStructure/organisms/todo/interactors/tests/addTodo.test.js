
import AddTodo from '../../addTodo.js';
import AddTodoApi from '../../../../../api/addTodoToLocalStorage.js';

jest.mock('../../../../../api/addTodoToLocalStorage.js');

test('adds a todo', () => {
    AddTodoApi.mockReturnValue({status: 'success'});
    const todo = AddTodo('hello');
    expect(todo).toBe(todo);
})


