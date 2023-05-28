import { PrismicLink, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";

function DrawerMenu({ navigation, theme, onThemeChange }) {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu w-80 bg-base-100 p-4">
        {/* <!-- Sidebar content here --> */}
        <div className="m-4 flex justify-end">
          {theme === "light" ? (
            <BiMoon onClick={onThemeChange} size={22}/>
          ) : (
            <BiSun onClick={onThemeChange} size={22}/>
          )}
        </div>

        {navigation.data?.links.map((item) => (
          <li
            key={prismicH.asText(item.label)}
            className="font-semibold tracking-tight"
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

export default DrawerMenu;
