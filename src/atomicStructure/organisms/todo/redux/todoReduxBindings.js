
import { bindActionCreators } from 'redux';

import todoActions from './actions.js';

export const mapStateToProps = state => ({
    todoList: state.todoList
});

export const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}
      
