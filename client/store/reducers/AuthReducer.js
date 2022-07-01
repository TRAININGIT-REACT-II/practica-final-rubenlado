import {
    SIGNUP_CONFIRMED_ACTION,
    LOGIN_CONFIRMED_ACTION,
    LOGOUT_ACTION
} from '../actions/AuthActions';

const initialState = {
    id: "",
    username: "",
    token: "", 
};

export function AuthReducer(state = initialState, action) {
    if (action.type === SIGNUP_CONFIRMED_ACTION) {
        return {
            ...state,
            id: action.payload.id,
            username: action.payload.username,
            token: action.payload.token
        };
    }

    if (action.type === LOGIN_CONFIRMED_ACTION) {
        return {
            ...state,
            id: action.payload.id,
            username: action.payload.username,
            token: action.payload.token
        };
    }


    if (action.type === LOGOUT_ACTION) {
        return {
            ...state,
            id: "",
            username: "",
            token: ""
        };
    }

    return state;
}