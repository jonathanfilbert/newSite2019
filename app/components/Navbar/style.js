import styled from 'styled-components';

export const NavbarContainer = styled.div`
  .hidden {
    opacity: 0;
    top: -100vh;
    transition: 0.3s;
  }
  #logomain {
    font-family: 'Helvetica';
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0 !important;
    text-decoration: none;
  }
  #logomain-mobile {
    display: none;
    font-family: 'Helvetica';
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0 !important;
    text-decoration: none;
  }
  .mobileMenuItems {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .navigationItems {
    padding-right: 2em;
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
    transition: 0.3s;
  }
  .flex-wrapper {
    display: flex;
    align-items: flex-start;
    background: white;
    padding: 1em 1em;
    width: 100%;
    /* top: 0; */
    position: fixed;
    z-index: 1;
    backdrop-filter: saturate(180%) blur(20px);
  }
  .navigationMenu {
    margin: 0;
    padding: 0;
    display: flex;
  }

  .mobileWrapper {
    overflow: hidden;
    display: flex;
    align-items: center;
    height: 100vh;
    z-index: 100;
    flex-direction: column;
    justify-content: space-around;
    background: white;
    position: fixed;
    z-index: 1;
    backdrop-filter: saturate(180%) blur(20px);
  }
  @media only screen and (max-width: 703px) {
    .navigationMenu {
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 617px) {
    .navigationMenu {
      font-size: 0.6rem;
    }
  }
  @media only screen and (max-width: 577px) {
    #logomain-mobile {
      display: block;
    }
    #logomain {
      display: none;
    }
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
  }
  .light {
    background: rgb(255, 255, 255, 0.5);
  }
  .dark {
    background: rgb(0, 0, 0, 0.7);
  }
`;
