import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Fade from "react-reveal/Fade";

function Section({
  imbg,
  title,
  description,
  titleBtn1 = "",
  titleBtn2 = "",
  imarrow,
}) {
  return (
    <Wrap imbg={imbg} id={title}>
      <Fade bottom>
        <TextArea>
          <h1>{title}</h1>
          <p>{description}</p>
        </TextArea>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonContainer>
            {titleBtn1 !== "" && (
              <Button
                text={titleBtn1}
                style={{
                  backgroundColor: "#171a20cc",
                  color: "white",
                }}
              />
            )}
            {titleBtn2 !== "" && (
              <Button
                text={titleBtn2}
                style={{
                  fontWeight: "550",
                  opacity: 0.8,
                }}
              />
            )}
          </ButtonContainer>
        </Fade>
        {imarrow ? <DownArrow src={`${imarrow}`} /> : <DownArrow />}
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url(${props.imbg})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;
const TextArea = styled.div`
  padding-top: 15vh;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;
const DownArrow = styled.img`
  height: 4rem;
  animation: animateDown 1.5s infinite;
  margin-bottom: 0.5rem;
`;

const Buttons = styled.div``;
