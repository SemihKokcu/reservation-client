import { login,logOut,saveTokenInLocalStorage,register, checkAuth} from "../..//services/AuthService";


export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';
export const RESET_SUCCESS_MESSAGE = "RESET_SUCCESS_MESSAGE";
export const CHECK_AUTH_SUCCESS = "CHECK_AUTH_SUCCESS";
export const CHECK_AUTH_ERROR = "CHECK_AUTH_SUCCESS";


export function registerAction(name,email, password,navigate){
    return (dispatch)=>{
        register(name,email, password).then((response)=>{
            dispatch(confirmedRegisterAction)
            navigate("/login")
        })
        .catch((error)=>{
            dispatch(signupFailedAction(error));
        })
    }
}

export function loginAction(email, password,navigate){
        return (dispatch) => {
            login(email, password).then((response) => {
                saveTokenInLocalStorage(response.data);
                dispatch(loginConfirmedAction(response.data));              
                navigate('/admin/dashboard');
            })
            .catch((error) => {
                console.log(error);
                dispatch(loginFailedAction(error));
            })
        }
}

export function checkAuthAction(){
    return (dispatch) => {
        checkAuth().then((response) => {
            dispatch(checkAutSuccess(response.data));
        })
        .catch((error) => {
            dispatch(checkAutFailed());
        })
    }
}

export function logoutAction(navigate){
    logOut();
    navigate("/login");

    return {
        type: LOGOUT_ACTION
    }
}

export function confirmedRegisterAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}
export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}
export const resetSuccessMessage = () => {
    return {
      type: RESET_SUCCESS_MESSAGE,
    };
  };

export const checkAutSuccess = (data)=>{
    return {
        type : CHECK_AUTH_SUCCESS,
        payload: data
    }
}

export const checkAutFailed = (data)=>{
    return {
        type : CHECK_AUTH_ERROR,
        payload: data
    }
}