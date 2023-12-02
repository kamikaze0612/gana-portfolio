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
`;

const data = [
  { title: "Gathering House", color: "crimson" },
  { title: "Quruwa", color: "pink" },
  { title: "Aete", color: "violet" },
  { title: "Arch& Environment", color: "brown" },
  { title: "Hut for Change of Mood", color: "navy" },
  { title: "Open School", color: "orangered" },
];

function Projects() {
  return (
    <StyledProjects>
      <Container>
        {data.map((item) => (
          <ProjectItem color={item.color} key={item.title} title={item.title} />
        ))}
      </Container>
    </StyledProjects>
  );
}

export default Projects;
