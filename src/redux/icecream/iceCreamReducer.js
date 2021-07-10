import {BUY_ICECREAM, REPLACE_ICECREAM} from "./iceCreamTypes";

const initialIceCreamState = {
    numOfIceCream:15
}


const iceCreamReducer = (state = initialIceCreamState , action) => {
        switch(action.type){
            case BUY_ICECREAM :
                return {
                    ...initialIceCreamState,
                    numOfIceCream: state.numOfIceCream - 1
                }

                case REPLACE_ICECREAM :
                    return {
                        ...initialIceCreamState,
                        numOfIceCream: state.numOfIceCream + 1
                    }

                default:
                    return state
        }
}



export default iceCreamReducer;