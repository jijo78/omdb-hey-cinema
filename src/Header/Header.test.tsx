import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import { Header } from './Header'

const renderComponent = () => render(<Header></Header>)

describe('<Header />', () => {
  afterEach(cleanup)

  it('should render the Logo', () => {
    const { getByText } = renderComponent()

    //some madness just to get the inner text wrapped in another html tag
    // courtesy of https://www.polvara.me/posts/five-things-you-didnt-know-about-testing-library/
    const logo = screen.getByText((_, node: any) => {
      const hasText = (node: any) => node.textContent === 'cinema'
      const nodeHasText = hasText(node)
      const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child))
      return nodeHasText && childrenDontHaveText
    })

    expect(logo).toBeInTheDocument()
    expect(getByText('hey')).toBeInTheDocument()
  })
})
