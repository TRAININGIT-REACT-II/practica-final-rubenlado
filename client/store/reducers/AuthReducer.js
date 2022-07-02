import {
    SIGNUP_CONFIRMED_ACTION,
    LOGIN_CONFIRMED_ACTION,
    LOGOUT_ACTION
} from '../actions/AuthActions';

const initialState = {
    id: "",
    username: "",
    token: localStorage.getItem('userToken') || '',
    isAuth: localStorage.getItem('userToken') ? true : false , 
};

export function AuthReducer(state = initialState, action) {
    
    if (action.type === SIGNUP_CONFIRMED_ACTION) {
        console.log("a")
        return {
            ...state,
            id: action.payload.id,
            username: action.payload.username,
            token: action.payload.token
        };
    }

    if (action.type === LOGIN_CONFIRMED_ACTION) {
        console.log("e")
        return {
            ...state,
            id: action.payload.id,
            username: action.payload.username,
            token: action.payload.token,
            isAuth: action.payload.token ? true : false , 
        };
    }

    if (action.type === LOGOUT_ACTION) {
        console.log('i')
        return {
            ...state,
            id: "",
            username: "",
            token: "",
            isAuth: false , 
        };
    }

    return state;
}