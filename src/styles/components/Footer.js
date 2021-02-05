import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000B29;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 1023px) {
    div.wrapper {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  @media (min-width: 1024px) {
    height: 300px;


    div.wrapper {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }

  }
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

  p.title {
    font-family: 'Piedra', cursive;
    font-size: 18px;
    color: #23B450;
    text-transform: uppercase;
  }

  p.description {
    font-family: 'Cabin Sketch', cursive;
    font-size: 10px;
    font-weight: bold;
    color: #E6E6E6;
    text-transform: uppercase;
  }

  @media (min-width: 1024px) {
    svg {
      width: 140px;
      height: 140px;
    }
    p.title {
      font-size: 32px;
      margin: 8px 0;
    }
    p.description {
      font-size: 18px;
    }
  }
`

export const SocialIcons = styled.div`
  margin: 10px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-right: 10px;
    svg {
      color: #f4f5f6;

      width: 18px;
      height: 18px;

      &:last-of-type{
        margin-right: initial;
      }
    }

    &:last-of-type{
      margin-right: initial;
    }

    span {
      font-family: 'Cabin Sketch', cursive;
    }
  }

  @media (max-width: 1023px) {
    div>span {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin: initial;
    align-items: initial;

    div {
      display: flex;
      align-items: center;
      color: #f4f5f6;
      font-size: 18px;
      margin-bottom: 8px;

      &:last-of-type{
        margin-bottom: initial;
      }

      svg {
        width: 24px;
        height: 24px;
      }

      span {
        margin-left: 8px;
      }

    }
  }

`

export const Links = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      text-decoration: none;
      color: #f4f5f6;
      font-family: 'Cabin Sketch', cursive;

      font-size: 18px;
      margin-bottom: 8px;

      &:last-of-type{
        margin-bottom: initial;
      }
    }
  }
`

export const Copyright = styled.div`
  width: 100%;

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

  @media (min-width:1024px) {
    height: 26px;
    position: absolute;
    bottom: 0;

    span {
      font-size: 14px;
    }

    div>span {
      font-size: 14px;
    }
  }

`
