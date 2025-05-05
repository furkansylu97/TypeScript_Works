import React from 'react'
import { useReducer } from 'react';
    
  const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + action.payload };
      case 'decrement':
        return { count: state.count - action.payload };
      case 'reset':
        return initialState;
      default:
        return state;
    }
  }

function ReducerExample() {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Number: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 15 })}>
        15 İncrease
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 15 })}>
        15 Decrease
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}

export default ReducerExample