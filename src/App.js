import React from 'react'
import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement } from './Redux/counterAction'



function Counter() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  return (
    <div className='counter-app'>
      <h1>Counter App</h1>
      <div className='counter'>
        <button className='increment' onClick={() => dispatch(Increment())}>Increment</button>
        <span>{counter}</span>
        <button className='decrement' onClick={() => dispatch(Decrement())}>Decrement</button>

      </div>

    </div>
  )
}

export default Counter