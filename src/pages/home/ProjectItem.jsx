/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledProject = styled.div`
  position: relative;
  background-color: ${(props) => props.bgColor};
  height: 70vh;
  overflow: hidden;
  cursor: pointer;

  &:hover > * {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(0.7);
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(1);
    transform: scale(1.03);
  }
`;

const Title = styled.h3`
  font-size: 2.4rem;
  max-width: 80%;
  position: absolute;
  text-align: right;
  bottom: 2rem;
  right: 2rem;
  transform: translateX(120%);
  opacity: 0;
  transition: all 0.2s ease-out;
  letter-spacing: 2px;
  color: black;
  line-height: 1.2;

  @media (hover: none) {
    transform: translateX(0);
    opacity: 1;
    color: var(--color-grey-50);
  }

  @media only screen and (max-width: 80em) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 64em) {
    font-size: 1.4rem;
  }
`;

function ProjectItem({ img, title }) {
  const navigate = useNavigate();

  return (
    <StyledProject
      onClick={() => {
        navigate("/project");
      }}
    >
      <ProjectImg src={img} alt={title} />
      <Title>{title}</Title>
    </StyledProject>
  );
}

export default ProjectItem;
