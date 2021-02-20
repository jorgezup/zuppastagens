import styled from 'styled-components'

export const Nav = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #f1f1f1;


  background-color: #dddddd;

  display: flex;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 93%;
    margin: 0 auto;
  }

  .logo {
    /* align-self: center; */
    font-family: 'Piedra', cursive;
    font-size: 1.26em;
    color: #23B450;
    text-transform: uppercase;

    cursor: pointer;
  }
`
