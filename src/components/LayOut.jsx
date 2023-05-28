import styled from '@emotion/styled';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  margin-left: 20px;
  font-size: 1.5em;
  text-align: center;
  /* color: #bf4f74; */

  &.active {
    color: blue;
    font-weight: 700;
  }
`;

const StyledList = styled.ul`
  display: flex;
  padding: 10px;
  padding: 20px;
  margin-bottom: 40px;
  border-bottom: 2px solid red;
`;

export default function LayOut() {
  return (
    <>
      <StyledList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
      </StyledList>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
