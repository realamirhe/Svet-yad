import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '.'

test('renders learn react link', () => {
  render(<Home />)
  const home = screen.getByTestId('home')
  expect(home).toBeInTheDocument()
  expect(home).toHaveClass('app')
})
