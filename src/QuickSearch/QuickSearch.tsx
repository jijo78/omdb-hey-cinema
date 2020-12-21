import React, { FC, useEffect } from 'react'

import styled from 'styled-components'
import magnifierSvg from '../assets/images/magnifierGlass.svg'

type Props = {
  handleChange: (e: React.ChangeEvent<any>) => void
  onSubmit?: (e: React.ChangeEvent<any>) => void
  placeholder?: string
  ref?: React.RefAttributes<any>
}

const Search = styled('section')`
  margin-top: 2rem;
`

const SearchForm = styled('form')`
  position: relative;
  width: 100%;
`
const SearchLegend = styled('legend')`
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
`
const SearchLabel = styled('label')`
  position: absolute !important;
  top: -9999px !important;
  left: -9999px !important;
`

const SearchInput = styled('input')`
  position: relative;
  color: #ccc;
  width: 97%;
  text-align: center;
  padding: 2rem;
  font-size: 2rem;
  border: 0 none;
  border-radius: 1rem;
  overflow: hidden;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px 3px;

  &::placeholder {
    color: #ccc;
  }
`

const Button = styled('button')`
  width: 3rem;
  height: 3rem;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 25%;
  right: 0;
  background-color: white;
  background: #ffffff url(${magnifierSvg}) no-repeat 90%;

  color: #ffffff;
`

export const QuickSearch: FC<Props> = ({ onSubmit, handleChange, placeholder }) => {
  const inputRef = React.createRef<HTMLDivElement>()

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  })
  return (
    <Search>
      <SearchForm
        onSubmit={(e: React.ChangeEvent<any>) => {
          e.preventDefault()
          onSubmit && onSubmit(e)
        }}
      >
        <SearchLegend>Find a movie </SearchLegend>
        <SearchLabel htmlFor="search-input">Search for movie</SearchLabel>
        <SearchInput
          onChange={(e: React.ChangeEvent<any>) => {
            handleChange && handleChange(e)
          }}
          placeholder={placeholder}
          name="search-input"
          id="search-input"
          className="search__input"
          type="text"
          ref={inputRef as React.RefObject<HTMLInputElement>}
        />
        <Button type="submit"></Button>
      </SearchForm>
    </Search>
  )
}
