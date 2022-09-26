import { types } from "../actions/types";
const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {

    switch(action.type){
        case types.INCREMENT_BY_7: {
            const newStateCounter = state.counter + 7;
            return {
                counter: newStateCounter
            };
        }
        case types.INCREMENT_BY_4: {
            const newStateCounter = state.counter + 4;
             return {
                counter: newStateCounter
            };
        }
        case types.INCREMENT_BY_5:{
            const newStateCounter = state.counter + 5;
            return {
                counter: newStateCounter
            };
        }
        
        default:
            return state;
    }
}

export default counterReducer;