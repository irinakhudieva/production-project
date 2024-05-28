import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {

    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <button data-testid="increment-btn" onClick={increment}>Increment</button>
            <button data-testid="decrement-btn" onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter
