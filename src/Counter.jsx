import React, { useReducer, useState } from 'react'
import './Count.css'



const initialState = 0;

///Pure Function -- Pure means it does not give any side effects it simply returns the same value whatever arguments passed into it if you enter 5 + 5 it will always return 10 as answer that way
//Action -- Method --> Action method jo hame perform krna hai ki jab Increment pe click kare to + hona chahiye and Decrement pe click kare toh minus hona chahiye these are the two actions we need to perform 
//type property : Write in Capital Letters only
const reducer = (state, action) => {
    if(action.type === " "){
        state = state + 1
    }else if(action.type === "DECREMENT"){
        state = state - 1
    }
    console.log(state,action.type);
    return state;
}

const Counter = () => {
    // const [count,setCount] = useState(0)
    //Whenever we have to handle multiple states in our application then rather than using the useState hook for every states we can use useReducer hooks

    //Work of dispatch is to trigger the action method that when user clicks on the increment than it needs to do some action like increment the counter 
    const [state, dispatch] = useReducer(reducer, initialState);
    
  return (
    <>
        <div className='counter'>
            <div className='count-show'>{state}</div>
            <div className='plus'>
                <button onClick={()=>dispatch({type : "INCREMENT"})}>Increment (+)</button>
            </div>
            <div>
                <button onClick={()=>dispatch({type : "DECREMENT"})}>Decrement (-)</button>
            </div>
        </div>
    </>
  )
}

export default Counter