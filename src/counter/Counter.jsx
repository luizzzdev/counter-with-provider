import React, { useContext } from 'react'
import { CounterContext } from './context'

function Counter(props) {
  const { 
    count,
    addAmountQuantity,
    addCounter,
    subCounter
  } = useContext(CounterContext)

  return (
  <div>
    <h1>{count}</h1>

    <div>
      <button onClick={addCounter}>Add</button>
      <button onClick={subCounter}>Subtract</button>
    </div>

    <div>
      <button onClick={addAmountQuantity}>Add amount added</button>
    </div>
  </div>
  )
}

export default Counter