import { render, screen } from '@testing-library/react'
import Home from '.'

describe('renders Home page', () => {
  render(<Home />)
  const home = screen.getByTestId('home')
  test('[app] must be in the document', () => {
    expect(home).toBeInTheDocument()
  })
  test('[app] must has an app className', () => {
    expect(home).toHaveClass('app')
  })
})
