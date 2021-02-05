import styled from 'styled-components'

export const Container = styled.div`
`
export const Section = styled.div`
  padding: 14px 0;
`

export const Wrapper = styled.div`
  width: 96vw;
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  h2 {
    color: #264F12;
    font-size: 24px;
    /* border-bottom: 2px solid #264F12; */
  }

  div.line {
    width: 100%;
    height: 2px;
    margin: 4px 0;
    background-color: #264F12;
  }


  /* img {
    margin-top: 22px;
    width: 100%;
    height: 316px;
    object-fit: cover;
  } */

  h3 {
    color: #567d46;
    font-size: 20px;
    font-weight: 400;
    margin-top: 18px;
  }

  section {
    margin-top: 8px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;

    strong {
      font-weight: 600;
      color: #4e7942;
    }
  }

  button {
    background-color: #264F12;
    color: #e1e1e6;
    width: 160px;
    height: 40px;
    border-radius: 36px;
    border: none;

    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: .6px;

    outline: none;
    cursor: pointer;

    align-self: center;
    margin-top: 20px;

    transition: 16s ease-in-out;
  }

  span {
    font-size: 8px;
    font-weight: 100;
    margin-top: 8px;
  }

  @media (max-width: 320px) {
    h2 {
      font-size: 22px;
    }
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
    button {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 20px;
      line-height: 32px;
    }
    span {
      font-size: 12px;
    }
    button {
      font-size: 22px;
      height: 60px;
      width: 220px;
    }
  }
`

export const WrapperImages = styled.div`
  /* Carousel Images */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 8px;

  #items {
    display: flex;

    overflow-x: hidden;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .item {
    flex: none;
    width: 100%;
    height: 316px;

    scroll-snap-align: start;

    animation: slide 14s infinite;
    img {
      width: 99%;
      height: 100%;
      object-fit: cover;
    }

    @keyframes slide {
      0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      }
      17%,
      33% {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
      }
      50%,
      66% {
        -webkit-transform: translateX(-200%);
        transform: translateX(-200%);
      }
      83%,
      100% {
        -webkit-transform: translateX(-300%);
        transform: translateX(-300%);
      }
    }
  }

  @media (min-width: 1024px) {
    #items {
      display: grid;
      grid-template-columns: 2fr 2fr;
      gap: 8px;
    }

    .item {
      height: 500px;
      /* width: 350px; */
      animation: none;

      img {
      }
    }
  }
`

export const Contato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin: 12px 0;
    p {
      font-size: 18px;
      color: #577447;
      text-align: center;
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

  @media (min-width: 1024px) {
    div {
      p {
        font-size: 22px;
      }
    }

    a {
      height: 60px;
      width: 260px;
      span {
        font-size: 22px;
      }
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
`
