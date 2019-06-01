import styled from 'styled-components';

export const NavbarContainer = styled.div`
  .hidden {
    opacity: 0;
    top: -100vh;
    transition: 0.3s;
  }
  #logomain {
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 1.5rem;
    padding: 0 !important;
    text-decoration: none;
    color: black;
  }
  .mobileMenuItems {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .navigationItems {
    padding-right: 2em;
  }
  .mobileNavigationItems {
    color: red !important;
  }
  .shown {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    transition: 0.3s;
  }
  .hidden {
    display: none;
  }
  .flex-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 1rem 1rem;
    width: 100%;
    top: 0;
    background: white;
  }
  .navigationMenu {
    margin: 0;
    padding: 0;
    display: flex;
  }

  .mobileWrapper {
    background: white;
    display: flex;
    align-items: center;
    position: absolute;
    height: 100vh;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
  }
  @media only screen and (max-width: 577px) {
    .navigationMenu {
      font-size: 0.7rem;
    }
  }
  .mo:active {
    color: black;
  }
  .spacer {
    flex: 1;
  }
  .burgerContainer {
    display: none;
  }
  @media only screen and (max-width: 504px) {
    .navigationMenu {
      display: none;
    }
    .burgerContainer {
      display: block;
    }
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #bcbcbc;
  }
  a:hover {
    color: black;
    transition: 0.5s;
  }
  a:active {
    color: black;
    transition: 0.5s;
  }
`;
