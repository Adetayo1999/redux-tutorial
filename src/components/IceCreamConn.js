

import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {buyIceCream , replaceIceCream } from "../redux";


function IceCreamConn() {
    const { numOfIceCream } = useSelector(state => state.icecream)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Number Of Ice-Creams  {numOfIceCream}</h1>
            <button onClick = {() => dispatch(buyIceCream())}>Buy Ice Cream</button>
            <br />
            <button onClick = {() => dispatch(replaceIceCream())}>Replace Cake</button>
        </div>
    )
}

export default IceCreamConn
