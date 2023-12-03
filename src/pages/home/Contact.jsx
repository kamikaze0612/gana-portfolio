import styled from "styled-components";

const StyledContact = styled.section`
  padding: 6.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 2.4rem;
  text-align: center;
  margin-bottom: 4.8rem;
  letter-spacing: 2px;

  @media only screen and (max-width: 80em) {
    font-size: 2rem;
  }
`;

const EmailSendBtn = styled.a`
  &:link,
  &:visited {
    color: var(--color-grey-800);
    font-weight: 500;
    font-size: 1.6rem;
    padding: 1.6rem 2.4rem;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    gap: 0.8rem;
    border: 2px solid var(--color-grey-800);
    transition: all 0.3s ease;
    text-transform: uppercase;
  }

  &:hover,
  &:active {
    padding: 1.6rem 3.2rem;
    background-color: var(--color-grey-0);
  }
`;

const BtnIcon = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
  fill: var(--color-grey-800);
`;

const Heading = styled.h2`
  font-size: 3.6rem;
  text-transform: uppercase;
  margin-bottom: 4.8rem;

  @media only screen and (max-width: 80em) {
    font-size: 3rem;
  }
`;

function Contact() {
  return (
    <StyledContact id="contact">
      <Heading>Contact me</Heading>
      <Paragraph>If you&apos;re interested, send me an email...</Paragraph>
      <EmailSendBtn href="mailto: gankhuyag.tugs@gmail.com">
        Send email
        <BtnIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
        </BtnIcon>
      </EmailSendBtn>
    </StyledContact>
  );
}

export default Contact;
