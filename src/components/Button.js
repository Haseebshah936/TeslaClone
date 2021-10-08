import React from "react";
import styled from "styled-components";

function Button({ text, ...props }) {
  return <Container {...props}>{text}</Container>;
}

export default Button;
const Container = styled.div`
  width: 30rem;
  padding: 1.4rem;
  background-color: honeydew;
  border-radius: 3rem;
  margin: 0.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
`;
