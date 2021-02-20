import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 60px);

  background-color: #000B29;

  /* display: flex; */
  /* flex-direction: column; */

  display: grid;
  grid-template-rows: 1fr;
  justify-content: center;
  align-items: center;

  .iconDown {
    display: flex;
    justify-content: center;
    height: 3rem;
    cursor: pointer;
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
export const Wrapper = styled.div`
  /* padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%; */
`

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Piedra', cursive;
    font-size: 3em;
    color: #23B450;
    text-transform: uppercase;
    margin: .44em;

  }

  h2 {
    font-family: 'Cabin Sketch', cursive;
    font-size: 1.2em;
    font-weight: bold;
    color: #E6E6E6;
    text-transform: uppercase;
  }

  svg {
    width: 10em;
    height: 12em;
  }

`
