
  import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
  import {buyCake} from "../redux";
  function HooksCakeContainer() {
    const cake =  useSelector(state => state.cake)
    const dispatch = useDispatch()
      return (
          <div>
              <h1>Number Of Cakes {cake.numOfCakes}</h1>
              <button onClick = {() => dispatch(buyCake())}>Buy Cake</button>
          </div>
      )
  }
  
  export default HooksCakeContainer
  