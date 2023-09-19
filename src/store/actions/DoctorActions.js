import { getAllDoctors } from "../../services/DoctorService";

export const GET_ALL_DOCTORS_CONFIRMED_ACTION = "GET_ALL_DOCTORS_CONFIRMED_ACTION";
export const GET_ALL_DOCTORS_FAILED_ACTION = "GET_ALL_DOCTORS_FAILED_ACTION";


export function getAllDoctorsAction(){
    return (dispatch) => {
        getAllDoctors().then((response)=>{
            console.log(response);
            dispatch(confirmedGetAllDoctorsAction(response.data));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(failedGetAllDoctorsAction(error.message));

        })
    }
}


export const confirmedGetAllDoctorsAction = (data)=>{
    return {
        type: GET_ALL_DOCTORS_CONFIRMED_ACTION,
        payload: data
    }
}

export const failedGetAllDoctorsAction = (data)=>{
    return {
        type: GET_ALL_DOCTORS_FAILED_ACTION,
        payload: data
    }
}

