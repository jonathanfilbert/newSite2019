import styled from 'styled-components';

export const NavbarContainer = styled.div`
  .navigationItems {
    padding: 2rem;
  }
  .hidden {
    opacity: 0;
  }
  .flex-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 1rem 1rem;
    width: 100%;
    top: 0;
    background: white;
    position: sticky;
  }
  .shown {
    display: block;
  }
  .navigationMenu {
    margin: 0;
    padding: 0;
    display: flex;
  }
  .mobileWrapper {
    background: red;
    display: flex;
    flex-direction: row;
    align-items: center;
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
  #mobile-wrapper {
    display: none;
  }
  @media only screen and (max-width: 504px) {
    .navigationMenu {
      display: none;
    }
    .burgerContainer {
      display: block;
    }
    #logomain {
      font-size: 199rem;
    }
    #mobile-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100vw;
      height: 100vh;
    }
  }
`;
