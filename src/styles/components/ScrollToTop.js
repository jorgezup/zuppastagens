import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 12px;
  right: 24px;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: #23B450;
  display: flex;
  z-index: 3;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.25);
  svg {
    justify-self: center;
    align-self: center;
    /* animation: scrollTop 1s alternate ease infinite; */
    width: 100%;
    height: 100%;
    /* fill: ${props => props.theme.colors.subtitle}; */
    color: #fff;
  }

  @keyframes scrollTop {
    from {
      transform: translateY(1px);
    }
    to {
      transform: translateY(-1px)
    }
  }

  @media (max-width: 425px) {
    width: 22px;
    height: 22px;
  }
`
