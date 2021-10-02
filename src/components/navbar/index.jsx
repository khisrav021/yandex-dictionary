import React from "react";
import { Nav, NavDFTextsDiv, Yandex, Dictionary } from "./styles.js";

function Navbar() {
  return (
    <Nav>
      <NavDFTextsDiv>
        <Yandex>
          <b className="one">Y</b>
          <b>andex</b>
        </Yandex>
        <Dictionary>
          <p>dictionary</p>
        </Dictionary>
      </NavDFTextsDiv>
    </Nav>
  );
}

export default Navbar;
