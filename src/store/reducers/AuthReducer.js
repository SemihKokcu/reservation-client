import {
    CHECK_AUTH_SUCCESS,
    LOADING_TOGGLE_ACTION,
    LOGIN_CONFIRMED_ACTION,
    LOGIN_FAILED_ACTION,
    LOGOUT_ACTION,
    RESET_SUCCESS_MESSAGE,
    SIGNUP_CONFIRMED_ACTION,
    SIGNUP_FAILED_ACTION,
} from '../actions/AuthActions';

const initialState = {
    token:"",
    errorMessage: '',
    successMessage: '',
    showLoading: false,
    status: false,
    role:""
};

export function AuthReducer(state = initialState, action) {
    if (action.type === SIGNUP_CONFIRMED_ACTION) {
        return {
            ...state,
            token: action.payload,
            errorMessage: '',
            successMessage: 'Signup Successfully Please Login',
            showLoading: false,
        };
    }
    if (action.type === LOGIN_CONFIRMED_ACTION) {
        return {
            ...state,
            token: action.payload.access_token,
            errorMessage: '',
            successMessage: 'Login Successfully Completed',
            showLoading: false,
            role:action.payload.role
        };
    }

    if (action.type === LOGOUT_ACTION) {
        return {
            ...state,
            errorMessage: '',
            successMessage: '',
            token:''
        };
    }

    if (
        action.type === SIGNUP_FAILED_ACTION ||
        action.type === LOGIN_FAILED_ACTION
    ) {
        return {
            ...state,
            errorMessage: action.payload,
            successMessage: '',
            showLoading: false,
        };
    }

    if (action.type === LOADING_TOGGLE_ACTION) {
        return {
            ...state,
            showLoading: action.payload,
        };
    }
    if(action.type === RESET_SUCCESS_MESSAGE){
        return {
            ...state,
            successMessage: null }
    }
    if(action.type===CHECK_AUTH_SUCCESS){
        return{
            status:true,
        }
    }

    return state;
}

    
