import styled from 'styled-components'

export const Container = styled.div`
  background-color: #000B29;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;

  @media (max-width: 1024px) {
    div.wrapper {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
    }
  }

  @media (min-width: 1024px) {

    div.wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin-bottom: 16px;

    }

  }
`
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 4em;
    height: 5em;
  }

  p.title {
    font-family: 'Piedra', cursive;
    font-size: 1.4em;
    color: #23B450;
    text-transform: uppercase;
    margin: .3em 0;
  }

  p.description {
    font-family: 'Cabin Sketch', cursive;
    font-size: .72em;
    font-weight: bold;
    color: #E6E6E6;
    text-transform: uppercase;
  }
`

export const SocialIcons = styled.div`
  margin: 6px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-right: 12px;
    a {
      color: inherit;
      text-decoration: none;
      display: flex;
      align-items: center;
    }
    svg {
      color: #f4f5f6;

      width: 1.6em;
      height: 1.6em;

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
    div>a>span{
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
      font-size: .8em;
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

      font-size: .8em;
      margin-bottom: .6em;

      &:last-of-type{
        margin-bottom: initial;
      }
    }
  }
`

export const Copyright = styled.div`
  width: 100%;
  padding: .3em 0;

  background-color: #232529;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;


  span {
    color: #f4f5f6;
    font-size: .6em;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    span {
      color: #444444;
      font-size: .6em;
    }
  }


`
