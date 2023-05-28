import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";

function NavDesktop({ navigation, theme, onThemeChange }) {
  return (
    <div className="hidden flex-none lg:block base-500">
      <ul className="menu menu-horizontal items-center">
        {/* <!-- Navbar menu content here --> */}
        {navigation.data?.links.map((item) => (
          <li
            key={prismicH.asText(item.label)}
            className="overflow-hidden rounded-sm font-semibold tracking-tight"
          >
            <PrismicLink field={item.link}>
              <PrismicText field={item.label} />
            </PrismicLink>
          </li>
        ))}
        {theme === "light" ? (
          <BiMoon className="mx-4" onClick={onThemeChange} />
        ) : (
          <BiSun className="mx-4" onClick={onThemeChange} />
        )}
      </ul>
    </div>
  );
}

export default NavDesktop;
