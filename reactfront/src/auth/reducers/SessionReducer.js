import { TYPES } from "../types/TYPES";

export const SessionReducer = (state = {}, action) =>{
    switch (action.type) {
        case TYPES.session:
            
            return {
                ...action.payload
            }
    
        default:
           return state
    }
}