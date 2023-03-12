import React from "react";
import Cards from "./Cards";
import { Container } from "./Skills.styles";

function Skills() {
  return (
    <Container>
      <h1 id="skills">My skills:</h1>
      <Cards />
    </Container>
  );
}

export default Skills;
