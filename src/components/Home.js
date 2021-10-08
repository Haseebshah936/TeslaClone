import React from "react";
import styled from "styled-components";
import Section from "./Section";
import img from "../images/model-s.jpg";

const data = [
  {
    id: 0,
    imbg: "../images/model-s.jpg",
    imarrow: "../../public/images/down-arrow.svg",
  },
  {
    id: 1,
    imbg: "../../public/images/model-3.jpg",
  },
  {
    id: 2,
    imbg: "../../public/images/model-x.jpg",
  },
  {
    id: 3,
    imbg: "../../public/images/model-y.jpg",
  },
];

function Home(props) {
  return (
    <Container>
      {data.map((car) => (
        <Section key={car.id} imbg={car.imbg} imarrow={car?.imarrow} />
      ))}
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
