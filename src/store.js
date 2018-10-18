
import { createStore } from 'redux';

import todoOrganismReducer from './atomicStructure/organisms/todo/redux/reducers.js';

const store = createStore(todoOrganismReducer);

export default store;




