import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #000B29;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: 'Piedra', cursive;
    font-size: 50px;
    color: #23B450;
    text-transform: uppercase;
  }

  h2 {
    font-family: 'Cabin Sketch', cursive;
    font-size: 22px;
    font-weight: bold;
    color: #E6E6E6;
    text-transform: uppercase;
  }

  @media (min-width: 320px) {
    h1 {
      font-size: 42px;
    }
    h2 {
      font-size: 18px;
    }
  }
`

export const Navigation = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 60px;
  width: 100vw;

  background-color: rgba(255, 255, 255, 0.42);

  display: flex;
  align-items: center;

  p {
    font-family: 'Piedra', cursive;
    font-size: 16px;
    color: #23B450;
    text-transform: uppercase;

    margin-left: 20px;
  }

  svg {
    width: 22px;
    height: 22px;
    margin-left: auto;
    margin-right: 20px;
    color: #e1e1e6;
  }
`
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 144px;
    height: 178px;
  }

`
