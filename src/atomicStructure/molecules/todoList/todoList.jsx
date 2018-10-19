
import React from 'react';

import RadioInput from '../../atoms/inputs/radioInput.jsx';
import ButtonCommon from '../../atoms/buttons/buttonCommon.jsx';
import TextInput from '../../atoms/inputs/textInput.jsx';

import styles from './todoList.css';

// todo fix class name prefixing to match new convention
// todo rename to something generic as this could be reused?

const isAnEditableItem = (isEditing, itemIndex, selectedIndex) => {
    return (itemIndex === selectedIndex && isEditing)
}

const mapListItems = (props) => {
    return props.items.map((item, index) => {
        return (
            <li
                key={`todoListItem-${index}`}
                className={styles.listItemContainer}
            >
                <RadioInput />
                <TextInput 
                    value={(isAnEditableItem(props.editableItem.isEditing, index, props.editableItem.index)) 
                        ? props.editedInput : item} 
                    onChange={props.onInputChange}
                    className={isAnEditableItem(props.editableItem.isEditing, index, props.editableItem.index) 
                        ? '' : `${styles['b-textInput--removeBorder']} ${styles['b-textInput--removeOutline']}`}
                />

                <div 
                    className={styles.listItemButtonContainer} 
                >
                    <ButtonCommon
                        buttonLabel={isAnEditableItem(props.editableItem.isEditing, index, props.editableItem.index) ? 'Save' : 'Edit'}
                        onClick={isAnEditableItem(props.editableItem.isEditing, index, props.editableItem.index) 
                            ? props.saveEditedChanges : () => props.editButtonOnClick(item, index)}
                    />
                    <ButtonCommon
                        onClick={() => props.deleteButtonOnClick(index)}
                        buttonLabel='delete'
                        className={styles.listItemDeleteBtn}
                    />
                </div>
            </li>
        )
    })
}

export default function TodoList(props) {
    return (
        <ul className={styles.dualButtonListContainer}>
            {mapListItems(props)}
        </ul>
    )
}

export { mapListItems }

