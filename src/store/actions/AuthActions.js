import { login,logOut,saveTokenInLocalStorage,register} from "../..//services/AuthService";


export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';


export function registerAction(email, password,navigate){
    return (dispatch)=>{
        register(email, password).then((response)=>{
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
                saveTokenInLocalStorage(response.data.access_token);
                dispatch(loginConfirmedAction(response.data));              
                navigate('/admin/dashboard');
            })
            .catch((error) => {
                console.log(error);
                dispatch(loginFailedAction(error));
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