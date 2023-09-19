import {
   GET_ALL_DOCTORS_CONFIRMED_ACTION,
   GET_ALL_DOCTORS_FAILED_ACTION
   } from "../actions/DoctorActions";
   
   const initialState = {
     doctor: {},
     doctors: [],
     successMessage: "",
     errorMessage: "",
   };
   
   export function DoctorReducer(state = initialState, action) {
     switch (action.type) {
       case GET_ALL_DOCTORS_CONFIRMED_ACTION:
           return {
               ...state,
               successMessage:action.payload.message,
               doctors: action.payload.data
           }
       case GET_ALL_DOCTORS_FAILED_ACTION:
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
   