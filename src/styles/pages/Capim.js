import styled from 'styled-components'

export const Container = styled.div`
`

export const Wrapper = styled.div`
  /* width: 96vw;
  max-width: 1100px; */
  width: min(96vw, 1300px);


  margin: auto;


  section {
    padding: 1.6em 0;
  }
  h2 {
    color: var(--primary-green-color);
    font-size: 2em;
    line-height: 1em;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
      color: var(--span-red-color);
    }
  }
`
export const Video = styled.div`
  width: 100%;
  height: 220px;
  margin: 1em auto;

  @media (min-width: 1024px) {
    width: 760px;
    height: 440px;
  }
`
export const WhatsApp = styled.div`
  background-color: var(--whatsapp-green-color);
  border-radius: 36px;

  margin-top: 1.2em;

  a {
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: .8em 1.2em;

    span {
      color: #fff;
      font-size: 1em;
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
