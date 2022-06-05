import { TYPES } from "../types/TYPES";

export const authReducer = (state = {}, action)=>{
    switch(action.type){
        case TYPES.login: 
        return{
            ...action.payload,
            logged:true
        }

        case TYPES.logout:
            return {
                logged:false
            }
            
    
        default:
            return state
    }
}