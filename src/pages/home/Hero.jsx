import styled from "styled-components";

const StyledHero = styled.section`
  height: 100vh;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(hero.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled.h1`
  color: var(--color-grey-50);
  font-size: 7.4rem;
  letter-spacing: 6px;
  margin-bottom: 2.4rem;

  animation: appear-from-bottom;
  animation-duration: 1s;

  @media only screen and (max-width: 80em) {
    font-size: 6.2rem;
  }

  @media only screen and (max-width: 80em) {
    font-size: 5.2rem;
  }

  @media only screen and (max-width: 80em) {
    font-size: 4.4rem;
  }
`;

const HeroSubText = styled.h2`
  color: var(--color-grey-300);
  font-size: 4.4rem;
  letter-spacing: 20px;
  animation: appear-from-bottom;
  animation-delay: 1s;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;

  @media only screen and (max-width: 80em) {
    font-size: 4.4rem;
  }

  @media only screen and (max-width: 80em) {
    font-size: 3.6rem;
  }

  @media only screen and (max-width: 80em) {
    font-size: 3rem;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <HeroText>I&apos;m Gankhuyag</HeroText>
      <HeroSubText>An architect</HeroSubText>
    </StyledHero>
  );
}

export default Hero;
