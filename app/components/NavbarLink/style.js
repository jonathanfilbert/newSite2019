import styled from 'styled-components';

export const NavbarLinkContainer = styled.div`
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 1.2em;
  padding-left: 1em;
  .mobile {
    text-decoration: none;
  }
  .desktop {
    margin-right: 1em;
    text-decoration: none;
  }
  .main {
    color: black;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.5rem;
  }
  .leftMenu {
    text-decoration: none;
    color: #bcbcbc;
    cursor: pointer;
  }
  .leftMenu:hover {
    color: black;
    transition: 0.5s;
  }
`;
