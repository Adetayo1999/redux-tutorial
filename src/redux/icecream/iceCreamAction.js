import { BUY_ICECREAM, REPLACE_ICECREAM } from "./iceCreamTypes"



export const buyIceCream = () => {
    return {
        type:BUY_ICECREAM
    }
}


export const replaceIceCream  = () => {
    return {
        type:REPLACE_ICECREAM
    }
}