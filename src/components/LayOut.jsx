import styled from '@emotion/styled';
import { NavLink, Outlet } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  margin-left: 10px;

  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  &.active {
    color: blue;
  }
`;
const StyledList = styled.ul`
  display: flex;
  padding: 10px;
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
        <Outlet />
      </main>
    </>
  );
}
