import axiosInstance  from './AxiosInstance';
import APIConfig from '../config/api.config';


export function getAllDoctors(){

    return axiosInstance.get(APIConfig.GET_ALL_DOCTORS);    

}


