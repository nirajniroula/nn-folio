import { PrismicLink, PrismicText } from "@prismicio/react";
import React from "react";

function NavTitle({ text }) {
  return (
    <div>
      <PrismicLink href="/" className="text-xl font-semibold tracking-tight">
        <PrismicText field={text} />
      </PrismicLink>
    </div>
  );
}

export default NavTitle;
