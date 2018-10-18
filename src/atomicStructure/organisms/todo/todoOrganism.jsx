import React from 'react';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from './redux/todoReduxBindings.js';

import styles from './styles/todoOrganism.css';

import HorizontalUserInput from '../../molecules/userInputs/horizontaluserInput.jsx';
import TodoList from '../../molecules/todoList/todoList.jsx'

class TodoOrganism extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editableItem: {
                index: null,
                isEditing: false
            },
            inputText: '',
            editedText: '',
        }
    }

    onEditTodo(text, index) {
        this.setState((prevState, props) => {
            return {
                editableItem: {
                    index,
                    isEditing: true
                },
                editedText: text
            }
        })
    }

    inputOnChange(text) {
        this.setState({
            inputText: text
        })
    }
    
    submitTodo() {
        this.props.actions.addTodo(this.state.inputText);
        this.setState({
            inputText: '',
        })
    }

    editInputChange(text) {
        this.setState({
            editedText: text,
        })
    }

    onSubmitEdit() {
        this.setState(
            {
                editableItem: { 
                    index: this.state.editableItem.index,
                    isEditing: false 
                }
            }, 
            () => this.props.actions.editTodo(this.state.editedText, this.state.editableItem.index)
        )
    }

    render() {
        return (
            <div
                className={styles.todoOrganism}
            >
                <HorizontalUserInput 
                    onClick={this.submitTodo.bind(this)} 
                    onChange={this.inputOnChange.bind(this)}
                    value={this.state.inputText}
                    buttonLabel='Submit'
                />
                <TodoList
                    deleteButtonOnClick={this.props.actions.removeTodo}
                    editButtonOnClick={this.onEditTodo.bind(this)}
                    items={this.props.todoList} 
                    editableItem={this.state.editableItem}
                    onInputChange={this.editInputChange.bind(this)}
                    editedInput={this.state.editedText}
                    saveEditedChanges={this.onSubmitEdit.bind(this)}
                />

            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoOrganism);
export {TodoOrganism}
