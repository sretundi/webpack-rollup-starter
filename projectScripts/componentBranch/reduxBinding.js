import { bindActionCreators } from 'redux';

import exampleActions from './actions.js';

export const mapStateToProps = state => ({
    exampleData: state.exampleData
});

export const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(exampleActions, dispatch)
    }
}
      
