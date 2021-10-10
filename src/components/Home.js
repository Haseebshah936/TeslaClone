import React from "react";
import styled from "styled-components";
import Section from "./Section";

const data = [
  {
    id: 0,
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    titleBtn1: "Custom order",
    titleBtn2: "Existing inventory",
    imbg: "/images/model-s.jpg",
    imarrow: "/images/down-arrow.svg",
  },
  {
    id: 1,
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    titleBtn1: "Custom order",
    titleBtn2: "Existing inventory",
    imbg: "/images/model-3.jpg",
  },
  {
    id: 2,
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    titleBtn1: "Custom order",
    titleBtn2: "Existing inventory",
    imbg: "/images/model-x.jpg",
  },
  {
    id: 3,
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    titleBtn1: "Custom order",
    titleBtn2: "Existing inventory",
    imbg: "/images/model-y.jpg",
  },
  {
    id: 4,
    title: "Lowest Cost Solar Panels in America",
    description: "Money-back guarantee",
    titleBtn1: "order now",
    titleBtn2: "Learn more",
    imbg: "/images/solar-panel.jpg",
  },
  {
    id: 5,
    title: "Solar for New Roofs",
    description: "Solar Roof Costs Less Then a New Roof plus solar Panels",
    titleBtn1: "order now",
    titleBtn2: "Learn more",
    imbg: "/images/solar-roof.jpg",
  },
  {
    id: 6,
    title: "Accessories",
    description: "",
    titleBtn1: "shop now",
    imbg: "/images/accessories.jpg",
  },
];

function Home(props) {
  return (
    <Container>
      {data.map((car) => (
        <Section
          key={car.id}
          title={car.title}
          description={car.description}
          titleBtn1={car.titleBtn1}
          titleBtn2={car.titleBtn2}
          imbg={car.imbg}
          imarrow={car?.imarrow}
        />
      ))}
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
