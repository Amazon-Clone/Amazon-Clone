import {GET_CART} from '../actions/getCart';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE , action) {
    switch(action.type) {
        case `${GET_CART}_FULFILLED`:
            return {...state, all: action.payload.data};
        default: 
            return state;
    }
}