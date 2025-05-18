import { HeaderStyles, Titles } from "./styled";

const Header = ({ title }) => (
  <HeaderStyles>
    <Titles>{title}</Titles>
  </HeaderStyles>
);

export default Header;
