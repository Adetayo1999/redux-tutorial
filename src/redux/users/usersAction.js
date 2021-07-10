import { FETCH_USERS_FAILURE, FETCH_USERS_REQUESTS, FETCH_USERS_SUCCESS } from "./usersTypes";
import axios from "axios";


export const fetchRequest = () =>  {
    return {
        type: FETCH_USERS_REQUESTS
    }
}

export const fetchSuccess = (users) => {
   return {
      type:FETCH_USERS_SUCCESS,
      payload:users
   }
}


export const fetchFailure = error => {
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}


export const fetchUsers = () => (dispatch) => {
        dispatch(fetchRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
               const users = response.data
               dispatch(fetchSuccess(users))
        })
        .catch(error =>{
            dispatch(fetchFailure(error.message));
        })
}