import React from 'react'
import { render, cleanup } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import { SearchResults } from './SearchResults'
import { resultsList, resultList } from '../fixtures/results-mock-resp'
import 'whatwg-fetch'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { cache } from 'swr'
const server = setupServer(
  rest.get('http://www.omdbapi.com/?&apikey=789090&i=tt0054167', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(resultList))
  })
)

const renderComponent = () => render(<SearchResults results={resultsList}></SearchResults>)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
describe('<SearchResults />', () => {
  afterEach(cleanup)
  it('should render the page', async () => {
    const { findByText } = renderComponent()
    const component = await findByText('Search Results')
    expect(component).toBeInTheDocument()
  })
  it('should render movie title', async () => {
    const { findByText } = renderComponent()
    const component = await findByText('Peeping Tom')
    expect(component).toBeInTheDocument()
  })
  it('should render a list of results ', async () => {
    const { queryAllByTestId } = renderComponent()

    const li = queryAllByTestId('result-list')

    expect(li.length).toBe(3)
  })

  it('should render movie card image', async () => {
    const { findByAltText } = renderComponent()
    const img = await findByAltText('Peeping Tom')
    expect(img).toHaveAttribute(
      'src',
      'https://m.media-amazon.com/images/M/MV5BZjM3ZTAzZDYtZmFjZS00YmQ1LWJlOWEtN2I4MDRmYzY5YmRlL2ltYWdlXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg'
    )
  })
  it('should render the rating', async () => {
    const { findAllByText, container } = renderComponent()
    console.log('container: ', container.innerHTML)
    const rating = await findAllByText('Rating: 8')

    expect(rating[0]).toBeInTheDocument()
  })

  it('should render the release year', async () => {
    const { findAllByText, container } = renderComponent()
    const release = await findAllByText('Released: 1960')

    expect(release[0]).toBeInTheDocument()
  })
})
