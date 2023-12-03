import styled from "styled-components";

const StyledHeader = styled.header`
  height: 70px;
  background-color: rgba(0, 0, 0, 0.85);
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
  z-index: 20000;

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
  color: var(--color-grey-0);

  @media only screen and (max-width: 80em) {
    font-size: 2rem;
  }
`;

const Navbar = styled.nav`
  height: 100%;
`;

const Navlist = styled.ul`
  display: flex;
  height: 100%;
`;

const Navlink = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.6rem;

    @media only screen and (max-width: 80em) {
      font-size: 1.6rem;
    }

    @media only screen and (max-width: 64em) {
      font-size: 1.4rem;
    }
  }

  &:hover,
  &:active {
    color: var(--color-grey-900);
    background-color: var(--color-grey-0);
  }
`;

const Something = styled.span`
  font-size: 2.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <Signature>gana.</Signature>
      <Navbar>
        <Navlist>
          <li>
            <Navlink href="#about">About me</Navlink>
          </li>
          <li>
            <Navlink href="#projects">Projects</Navlink>
          </li>
          <li>
            <Navlink href="#contact">Contact me</Navlink>
          </li>
        </Navlist>
      </Navbar>
      <Something>Yu ve?</Something>
    </StyledHeader>
  );
}

export default Header;
