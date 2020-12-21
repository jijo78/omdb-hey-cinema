import React, { FC } from 'react'
import config from '../config'
import { fetchData } from '../utilis/fetchData'
import useSWR from 'swr'
import { Error } from '../Error'
import { ResultsList } from '../types'

import { Cards, Card, CardBody, CardImgWrapper } from '../Card'

interface Props {
  results: ResultsList[]
}

export const SearchResults: FC<Props> = ({ results }) => {
  return (
    <>
      <h2 style={{ display: 'none' }}>Search Results</h2>

      <Cards>
        {results &&
          results.map((result, i) => {
            //although I don't like to suppress typescript errors,
            //it seems to be an issue with useSwr suppressing the error seems to be the quickest fix,https://github.com/vercel/swr/issues/133

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { data, error } = useSWR(
              `http://www.omdbapi.com/?&apikey=${config.api}&i=${result.imdbID}`,
              fetchData
            )

            if (error) {
              return <Error>Something went wrong</Error>
            }

            return (
              <Card data-testid="result-list" key={i}>
                <CardImgWrapper>
                  <img alt={result.Title} src={result.Poster} />
                </CardImgWrapper>

                <CardBody>
                  <h2> {data && data.Title}</h2>
                  <div>
                    <h3>Released: {data && data.Year}</h3>

                    <p>Rating: {data && Math.ceil(data.imdbRating)}</p>
                  </div>
                </CardBody>
              </Card>
            )
          })}
      </Cards>
    </>
  )
}
