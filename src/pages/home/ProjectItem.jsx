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

const Title = styled.h3`
  font-size: 2.4rem;
  max-width: 80%;
  position: absolute;
  text-align: right;
  bottom: 2rem;
  right: 2rem;
  transform: translateX(120%);
  opacity: 0;
  transition: all 0.3s ease-out;
  letter-spacing: 2px;
  color: var(--color-grey-0);
`;

function ProjectItem({ color, title }) {
  const navigate = useNavigate();

  return (
    <StyledProject
      onClick={() => {
        navigate("/project");
      }}
      bgColor={color}
    >
      <Title>{title}</Title>
    </StyledProject>
  );
}

export default ProjectItem;
