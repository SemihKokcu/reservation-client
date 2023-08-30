import {combineReducers} from 'redux';
import { AuthReducer } from './AuthReducer';
import { ReservationReducer } from './ReservationReducer';


const rootReducers = combineReducers({
    auth: AuthReducer,	
    reservation:ReservationReducer
});

export default rootReducers;