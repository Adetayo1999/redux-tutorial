import { BUY_CAKE } from "./cakeType"

const intialCakeState = {
    numOfCakes:20
}


export const cakeReducer = (state = intialCakeState , action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                numOfCakes:state.numOfCakes - 1
            }

            default:
                return state
    }
}