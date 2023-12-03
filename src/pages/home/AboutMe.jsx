import styled from "styled-components";

const StyledAbout = styled.section`
  padding: 3.2rem;
  margin: 6.4rem 0;
`;

const Container = styled.div`
  /* background-color: var(--color-grey-100); */
  display: grid;
  grid-template-columns: 60rem 1fr;
  overflow: hidden;

  @media only screen and (max-width: 64em) {
    grid-template-columns: 40rem 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  border-radius: 20px;
`;

const About = styled.div`
  padding: 4.8rem 6.4rem;
  padding-right: 12.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6.4rem;

  @media only screen and (max-width: 80em) {
    padding: 4.8rem;
  }

  @media only screen and (max-width: 64em) {
    gap: 4.8rem;
    padding-right: 0;
  }
`;

const Heading = styled.h2`
  font-size: 5.2rem;
  text-transform: uppercase;

  @media only screen and (max-width: 80em) {
    font-size: 3.6rem;
  }

  @media only screen and (max-width: 64em) {
    font-size: 3rem;
  }
`;

const Text = styled.article`
  font-size: 1.8rem;
  line-height: 1.7;
  color: var(--color-grey-500);

  @media only screen and (max-width: 80em) {
    font-size: 1.6rem;
  }
`;

const ResumeLink = styled.a`
  &:link,
  &:visited {
    font-size: 1.8rem;
    color: var(--color-grey-900);
    font-weight: 600;
    border-bottom: 1.5px dotted currentColor;
  }
`;

const BreakLine = styled.span`
  display: block;
  margin-bottom: 2.4rem;
`;

const Hobbies = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 2.4rem;

  @media only screen and (max-width: 80em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 48em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;
  }
`;

const Hobby = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
  text-transform: none;
  margin-left: 3.2rem;

  @media only screen and (max-width: 80em) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: 48em) {
    margin-left: 0;
  }
`;

const Skills = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 2.4rem;
  display: flex;

  @media only screen and (max-width: 80em) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }
`;

const SkillBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  row-gap: 2.4rem;
  column-gap: 6.4rem;
  margin-left: 6.4rem;
  width: 100%;
  list-style: none;

  @media only screen and (max-width: 48em) {
    column-gap: 3.2rem;
  }
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
  color: var(--color-grey-800);

  @media only screen and (max-width: 80em) {
    font-size: 1.6rem;
  }
`;

const SkillContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const SkillItem = styled.img`
  width: 4rem;
`;

function AboutMe() {
  return (
    <StyledAbout id="about">
      <Container>
        <Image src="profile.jpg" />
        <About>
          <Heading>About me</Heading>
          <Text>
            I`m an architecture student who loves designing cool and
            eco-friendly buildings. Through academic projects and internships, I
            have honed my skills in architectural software, 3D modeling, and
            project management. Now i`m eager to challenge myself in
            architecture field.
            <BreakLine />I want to join a team where I can make real buildings
            look amazing and work well I want to bring my creative ideas and
            technical skills to a team where I can turn concepts into beautiful
            and practical designs for buildings.
            <BreakLine />
            <ResumeLink href="/resume.pdf">
              Check out my resume &rarr;
            </ResumeLink>
          </Text>
          <Hobbies>
            Hobbies
            <Hobby>
              Reading, Architecture, Sport, Travel, Hiking, Training
            </Hobby>
          </Hobbies>
          <Skills>
            Skills
            <SkillBox>
              <SkillsRow>
                <SkillType>CAD Drawing</SkillType>
                <SkillContainer>
                  <SkillItem src="archicad.png" />
                  <SkillItem src="autocad.png" />
                  <SkillItem src="sketchup.png" />
                </SkillContainer>
              </SkillsRow>
              <SkillsRow>
                <SkillType>Adobe</SkillType>
                <SkillContainer>
                  <SkillItem src="adobe-photoshop.png" />
                  <SkillItem src="adobe-illustrator.png" />
                  <SkillItem src="indesign.png" />
                </SkillContainer>
              </SkillsRow>
              <SkillsRow>
                <SkillType>3D Render</SkillType>
                <SkillContainer>
                  <SkillItem src="lumion.png" />
                  <SkillItem src="twinmotion.png" />
                </SkillContainer>
              </SkillsRow>
            </SkillBox>
          </Skills>
        </About>
      </Container>
    </StyledAbout>
  );
}

export default AboutMe;
