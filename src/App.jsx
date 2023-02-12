import { Global, Title, Span, Image } from "./App.styles";
import LogoGitHub from "./assets/github.png";
import LogoLinkdIn from "./assets/linkdin.png";
import LogoCorreo from "./assets/correo.png";

function App() {
  return (
    <>
      <Global />
      <div className="App">
        <Title>
          <Span>Hi!</Span>
          My name is:
          <Span>Adrian Mirabal</Span>
        </Title>
        <p>I'm a Front End Developer</p>
        <a href="https://github.com/WearyMench" target="_blank">
          <Image src={LogoGitHub} alt="logo github" />
        </a>
        <a href="https://linkedin.com/in/adrianm07" target="_blank">
          <Image src={LogoLinkdIn} alt="logo linkdin" />
        </a>
        <a href="mailto:adrian.mirabal07@gmail.com" target="_blank">
          <Image src={LogoCorreo} alt="logo correo" />
        </a>
      </div>
    </>
  );
}

export default App;