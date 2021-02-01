import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background:
    url('/Background.svg')
    50% 30% no-repeat fixed;

`

export const Navigation = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;

  height: 60px;
  width: 100vw;

  background-color: #232529;

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
export const Wrapper = styled.div`
  width: 96vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 60px;
  /* height: 100vh; */

  section {
    padding: 12px 0;
  }
  h2 {
    color: #264F12;
    font-size: 22px;
    border-bottom: 2px solid #264F12;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      color: #C40233;
    }
  }
`
export const Video = styled.div`
  width: 100%;
  height: 220px;

  background: #dddddd;

  margin-top: 20px;
  margin-bottom: 8px;

  img {
    width: 90px;
    height: 70px;
  }
`
export const WhatsApp = styled.div`
  width: 200px;
  height: 42px;
  background-color: #008000;
  border-radius: 36px;

  margin-top: 12px;

  a {
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      margin-top: initial;
    }

    svg {
      color: #fff;
      width: 22px;
      height: 22px;
      margin-right: 8px;
    }
  }
`
