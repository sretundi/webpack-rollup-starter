import React from 'react'; 
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import Main from './main';

class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        )
    }
}

const root = document.querySelector('main');

ReactDOM.render(<Index />, root);
