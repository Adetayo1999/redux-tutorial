import { FETCH_USERS_FAILURE, FETCH_USERS_REQUESTS, FETCH_USERS_SUCCESS } from "./usersTypes"

const intialUsersState = {
    isLoading:false,
    users:[],
    error:""
}


const userReducer = ( state = intialUsersState , action) => {
       switch(action.type){
           case FETCH_USERS_REQUESTS: 
           return {
               ...intialUsersState,
               isLoading:true
           }


         case FETCH_USERS_SUCCESS:
             return {
                 ...intialUsersState,
                 isLoading:false,
                 users:action.payload,
                 error:""
             }


          case FETCH_USERS_FAILURE :
              return {
                  ...intialUsersState,
                  isLoading:false,
                  users:[],
                  error:action.payload
              }




           default:
               return state;
       }
}



export default userReducer;