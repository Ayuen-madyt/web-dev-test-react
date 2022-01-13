import {
    LOADING,
   GETTRIPS,
   FILTERBYDRIVER,
   GETHOTELS,
   GETDRIVERS,
   FILTERBYHOTEL
} from './actions'

const initialState = {
    loading:false,
    Trips: [],
    Drivers:[],
    Hotels:[]
}

export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case LOADING:
            return{
                ...state,
                loading:true
            }
        case GETTRIPS:
            return{
                ...state,
                loading:false,
                Trips:action.payload
            }

        case GETDRIVERS:
            return{
                ...state,
                loading:false,
                Drivers:action.payload
            }

        case GETHOTELS:
            return{
                ...state,
                loading:false,
                Hotels:action.payload
            }

        case FILTERBYDRIVER:
            let tripFilteredbyDriver = state.Trips.find(trip => trip.driver === action.payload)
            if(tripFilteredbyDriver){
                const newTrips = state.Trips.filter(trip => trip.driver == action.payload)
                return {
                    ...state,
                    Trips: newTrips
                }
            }
    
        default:
            return state;
    }
}