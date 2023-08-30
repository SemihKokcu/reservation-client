import {
  RESERVATİON_ADD_CONFİRMED_ACTİON,
  RESERVATİON_ADD_FAILED_ACTİON,
} from "../actions/ReservationActions";

const initialState = {
  reservation: "",
  reservations: [],
  successMessage: "",
  errorMessage: "",
};

export function ReservationReducer(state = initialState, action) {
  switch (action.type) {
    case RESERVATİON_ADD_CONFİRMED_ACTİON:
        return {
            ...state,
            successMessage:action.payload.message,
        }
    case RESERVATİON_ADD_FAILED_ACTİON:
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
