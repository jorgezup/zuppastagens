import styled from 'styled-components'

export const Container = styled.div`
  height: 93vh;

  background-color: #000B29;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .iconDown {
    display: flex;
    justify-content: center;
    width: 46px;
    height: 46px;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    height: 100vh;

    .iconDown {
      width: 80px;
      height: 80px;
    }
  }

  @keyframes down {
    from {
      transform: translateY(2px);
    }
    to {
      transform: translateY(-3px);
    }
  }
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Piedra', cursive;
    font-size: 50px;
    color: #23B450;
    text-transform: uppercase;
    margin-bottom: 8px;

  }

  h2 {
    font-family: 'Cabin Sketch', cursive;
    font-size: 22px;
    font-weight: bold;
    color: #E6E6E6;
    text-transform: uppercase;
  }

  svg {
    width: 144px;
    height: 178px;
    margin-bottom: 8px;

  }

  @media (min-width: 320px) {
    h1 {
      font-size: 42px;
    }
    h2 {
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 68px;
    }
    h2 {
      font-size: 26px;
    }
    svg {
      width: 320px;
      height: 240px;
    }
  }

`
