import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

const Header = () => {
  return (
    <header className={css.headers}>
      <nav className={css.headersNav}>
        <StyledLink to="/">
          Home
        </StyledLink>
        <StyledLink to="/films">
          About
        </StyledLink>
      </nav>
    </header>
  );
};

export default Header;
