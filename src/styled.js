import { NavLink, Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: teal;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 10px;

  &.active {
    font-weight: bold;
  }

  &:hover {
    text-decoration: none;
  }
`;

export const RightAlignWrapper = styled.div`
  margin-left: auto;
`;

export const Link = styled(RouterLink)`
  color: teal;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: hsl(180, 100%, 30%);
  }
`;
