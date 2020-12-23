import styled from 'styled-components'
const size = {
  mobileXS: '320px',
  mobileS: '400px',
  mobileL: '600px',
  laptop: '1024px',
}

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
}
export const Cards = styled.ul`
  display: grid;
  width: 100%;
  margin-top: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  margin: 2rem 0;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
`

export const Card = styled.li`
  box-shadow: rgba(0, 0, 0, 0.2) 0 0.2rem 1rem 0.3rem;
  border-radius: 1rem;
  background-color: #fff;
  display: flex;
  height: 15rem;
  overflow: hidden;
  &:hover {
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
`
export const CardImgWrapper = styled('figure')`
  width: 50%;
  img {
    clip-path: polygon(100% 0%, 80% 100%, 0% 100%, 0% 0%);
    height: 100%;
    object-fit: cover;
  }
  margin: 0;
`
export const CardBody = styled('section')`
  padding: 0.5rem 0.7rem;
  width: 50%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`
export const CardFooter = styled('div')`
  display: flex;
  justify-content: space-between;
  align-self: inherit;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  p span {
    color: #34283f;
    padding-left: 0.2rem;
  }
`
