import styled from 'styled-components';

export const NavbarLinkContainer = styled.div`
  font-family: 'Helvetica';
  font-weight: normal;
  font-size: 1.2em;
  .mobile {
    padding-bottom: 1em;
    display: block;
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
`;
