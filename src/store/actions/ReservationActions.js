import { addReservation, getallReservationsByUser } from "../../services/ReservationService";

export const RESERVATION_ADD_CONFIRMED_ACTION = "RESERVATİON_ADD_CONFİRMED";
export const RESERVATION_ADD_FAILED_ACTION = "RESERVATİON_ADD_FAILED";
export const RESERVATION_GET_ALL_BY_USER_CONFIRMED_ACTION = "RESERVATION_GET_ALL_BY_USER_CONFIRMED";
export const RESERVATION_GET_ALL_BY_USER_FAILED_ACTION = "RESERVATION_GET_ALL_BY_USER_FAILED";


export function addReservationAction(doctorId,startTime,confirmed){
    return (dispatch)=>{
        addReservation(doctorId,startTime,confirmed).then((response=>{
            console.log(response);
            dispatch(confirmedAddReservationAction(response.data))
        }))
        .catch((error)=>{
            console.log(error);
            dispatch(failedAddReservationAction(error.message))
        })
    }
}

export function getallReservationsByUserAction(){
    return (dispatch) => {
        getallReservationsByUser().then((response)=>{
            console.log(response);
            dispatch(confirmedGetAllReservationsByUserAction(response.data));
        })
        .catch((error)=>{
            console.log(error);
            dispatch(failedGetAllReservationsByUserAction(error.message));

        })
    }
}





export const confirmedGetAllReservationsByUserAction = (data)=>{
    return {
        type: RESERVATION_GET_ALL_BY_USER_CONFIRMED_ACTION,
        payload: data
    }
}

export const failedGetAllReservationsByUserAction = (data)=>{
    return {
        type: RESERVATION_GET_ALL_BY_USER_FAILED_ACTION,
        payload: data
    }
}


export const confirmedAddReservationAction = (data)=>{
    return {
        type: RESERVATION_ADD_CONFIRMED_ACTION,
        payload: data
    }
}
export const failedAddReservationAction = (data)=>{
    return {
        type: RESERVATION_ADD_FAILED_ACTION,
        payload: data
    }
}