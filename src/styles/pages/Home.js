import styled from 'styled-components'

export const Container = styled.div`
`
export const Section = styled.div`
padding: 14px 0;
  h2 {
    color: #264F12;
    font-size: 22px;
    border-bottom: 2px solid #264F12;
  }

  img {
    margin-top: 22px;
    width: 100%;
    height: 316px;
    object-fit: cover;
  }

  h3 {
    color: #18320B;
    margin-top: 18px;
  }

  section {
    margin-top: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  span {
    margin-top: 4px;
  }

  button {
    background-color: #264F12;
    color: #e1e1e6;
    width: 130px;
    height: 30px;
    border-radius: 36px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    align-self: center;
    margin-top: 20px;
    cursor: pointer;
  }

  span {
    font-size: 8px;
    font-weight: 100;
  }
`

export const Wrapper = styled.div`
  width: 96vw;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`

export const Contato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin: 8px 0;
    p {
      font-size: 16px;
    }
  }

  a {
    width: 200px;
    height: 42px;
    background-color: #008000;
    border-radius: 36px;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: #ffffff;
      font-size: 18px;
      font-weight: 400;
      margin-top: initial;
    }

    svg {
      color: #ffffff;
      width: 22px;
      height: 22px;
      margin-right: 8px;
    }
  }
`
