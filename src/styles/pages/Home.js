import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`
export const Section = styled.div`
  padding: 2em 0;
`

export const Wrapper = styled.div`
  width: min(96vw, 1300px);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  line-height: 2em;

  h2 {
    color: var(--primary-green-color);
    font-size: 1.8em;
  }

  div.line {
    width: 100%;
    height: .16em;
    margin: .56em 0;
    background-color: var(--primary-green-color);
  }

  h3 {
    color: var(--secondary-green-color);
    font-size: 1.55em;
    font-weight: 400;
  }

  section {
    margin: .6em 0;

    p {
      margin-bottom: 6px;
      font-size: 1.2em;
      line-height: 1.6em;
      font-weight: 300;

      strong {
        font-weight: 600;
        color: var(--strong-green-color);
      }

      &:last-of-type{
        margin-bottom: initial;
      }
    }
  }

  button {
    background-color: var(--primary-green-color);
    color: #e1e1e6;
    border-radius: 36px;
    border: none;

    font-size: 1.3em;
    padding: .6em 1.6em;

    outline: none;
    cursor: pointer;

    align-self: center;
    margin-top: 1.8em;

    opacity: 1;

    transition: all .4s;

    &:hover {
      opacity: .7;
    }
  }

  span {
    font-size: .8em;
    font-weight: 100;
    margin-top: 8px;
    line-height: 1em;
  }

  iframe {
    margin-top: 1.6em;
  }

`

export const WrapperImages = styled.div`
  /* Carousel Images */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: .8em 0;

  .images {
    height: 316px;
    width: 100%;
  }

  .imgbox{
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    background-position: center center;
    background-size: cover;
  }

  #img1{
    position: absolute;
    z-index: 4;
    -webkit-animation: slideshow 20s linear 0s infinite;
    -moz-animation: slideshow 20s linear 0s infinite;
    -ms-animation: slideshow 20s linear 0s infinite;
    -o-animation: slideshow 20s linear 0s infinite;
    animation: slideshow 20s linear 0s infinite;
  }

  #img2{
    position: absolute;
    z-index: 3;
    -webkit-animation: slideshow 20s linear 5s infinite;
    -moz-animation: slideshow 20s linear 5s infinite;
    -ms-animation: slideshow 20s linear 5s infinite;
    -o-animation: slideshow 20s linear 5s infinite;
    animation: slideshow 20s linear 5s infinite;
  }

  #img3{
    position: absolute;
    z-index: 2;
    -webkit-animation: slideshow 20s linear 10s infinite;
    -moz-animation: slideshow 20s linear 10s infinite;
    -ms-animation: slideshow 20s linear 10s infinite;
    -o-animation: slideshow 20s linear 10s infinite;
    animation: slideshow 20s linear 10s infinite;
  }

  #img4{
    position: absolute;
    z-index: 1;
    -webkit-animation: slideshow 20s linear 15s infinite;
    -moz-animation: slideshow 20s linear 15s infinite;
    -ms-animation: slideshow 20s linear 15s infinite;
    -o-animation: slideshow 20s linear 15s infinite;
    animation: slideshow 20s linear 15s infinite;
  }


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
    animation: slideshow 15s linear 10s infinite;
    img {
      width: 99%;
      height: 100%;
      object-fit: cover;
    }

    @keyframes slideshow {
      25% { opacity: 1;}
      30% { opacity: 0;}
      95% { opacity: 0;}
      100% { opacity: 1;}
    }
  }

  @media (min-width: 1024px) {
    .images {
      height: 720px;
    }
  }
`

export const Contato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  div {
    margin: 1.4em 0;
    p {
      font-size: 1.22em;
      line-height: 1.4em;
      color: var(--paragraph-green-color);
      text-align: center;
    }
  }

  a {
    background-color: var(--whatsapp-green-color);
    border-radius: 36px;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: .8em 1.2em;
    span {
      color: #fff;
      font-size: 1.1em;
      font-weight: 400;
      margin-top: initial;
    }

    svg {
      color: #fff;
      width: 2em;
      height: 2em;
      margin-right: .8em;
    }

    transition: all .4s;

    &:hover {
      opacity: .7;
    }
  }

`
