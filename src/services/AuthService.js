import axiosInstance  from './AxiosInstance';
import APIConfig from '../config/api.config';

export function register(firstname,lastname,email,password){
    const postData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    }

    return axiosInstance.post(APIConfig.REGİSTER_SVC,postData);
}

export function login(email, password){
    const postData = {
        email: email,
        password: password
    }

    const resp =  axiosInstance.post(APIConfig.LOGIN_SVC,postData);
    console.log(APIConfig.LOGIN_SVC, resp)
    return resp;
}

export function saveTokenInLocalStorage(tokenDetails) {
    localStorage.setItem('token', JSON.stringify(tokenDetails));
}

export function logOut(){
    localStorage.removeItem('token');
}
