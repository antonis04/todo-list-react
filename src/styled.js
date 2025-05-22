import styled from 'styled-components';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';


const activeClassname = "active";

export const StyledNavLink = styled(NavLink)`
  &.${activeClassname} {
    color:red;
  }
`;