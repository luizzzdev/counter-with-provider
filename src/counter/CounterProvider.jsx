import React, { useState } from 'react'
import { Provider } from './context'

function CounterProvider({ children }) {
  const [state, setState] = useState({
    addAmount: 1,
    count: 0
  })
  
  const addAmountQuantity = () => {
    setState(prevState => ({
      ...prevState,
      addAmount: prevState.addAmount + 1
    }))
  }

  const addCounter = () => {
    setState(prevState => ({
      ...prevState,
      count: prevState.count + prevState.addAmount
    }))
  }

  const subCounter = () => {
    setState(prevState => ({
      ...prevState,
      count: prevState.count - prevState.addAmount
    }))
  }

  
  const value = {
    addAmount: state.addAmount,
    count: state.count,
    addAmountQuantity,
    addCounter,
    subCounter
  }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export default CounterProvider