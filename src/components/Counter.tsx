import { useState } from 'react';
import classes from './Counter.module.scss'


const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <span>{counter}</span>
      <button className={classes.btn} onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default Counter
