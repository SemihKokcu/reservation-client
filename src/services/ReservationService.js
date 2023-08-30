import axiosInstance  from './AxiosInstance';
import APIConfig from '../config/api.config';

export function addReservation(doctorId,startTime,confirmed){
    const postData = {
        doctor:{id:doctorId},
        startTime:startTime,
        confirmed: confirmed
    }
    return axiosInstance.post(APIConfig.ADD_RESERVATİON,postData);
}


