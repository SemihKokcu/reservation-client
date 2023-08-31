import {
 RESERVATION_ADD_CONFIRMED_ACTION,
 RESERVATION_ADD_FAILED_ACTION,
 RESERVATION_GET_ALL_BY_USER_CONFIRMED_ACTION,
 RESERVATION_GET_ALL_BY_USER_FAILED_ACTION
} from "../actions/ReservationActions";

const initialState = {
  reservation: "",
  reservations: [],
  successMessage: "",
  errorMessage: "",
};

export function ReservationReducer(state = initialState, action) {
  switch (action.type) {
    case RESERVATION_ADD_CONFIRMED_ACTION:
        return {
            ...state,
            successMessage:action.payload.message,
        }
    case RESERVATION_ADD_FAILED_ACTION:
        return {
            ...state,
            errorMessage:action.payload.message,
        }
    
        default:
            return {
                ...state
            }
  }
}
