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
`;
function Hero() {
  return <StyledHero></StyledHero>;
}

export default Hero;
