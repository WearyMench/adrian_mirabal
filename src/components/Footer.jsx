import React from "react";
import { Wrapper, Arrow, Text, ArrowCont } from "./Footer.styles";

function Footer() {
  return (
    <Wrapper>
      <Text>
        Made with ❤️ by{" "}
        <a href="https://github.com/WearyMench" target="_blank">
          Adrian Mirabal
        </a>
      </Text>
      <ArrowCont>
        <Arrow href="#nav">
          <span className="material-symbols-outlined">arrow_upward</span>
        </Arrow>
      </ArrowCont>
    </Wrapper>
  );
}

export default Footer;
