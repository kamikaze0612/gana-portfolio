import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--color-grey-800);
  padding: 4.8rem 0;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 2.4rem;
`;

const Author = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-200);
  text-align: center;
`;

const FooterLink = styled.a`
  &:link,
  &:visited {
    padding: 1.2rem;
    background-color: var(--color-grey-50);
    transition: all 0.3s ease;
    display: inline-block;
    border-radius: 50%;
  }

  &:hover,
  &:active {
    background-color: var(--color-grey-200);
  }
`;

const Icon = styled.svg`
  width: 3.2rem;
  height: 3.2rem;
  fill: var(--color-grey-900);
  filter: brightness(0);
`;

function Footer() {
  return (
    <StyledFooter>
      <SocialLinks>
        <li>
          <FooterLink
            href="https://www.facebook.com/ganhuyag.tugsbayar"
            target="_blank"
          >
            <Icon>
              <use xlinkHref="sprite.svg#icon-facebook-square"></use>
            </Icon>
          </FooterLink>
        </li>
        <li>
          <FooterLink
            href="https://www.instagram.com/tugs_ganhuyag/"
            target="_blank"
          >
            <Icon>
              <use xlinkHref="sprite.svg#icon-instagram"></use>
            </Icon>
          </FooterLink>
        </li>
        <li>
          <FooterLink
            href="https://x.com/GankhuyagT?t=OBPz0fV1kWjH-YyWU-i82Q&s=09"
            target="_blank"
          >
            <Icon>
              <use xlinkHref="sprite.svg#icon-x"></use>
            </Icon>
          </FooterLink>
        </li>
        <li>
          <FooterLink href="https://line.me/ti/p/0SB58pBv4J" target="_blank">
            <Icon>
              <use xlinkHref="sprite.svg#icon-line"></use>
            </Icon>
          </FooterLink>
        </li>
      </SocialLinks>
      <Author>&copy; 2023 Gankhuyag Tugsbayar. All rights reserved</Author>
    </StyledFooter>
  );
}

export default Footer;
