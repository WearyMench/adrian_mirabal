import Eugine from "../assets/Eugene.jpeg";
import { Container, Presentation, MyPhoto } from "./About.styles";

function About() {
  return (
    <Container>
      <h1 id="about">About Me</h1>
      <Presentation>
        <div>
          <MyPhoto src={Eugine} alt="mi foto" />
        </div>
        <div>
          <p>
            I am passionate about programming and have self-taught myself
            everything related to HTML, CSS, JavaScript, TypeScript, and React.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            cumque modi iste rerum deserunt vitae nam, repellendus quos soluta
            aut voluptatibus architecto sequi consectetur? Alias voluptates ad
            et deleniti minima?
          </p>
        </div>
      </Presentation>
    </Container>
  );
}

export default About;
