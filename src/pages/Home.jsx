import React from "react";
import {
  Title,
  Span,
  HomeWrapper,
  Image,
  Blob,
  AboutWrapper,
} from "./Home.styles";

import Socials from "../components/Socials";
import About from "../components/About";
import Skills from "../components/Skills";

import devBack from "../assets/devBack.png";
import blob from "../assets/Blob.png";

function Home() {
  return (
    <>
      <HomeWrapper>
        <div>
          <Title>
            Hi! <br />
            My name is
            <Span>Adrian Mirabal</Span>
          </Title>
          <p>I'm a Front End Developer</p>
        </div>
        <div>
          <Blob src={blob} alt="Blob" />
          <Image src={devBack} alt="Imagen Principal" />
        </div>
      </HomeWrapper>
      <Socials />
      <AboutWrapper>
        <About />
      </AboutWrapper>
      <Skills />
    </>
  );
}

export default Home;
