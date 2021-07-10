

import React from 'react'
import { connect } from 'react-redux'
import {buyCake} from "../redux"

function CakeContainer({state , buyCake}) {
    const {cake} = state;
    return (
        <div>
            <h1>Number Of Cakes {cake.numOfCakes}</h1>

            <button onClick = {buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       state
    }
} 

const mapDispatchToProps = dispatch => {
    return{
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)
