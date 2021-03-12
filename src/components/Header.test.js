import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'
import { expect, it } from '@jest/globals'

describe('Header', () => {
  it('renders correctly', () => {
    const { container } = render(<Header>Your Favourites</Header>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('shows the correct headline', () => {
      const { getByText } = render(<Header>Your Favourites</Header>)
      expect(getByText(/Your Favourites/i)).toBeInTheDocument()
  })

})