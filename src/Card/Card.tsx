import styled from 'styled-components'
export const size = {
  mobileS: '320px',
  mobileL: '600px',
  laptop: '1024px',
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileL: `(min-width: ${size.mobileL})`,
  laptop: `(min-width: ${size.laptop})`,
}
export const Cards = styled.ul`
  display: grid;
  width: 100%;
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 2rem;
  margin: 2rem 0;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
`

export const Card = styled.li`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 10px 3px;
  border-radius: 8px;
  background-color: #fff;
  grid-template-columns: 40% auto;
  display: grid;
  height: 14.5rem;
  overflow: hidden;
`
export const CardImgWrapper = styled('figure')`
  width: 100%;
  img {
    clip-path: polygon(100% 0%, 80% 100%, 0% 100%, 0% 0%);
    object-fit: cover;
  }
  margin: 0;
  grid-column: 1;
`
export const CardBody = styled('section')`
  position: relative;
  padding: 1rem;
  grid-column: 2;
  div {
    display: flex;
    justify-content: space-between;
  }
`
