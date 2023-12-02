import styled from "styled-components";

const StyledHeader = styled.header`
  height: 96px;
  background-color: var(--color-grey-900);
  display: flex;
  padding: 0 4.8rem;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: var(--color-grey-50);
  transform: translateY(-100%);
  transition: all 0.4s ease;
  opacity: 0;

  &.sticky {
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(0);
  }
`;

const Signature = styled.span`
  font-size: 2.4rem;
`;

const Navbar = styled.nav``;

const Navlist = styled.ul`
  display: flex;
  gap: 3.2rem;
`;

const Navlink = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    font-size: 1.8rem;
  }
`;

const Something = styled.span`
  font-size: 2.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Signature>Gana</Signature>
      <Navbar>
        <Navlist>
          <li>
            <Navlink href="#">About me</Navlink>
          </li>
          <li>
            <Navlink href="#">Projects</Navlink>
          </li>
          <li>
            <Navlink href="#">Contact me</Navlink>
          </li>
        </Navlist>
      </Navbar>
      <Something>Yu ve?</Something>
    </StyledHeader>
  );
}

export default Header;
