import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import React from "react";

function NavDesktop({ navigation }) {
  return (
    <div className="hidden flex-none lg:block">
      <ul className="menu menu-horizontal">
        {/* <!-- Navbar menu content here --> */}
        {navigation.data?.links.map((item) => (
          <li
            key={prismicH.asText(item.label)}
            className="overflow-hidden rounded-sm font-semibold tracking-tight text-slate-800"
          >
            <PrismicLink field={item.link}>
              <PrismicText field={item.label} />
            </PrismicLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavDesktop;
