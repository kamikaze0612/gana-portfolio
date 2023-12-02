import styled from "styled-components";

const StyledAbout = styled.section`
  margin: 9.6rem 3.2rem;
  background-color: var(--color-grey-100);
  display: grid;
  grid-template-columns: 60rem 1fr;
  border-radius: 20px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
`;

const About = styled.div`
  padding: 4.8rem 6.4rem;
  padding-right: 12.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6.4rem;
`;

const Heading = styled.h2`
  font-size: 6.2rem;
  text-transform: uppercase;
`;

const Text = styled.article`
  font-size: 1.8rem;
  line-height: 1.7;
  color: var(--color-grey-500);
`;

const BreakLine = styled.span`
  display: block;
  margin-bottom: 2.4rem;
`;

const Hobbies = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 2.4rem;
`;

const Skills = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 2.4rem;
  display: flex;
`;

const SkillBox = styled.ul`
  display: flex;
  gap: 9.6rem;
  margin-left: 12.8rem;
  width: 100%;
  list-style: none;
`;

const SkillsRow = styled.li`
  display: grid;
  grid-template-rows: repeat(2, auto);
  row-gap: 2.4rem;
`;

const SkillType = styled.span`
  width: 100%;
  display: block;
  font-weight: 400;
  text-transform: none;
  font-size: 1.8rem;
  color: var(--color-grey-900);
`;

const SkillContainer = styled.span`
  display: flex;
  gap: 3.2rem;
`;

const SkillItem = styled.img`
  width: 6rem;
`;

function AboutMe() {
  return (
    <StyledAbout>
      <Image src="profile.jpg" />
      <About>
        <Heading>About me</Heading>
        <Text>
          I`m an architecture student who loves designing cool and eco-friendly
          buildings. Through academic projects and internships, I have honed my
          skills in architectural software, 3D modeling, and project management.
          Now i`m eager to challenge myself in architecture field.
          <BreakLine />I want to join a team where I can make real buildings
          look amazing and work well I want to bring my creative ideas and
          technical skills to a team where I can turn concepts into beautiful
          and practical designs for buildings.
        </Text>
        <Hobbies>Hobbies </Hobbies>
        <Skills>
          Skills{" "}
          <SkillBox>
            <SkillsRow>
              <SkillType>CAD Drawing:</SkillType>
              <SkillContainer>
                <SkillItem src="archicad.png" />
                <SkillItem src="autocad.png" />
                <SkillItem src="sketchup.png" />
              </SkillContainer>
            </SkillsRow>
            <SkillsRow>
              <SkillType>3D Render:</SkillType>
              <SkillContainer>
                <SkillItem src="lumion.png" />
                <SkillItem src="twinmotion.png" />
              </SkillContainer>
            </SkillsRow>
            <SkillsRow>
              <SkillType>Adobe:</SkillType>
              <SkillContainer>
                <SkillItem src="adobe-photoshop.png" />
                <SkillItem src="adobe-illustrator.png" />
                <SkillItem src="indesign.png" />
              </SkillContainer>
            </SkillsRow>
          </SkillBox>
        </Skills>
      </About>
    </StyledAbout>
  );
}

export default AboutMe;
