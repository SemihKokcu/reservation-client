import { addReservation } from "../../services/ReservationService";

export const RESERVATİON_ADD_CONFİRMED_ACTİON = "RESERVATİON_ADD_CONFİRMED";
export const RESERVATİON_ADD_FAILED_ACTİON = "RESERVATİON_ADD_FAILED";


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

export const confirmedAddReservationAction = (data)=>{
    return {
        type: RESERVATİON_ADD_CONFİRMED_ACTİON,
        payload: data
    }
}
export const failedAddReservationAction = (data)=>{
    return {
        type: RESERVATİON_ADD_FAILED_ACTİON,
        payload: data
    }
}