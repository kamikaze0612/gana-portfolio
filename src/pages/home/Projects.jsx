import styled from "styled-components";

import ProjectItem from "./ProjectItem";

const StyledProjects = styled.section`
  padding: 3.2rem;
`;

const Container = styled.div`
  max-width: 168rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media only screen and (max-width: 48em) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto auto;
  }
`;

const Heading = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 6.4rem;
  text-transform: uppercase;
  text-align: center;

  @media only screen and (max-width: 80em) {
    font-size: 3rem;
  }
`;

const data = [
  { title: "Gathering House", img: "gathering-house.jpg" },
  { title: "Quruwa", img: "quruwa.png" },
  { title: "Aete", img: "aete.jpg" },
  { title: "Arch& Environment", img: "arch-environment.jpg" },
  { title: "Hut for Change of Mood", img: "hut.jpeg" },
  { title: "Open School", img: "open-school.jpg" },
];

function Projects() {
  return (
    <StyledProjects id="projects">
      <Heading>Projects</Heading>
      <Container>
        {data.map((item) => (
          <ProjectItem img={item.img} key={item.title} title={item.title} />
        ))}
      </Container>
    </StyledProjects>
  );
}

export default Projects;
