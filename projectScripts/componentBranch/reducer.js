
import { ACTION_CONTANTS } from './actions.js';

const initialState = {
    exampleData: []
}

const ContainerNameIsReplaced = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CONTANTS.EXAMPLE: 
            return {
                exampleData: action.exampleData
            }
        
        default: return state;
    }
}

export default ContainerNameIsReplaced;