import axiosInstance  from './AxiosInstance';
import APIConfig from '../config/api.config';

export function register(name,email,password){
    const postData = {
        name: name,
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

export function checkAuth(){

    return axiosInstance.post(APIConfig.CHECK_AUTH_SVC,localStorage.getItem('token'));
}

export function saveTokenInLocalStorage(tokenDetails) {
    localStorage.setItem('token', JSON.stringify(tokenDetails.access_token));
    localStorage.setItem('role', JSON.stringify(tokenDetails.role));
}

export function logOut(){
    localStorage.removeItem('token');
}
