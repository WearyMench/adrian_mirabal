import React from "react";
import { Title, Span } from "../App.styles";
import Socials from "../components/Socials";

function Home() {
  return (
    <div>
      <Title>
        <Span>Hi!</Span>
        My name is
        <Span>Adrian Mirabal</Span>
      </Title>
      <p>I'm a Front End Developer</p>
      <Socials />
    </div>
  );
}

export default Home;
