import React from "react";
import styled from "styled-components";
import Button from "./Button";

function Section({ imbg, imarrow }) {
  return (
    <Wrap style={{ backgroundImage: `url(${imbg})` }}>
      <TextArea>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </TextArea>
      <Buttons>
        <ButtonContainer>
          <Button text="Custom Order" />
          <Button
            text="Existing Inentory"
            style={{ backgroundColor: "#171a20cc", color: "white" }}
          />
        </ButtonContainer>
        {imarrow ? <DownArrow src={`${imarrow}`} /> : <DownArrow />}
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  //   background-image: url();
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
