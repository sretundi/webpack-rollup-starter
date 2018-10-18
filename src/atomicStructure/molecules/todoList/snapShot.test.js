
import React from 'react';
import Renderer from 'react-test-renderer';

import TodoList from './todoList.jsx';

// with mocks in place in renders child components as react components
// without the mocks it renders the html elements within the child components
// jest.mock('../../atoms/inputs/radioInput.jsx', () => 'Radio Input');
// jest.mock('../../atoms/inputs/textInput.jsx', () => 'text input');
// jest.mock('../../atoms/buttons/buttonCommon.jsx', () => 'button common');

it('renders todo list correctly', () => {
    const tree = Renderer
        .create(
            <TodoList
                items={[1, 2]}
                editableItem={{isEditing: false}}
            />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
