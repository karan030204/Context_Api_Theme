import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decNumber, incNumber } from '../actions'


//You will only have one centralized store in redux for all the states management which are there in the application 
//You will only have one rootReducer you can create multiple reducers( how to do ) but you can store the single root reducer only in the store
const Redux_lesson = () => {
    const myState =  useSelector((state)=>state.changeTheNumber)
    const disPatch = useDispatch()
  return (
    <>
    <div className='redux-wrapper'>
        <h1 className=''>Increment Decrement Counter</h1>
        <div className='redux-subtitle'>using React and Redux</div>
        <div>
            <button onClick={()=>disPatch(decNumber(5))}>-</button>
            <span>{myState}</span>
            <button onClick={()=>disPatch(incNumber(5))}>+</button>
        </div>
    </div>
    </>
  )
}

export default Redux_lesson