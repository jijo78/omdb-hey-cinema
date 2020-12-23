import React, { FC, useState } from 'react'

import styled from 'styled-components'

import useSWR from 'swr'
import config from '../config'
import { QuickSearch } from '../QuickSearch'
import { SearchResults } from '../SearchResults'
import { Error } from '../Error'
import { Header } from '../Header'
import debounce from 'lodash.debounce'

import { fetchData } from '../utilis/fetchData'

interface Props {
  children?: React.ReactChildren
}

const Container = styled('section')`
  position: relative;
`

const Main = styled('main')`
  margin: 0 auto;
  max-width: 120rem;
  padding: 1rem;
`
export const Search: FC<Props> = () => {
  const [shouldFetch, setShouldFetch] = useState(false)
  const [term, setTerm] = useState('')
  const [validating, setIsValidating] = useState(false)

  const { data, error, isValidating } = useSWR(
    shouldFetch
      ? `https://www.omdbapi.com/?&apikey=${config.api}&type=movie&s=${term}&page=1-20`
      : null,
    fetchData,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
    }
  )
  if (data && data.errors) {
    setIsValidating(isValidating)
    setShouldFetch(false)
  }

  const handleChange = debounce((e: React.ChangeEvent<any>): void => {
    const term = e.target.value

    if (term === '') {
      setTerm('')
      setShouldFetch(false)
    }
    if (term.length >= 5) {
      setTerm(term)
      setShouldFetch(true)
    }
  }, 200)

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault()

    const value = document.getElementsByTagName('input')[0].value

    setTerm(value)
    if (data && data.errors) {
      setTerm('')
    }
    setShouldFetch(true)
  }

  if (error) {
    return <Error>Something went wrong</Error>
  }
  return (
    <Main>
      <Header />
      <QuickSearch
        placeholder="Search a movie..."
        onSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <Container as="section">
        {validating ? 'Loading...' : <SearchResults results={data && data.Search} />}
        {data && data.Error ? <Error>0 matches found</Error> : ''}
      </Container>
    </Main>
  )
}
