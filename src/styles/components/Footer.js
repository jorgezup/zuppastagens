import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000B29;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width:52px;
    height: 52px;
  }

  p {
    font-family: 'Piedra', cursive;
    font-size: 18px;
    color: #23B450;
    text-transform: uppercase;
  }

  p+p {
    font-family: 'Cabin Sketch', cursive;
    font-size: 10px;
    font-weight: bold;
    color: #E6E6E6;
    text-transform: uppercase;
  }
`

export const SocialIcons = styled.div`
  margin: 10px 0;
  svg {
    margin-right: 10px;
    color: #f4f5f6;
    width: 18px;
    height: 18px;
  }

  svg:last-of-type {
    margin-right: initial;
  }
`

export const Copyright = styled.div`
  width: 100vw;
  height: 16px;
  background-color: #232529;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: #f4f5f6;
    font-size: 8px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    span {
    color: #444444;
    font-size: 8px;
  }
  }
`
