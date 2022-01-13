import axios from 'axios'

export const GETTRIPS = "GETTRIPS"
export const GETDRIVERS = "GETDRIVERS"
export const GETHOTELS = "GETHOTELS"
export const LOADING = "LOADING"
export const FILTERBYHOTEL = "FILTERBYHOTEL"
export const FILTERBYDRIVER = "FILTERBYDRIVER"


// action for fetching articles
export const getArticles = (articles)=>{
    return{
        type: GETTRIPS,
        payload: articles
    }
}

export const getHotels = (id)=>{
    return{
        type: GETHOTELS,
        payload: id
    }
}

export const getDrivers = (id)=>{
    return{
        type: GETDRIVERS,
        payload: id
    }
}

export const loading = ()=>{
    return{
        type:LOADING,
    }
}

export const geyByDriver = ()=>{
    return{
        type: FILTERBYDRIVER,
    }
}

export const getByHotel = ()=>{
    return{
        type: FILTERBYHOTEL,
    }
}


export const fetchDrivers = ()=>(dispatch)=>{
    dispatch(loading());
   return axios.get('http://127.0.0.1:8000/drivers/')
   .then(res=>{
       dispatch(getDrivers(res.data))
   })
}

export const fetchHotels = ()=>(dispatch)=>{
    dispatch(loading());
   return axios.get('http://127.0.0.1:8000/hotels/')
   .then(res=>{
       dispatch(getHotels(res.data))
   })
}


// this function is an action which will be dispatched---
// to the store in app.js inside useEffect http://127.0.0.1:8000
export const fetchData = ()=>(dispatch)=>{
    dispatch(loading());
   return axios.get('http://127.0.0.1:8000')
   .then(res=>{
       dispatch(getArticles(res.data))
   })
}