import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #ffffff;
  border-radius: 0px 0px 1rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px 3px;
  padding: 1.5rem;
`
const Logo = styled.h1`
  color: #7faaea;
  font-weight: bold;
  font-size: 1.8rem;
  margin: 0;
  padding: 0;
  p {
    color: #834db7;
    font-size: 1.8rem;
  }
`

export const Header: FC = () => {
  return (
    <Wrapper>
      <Logo>
        hey
        <p>cinema</p>
      </Logo>
    </Wrapper>
  )
}
