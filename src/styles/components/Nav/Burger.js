import styled from 'styled-components'

export const Menu = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 15px;
  right: 20px;

  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${props => props.open ? '#ccc' : '#23B450'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${props => props.open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${props => props.open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
