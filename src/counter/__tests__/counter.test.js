import React from 'react'
import CounterProvider from "../CounterProvider"
import Counter from "../Counter"
import { render, wait, fireEvent } from '@testing-library/react'

const setup = () => {
  const rendered = render(
    <CounterProvider>
      <Counter/>
    </CounterProvider>
  )

  return rendered
}


describe('Counter', () => {
  let wrapper


  const getAddButton = () => wrapper.getByText(/^add$/i) 
  const getSubtractButton = () => wrapper.getByText(/^subtract$/i)
  const getAddAmountAddedButton = () => wrapper.getByText(/add amount added/i)

  it('add and subtract', async () => {
    wrapper = setup()
    wrapper.getByText('0')
    fireEvent.click(getAddButton())
    await wait(() => wrapper.getByText('1'))
    fireEvent.click(getSubtractButton())
    await wait(() => wrapper.getByText('0'))
    fireEvent.click(getAddAmountAddedButton())
    fireEvent.click(getAddAmountAddedButton())
    fireEvent.click(getAddAmountAddedButton())
    fireEvent.click(getAddButton())
    await wait(() => wrapper.getByText('4'))
  })
})