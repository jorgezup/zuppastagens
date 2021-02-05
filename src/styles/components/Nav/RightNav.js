import styled from 'styled-components'

export const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 18px;

    a {
        text-decoration: none;
        color: #23B450;
        font-size: 20px;
        font-family: 'Cabin Sketch', cursive;

        /* font-weight: 400; */

        &:hover {
          color: #4e7942;
        }

        &.active {
          color: rgba(0, 11, 41, 0.3);
        }
      }
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgba(0, 0, 0, 0.85);


    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    padding-top: 3rem;

    transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform .4s ease-in-out;

    /* justify-content: center; */
    align-items: center;

    li {
      padding: 32px 0;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 28px;
        font-weight: 300;

        &:hover {
          color: #4e7942;
        }

        &.active {
          color: #23B450;
        }
      }
    }
  }
`
