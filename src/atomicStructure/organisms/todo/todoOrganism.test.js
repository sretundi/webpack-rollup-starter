
import React from 'react';
import Renderer from 'react-test-renderer';

import { TodoOrganism } from './todoOrganism.jsx';
import { mapDispatchToProps } from './redux/todoReduxBindings.js';

jest.mock('../../molecules/userInputs/horizontaluserInput.jsx', () => 'UserInputs');
jest.mock('../../molecules/todoList/todoList.jsx', () => 'todoList');

it('Todo organism renders correctly', () => {
    const tree = Renderer
        .create(
            <TodoOrganism 
                {...mapDispatchToProps()}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});